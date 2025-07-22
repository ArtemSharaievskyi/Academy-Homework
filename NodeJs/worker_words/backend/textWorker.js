
const { parentPort, workerData } = require('worker_threads');

// Получаем текст из main потока
const text = workerData.text;

// Убираем всё, кроме букв и пробелов, приводим к нижнему регистру
const words = text
  .toLowerCase()
  .replace(/[^а-яa-z\s]/gi, ' ')
  .split(/\s+/)
  .filter(Boolean);

// Общее число слов
const totalWords = words.length;

// Считаем частотность
const freq = {};
for (const w of words) {
  freq[w] = (freq[w] || 0) + 1;
}

// Уникальные слова
const uniqueWords = Object.keys(freq).length;

// Топ‑10 по частоте
const topWords = Object.entries(freq)
  .map(([word, count]) => ({ word, count }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

// Отправляем результат обратно
parentPort.postMessage({
  totalWords,
  uniqueWords,
  topWords,
  workerPid: process.pid
});
