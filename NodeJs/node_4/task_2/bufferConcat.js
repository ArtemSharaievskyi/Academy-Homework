// Імпортуємо модуль fs для роботи з файловою системою
const fs = require('fs');

// Створюємо два буфери з різними словами
const buffer1 = Buffer.from('Привіт, ', 'utf-8'); // Перший буфер зі словом
const buffer2 = Buffer.from('світ!', 'utf-8');     // Другий буфер зі словом

// Об'єднуємо обидва буфери у третій буфер
const combinedBuffer = Buffer.concat([buffer1, buffer2]);

// Виводимо результат у консоль як текст
console.log('Обʼєднаний буфер:', combinedBuffer.toString());

// Записуємо результат у файл
fs.writeFileSync('buffer_concat_output.txt', combinedBuffer);
