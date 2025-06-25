// Імпортуємо модуль fs для зчитування файлів
const fs = require('fs');

// Зчитуємо вміст файлів a.txt та b.txt як буфери
const bufferA = fs.readFileSync('a.txt'); // Перший файл
const bufferB = fs.readFileSync('b.txt'); // Другий файл

// Порівнюємо буфери байт за байтом
const result = Buffer.compare(bufferA, bufferB);

// Аналізуємо результат порівняння
if (result === 0) {
  console.log('Файли однакові');
} else if (result < 0) {
  console.log('Файл a.txt менший за b.txt');
} else {
  console.log('Файл a.txt більший за b.txt');
}
