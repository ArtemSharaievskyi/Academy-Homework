// Імпортуємо модуль fs для роботи з потоками читання
const fs = require('fs');

// Створюємо потік для читання файлу частинами (stream)
const readStream = fs.createReadStream('bigfile.txt', 'utf-8');

// Обробляємо подію 'data' — викликається на кожен chunk
readStream.on('data', (chunk) => {
  // Перетворюємо chunk у верхній регістр і виводимо в консоль
  console.log(chunk.toString().toUpperCase());
});

// Обробка завершення потоку
readStream.on('end', () => {
  console.log('Читання завершено');
});

// Обробка помилок
readStream.on('error', (err) => {
  console.error('Помилка при читанні файлу:', err);
});
