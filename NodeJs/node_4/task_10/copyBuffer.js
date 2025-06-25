const fs = require('fs'); // Імпортуємо модуль для роботи з файлами

// Створюємо оригінальний буфер з тексту
const originalBuffer = Buffer.from('Hello, buffer!');

// Створюємо новий буфер з такою ж довжиною
const copiedBuffer = Buffer.alloc(originalBuffer.length);

// Копіюємо вміст з оригінального буфера у новий буфер
originalBuffer.copy(copiedBuffer);

// Записуємо скопійований буфер у новий файл
fs.writeFileSync('copied_buffer.txt', copiedBuffer);

// Повідомлення в консоль
console.log('Буфер скопійовано та записано у copied_buffer.txt');
