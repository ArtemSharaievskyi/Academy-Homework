const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getUsers, addUser } = require('./users');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.status(200).json(getUsers());
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Ім’я обов’язкове' });
  }

  const newUser = addUser(name);
  res.status(201).json(newUser);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
