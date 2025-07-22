const express = require('express');
const { Worker } = require('worker_threads');
const path = require('path');
const { fork, exec, spawn } = require('child_process');
const cluster = require('cluster');
const os = require('os');

const PORT = 3000;

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();

  app.get('/heavy-thread', (req, res) => {
    console.time('heavy-thread');
    const worker = new Worker(path.resolve(__dirname, 'heavyWorker.js'));
    worker.once('message', (sum) => {
      console.timeEnd('heavy-thread');
      res.json({ sum, pid: worker.threadId, time: 'heavy-thread', type: 'worker' });
    });
  });

  app.get('/heavy-fork', (req, res) => {
    console.time('heavy-fork');
    const child = fork(path.resolve(__dirname, 'heavyFork.js'));
    child.once('message', (result) => {
      console.timeEnd('heavy-fork');
      res.json({ result, pid: child.pid, time: 'heavy-fork', type: 'fork' });
    });
  });

  app.get('/run-shell', (req, res) => {
    console.time('run-shell');
    exec('ls -lh', (err, stdout, stderr) => {
      console.timeEnd('run-shell');
      res.json({ stdout, stderr, pid: process.pid, time: 'run-shell', type: 'shell' });
    });
  });

  app.get('/log-grep', (req, res) => {
    const results = [];
    console.time('log-grep');
    const grep = spawn('grep', ['ERROR', path.resolve(__dirname, 'logs.txt')]);
    grep.stdout.on('data', (data) => results.push(data.toString()));
    grep.on('close', (code) => {
      console.timeEnd('log-grep');
      res.json({ output: results.join(''), pid: grep.pid, time: 'log-grep', type: 'spawn' });
    });
  });

  app.get('/clustered', (req, res) => {
    res.json({ pid: process.pid, type: 'cluster' });
  });

  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started on port ${PORT}`);
  });
}