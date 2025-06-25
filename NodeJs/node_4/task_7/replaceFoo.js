const fs = require('fs');                 // Імпортуємо модуль для роботи з файловою системою
const { Transform } = require('stream');  // Імпортуємо клас Transform із модуля stream
const path = require('path');             // Для роботи зі шляхами

// Шлях до вхідного та вихідного файлів
const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

// Створюємо трансформуючий потік, який замінює "foo" на "bar"
const replaceStream = new Transform({
  transform(chunk, encoding, callback) {
    // Перетворюємо chunk у строку, замінюємо всі входження
    const modifiedChunk = chunk.toString().replace(/foo/g, 'bar');

    // Передаємо змінений chunk далі
    callback(null, modifiedChunk);
  }
});

// Створюємо потоки для читання та запису
const reader = fs.createReadStream(inputPath);   // Читає вхідний файл
const writer = fs.createWriteStream(outputPath); // Записує у вихідний файл

// З'єднуємо потоки: читання -> трансформування -> запис
reader
  .pipe(replaceStream)
  .pipe(writer)
  .on('finish', () => {
    console.log('Заміна завершена. Результат збережено у output.txt');
  });
