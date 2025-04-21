const fs = require('fs');
const path = require('path');

// Отримуємо аргументи з командного рядка
const args = process.argv.slice(2);
const command = args[0];
const dirPath = args[1] || process.cwd(); // поточна директорія, якщо не передано

if (command === 'create-log') {
  const filePath = path.join(dirPath, 'log.txt');

  // Створюємо файл log.txt
  fs.writeFile(filePath, 'Лог створено', (err) => {
    if (err) {
      console.error('Помилка при створенні лог-файлу:', err.message);
    } else {
      console.log(`Файл log.txt успішно створено в директорії: ${dirPath}`);
    }
  });
} else {
  console.log('Невідома команда. Використовуйте: create-log [шлях]');
}

// Запусти: node cli.js create-log