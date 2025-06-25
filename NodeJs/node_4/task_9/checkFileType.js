const fs = require('fs');        // Модуль для роботи з файловою системою
const path = require('path');    // Модуль для побудови шляхів

// Функція, яка перевіряє, чи це файл, і виводить його розмір у КБ
function checkFileType(filePath) {
  // Отримуємо абсолютний шлях
  const absolutePath = path.resolve(filePath);

  // Читаємо інформацію про файл/папку
  fs.stat(absolutePath, (err, stats) => {
    if (err) {
      console.error('Помилка при зчитуванні:', err.message);
      return;
    }

    if (stats.isFile()) {
      // Розмір у байтах → конвертація в Кілобайти (1 КБ = 1024 байти)
      const sizeInKB = (stats.size / 1024).toFixed(2);
      console.log(`Це файл. Розмір: ${sizeInKB} КБ`);
    } else {
      console.log('Це не файл, а можливо папка або інший тип');
    }
  });
}
checkFileType('./example.txt');
