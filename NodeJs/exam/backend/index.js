// backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Environment variables
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:admin1234@localhost:5432/todo_db';

// PostgreSQL pool
const pool = new Pool({ connectionString: DATABASE_URL });

// Initialize tables if not exist
async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      pomodoro_minutes INT NOT NULL DEFAULT 25,
      status TEXT NOT NULL DEFAULT 'active'
    );
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS timelogs (
      id SERIAL PRIMARY KEY,
      task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
      start_time TIMESTAMP NOT NULL,
      end_time TIMESTAMP NOT NULL,
      duration_seconds INT NOT NULL
    );
  `);
}

// Express app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
// CRUD tasks
app.get('/tasks', async (req, res) => {
  try {
    const filter = req.query.filter || 'all';
    let where = '';
    if (filter === 'active') where = "WHERE status = 'active'";
    if (filter === 'completed') where = "WHERE status = 'completed'";
    const result = await pool.query(`SELECT * FROM tasks ${where} ORDER BY id`);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const { title, description, pomodoro_minutes } = req.body;
    const result = await pool.query(
      'INSERT INTO tasks (title, description, pomodoro_minutes) VALUES ($1, $2, $3) RETURNING *',
      [title, description, pomodoro_minutes]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, pomodoro_minutes, status } = req.body;
    const result = await pool.query(
      `UPDATE tasks SET title=$1, description=$2, pomodoro_minutes=$3, status=$4 WHERE id=$5 RETURNING *`,
      [title, description, pomodoro_minutes, status, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id=$1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Timelog after timer ends
app.post('/timelogs', async (req, res) => {
  try {
    const { task_id, start_time, end_time, duration_seconds } = req.body;
    const result = await pool.query(
      'INSERT INTO timelogs (task_id, start_time, end_time, duration_seconds) VALUES ($1, $2, $3, $4) RETURNING *',
      [task_id, start_time, end_time, duration_seconds]
    );
    // Mark task completed if full pomodoro
    await pool.query("UPDATE tasks SET status='completed' WHERE id=$1", [task_id]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Productivity history
app.get('/history', async (req, res) => {
  try {
    const period = req.query.period || 'day';
    let start;
    if (period === 'week') start = "NOW() - INTERVAL '7 days'";
    else start = "NOW() - INTERVAL '1 day'";
    const result = await pool.query(
      `SELECT SUM(duration_seconds) AS total_seconds FROM timelogs WHERE start_time >= ${start}`
    );
    res.json({ period, total_seconds: parseInt(result.rows[0].total_seconds) || 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start
initDb().then(() => {
  app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
}).catch(err => console.error('DB init error', err));
