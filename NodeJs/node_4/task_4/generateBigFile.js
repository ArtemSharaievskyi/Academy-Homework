// Імпортуємо модуль fs
const fs = require('fs');

// Створюємо записуючий потік
const stream = fs.createWriteStream('bigfile.txt');

// Генеруємо 1000 рядків тексту
for (let i = 1; i <= 1000; i++) {
  stream.write(`Рядок номер ${i}\n`);
}

// Закриваємо потік після запису
stream.end(() => {
  console.log('Файл bigfile.txt успішно створено!');
});
