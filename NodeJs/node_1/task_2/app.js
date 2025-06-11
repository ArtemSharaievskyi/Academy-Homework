const formatName = require('./formatter');

// Отримуємо ім'я з аргументів
const userName = process.argv[2];

if (!userName) {
  console.log('Будь ласка, введіть ім’я. Приклад: node app.js John');
} else {
  const formatted = formatName(userName);
  console.log(`Привіт, ${formatted}`);
}

// ЗАПУСТИТИ: node app.js John