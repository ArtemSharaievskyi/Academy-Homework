// Імпортуємо модуль fs для роботи з файлами
const fs = require('fs');

// Функція приймає текстовий рядок
function writeBufferToFile(inputString) {
  // Створюємо буфер з переданого рядка
  const buffer = Buffer.from(inputString, 'utf-8');

  // Записуємо буфер у файл 'buffer_output.txt'
  fs.writeFile('buffer_output.txt', buffer, (err) => {
    if (err) {
      // Якщо сталася помилка при записі
      console.error('Помилка при записі у файл:', err);
    } else {
      // Виводимо довжину буфера в байтах
      console.log(`Рядок записано у файл. Довжина в байтах: ${buffer.length}`);
    }
  });
}

// Тестовий виклик функції
writeBufferToFile("приклад тексту для буфера.");
