const fs = require('fs');           // Імпортуємо модуль fs для роботи з файлами
const path = require('path');       // Модуль для роботи з шляхами

// Створюємо буфер з довільного тексту
const originalText = 'Hello from buffer!';
const buffer = Buffer.from(originalText);  // Конвертуємо текст у буфер

console.log('Початковий буфер:', buffer);

// Конвертуємо буфер у JSON-формат
const json = buffer.toJSON();  // Повертає об'єкт вигляду { type: 'Buffer', data: [...] }

// Шлях до файлу
const filePath = path.join(__dirname, 'buffer.json');

// Записуємо JSON у файл
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
console.log('Буфер збережено як JSON у buffer.json');

// Зчитуємо файл назад
const readJson = JSON.parse(fs.readFileSync(filePath, 'utf-8')); // Зчитуємо та парсимо JSON

// Відновлюємо буфер з JSON
const restoredBuffer = Buffer.from(readJson.data);  // Створюємо новий буфер із масиву байтів

console.log('Відновлений буфер:', restoredBuffer);
console.log('Розпакований текст:', restoredBuffer.toString()); // Перетворюємо буфер назад у текст
