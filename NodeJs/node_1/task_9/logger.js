const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const logFilePath = path.join(__dirname, 'app.log');

// Допоміжна функція для форматування
function formatMessage(level, message) {
  const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
}

// Основні методи логера
function log(level, message) {
  const formatted = formatMessage(level, message);
  fs.appendFileSync(logFilePath, formatted, 'utf8');
}

module.exports = {
  info: (msg) => log('info', msg),
  warn: (msg) => log('warn', msg),
  error: (msg) => log('error', msg),
};
