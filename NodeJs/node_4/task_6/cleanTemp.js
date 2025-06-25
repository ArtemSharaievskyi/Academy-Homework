// Імпортуємо необхідні модулі
const fs = require('fs');
const path = require('path');

// Шлях до директорії, яку перевіряємо
const tempDir = path.join(__dirname, 'temp');

// Отримуємо поточний час у мілісекундах
const now = Date.now();

// Обмеження — 2 хвилини в мс
const ageLimit = 2 * 60 * 1000;

// Зчитуємо вміст директорії
fs.readdir(tempDir, (err, files) => {
  if (err) {
    console.error('Помилка читання директорії:', err);
    return;
  }

  // Перебираємо кожен файл
  files.forEach(file => {
    const filePath = path.join(tempDir, file);

    // Отримуємо інформацію про файл
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(`Помилка читання файлу ${file}:`, err);
        return;
      }

      // Перевіряємо вік файлу
      const fileAge = now - stats.mtimeMs;

      if (fileAge > ageLimit) {
        // Видаляємо файл
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Помилка видалення ${file}:`, err);
          } else {
            console.log(`Видалено файл: ${file}`);
          }
        });
      }
    });
  });
});
