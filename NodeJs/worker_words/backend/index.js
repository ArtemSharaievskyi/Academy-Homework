const express = require('express');
const { Worker } = require('worker_threads');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

app.post('/analyze-text', (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Field "text" is required and must be a string.' });
  }

  const worker = new Worker(path.resolve(__dirname, 'textWorker.js'), {
    workerData: { text }
  });

  const startTime = Date.now();

  worker.on('message', (result) => {
    const duration = Date.now() - startTime;
    if (duration > 5000) console.warn('Warning: Slow Task');
    res.json({ ...result, duration });
  });

  worker.on('error', (err) => {
    console.error('Worker error:', err);
    res.status(500).json({ error: 'Worker error' });
  });

  worker.on('exit', (code) => {
    if (code !== 0)
      console.error(`Worker stopped with exit code ${code}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});