const fs = require('fs');

// Отримуємо всі ключі глобального об'єкта
const globalKeys = Object.keys(global);

// Сортуємо за довжиною
const sortedKeys = globalKeys.sort((a, b) => a.length - b.length);

// Виводимо в консоль
console.log('Ключі global:', sortedKeys);

// Записуємо в файл
fs.writeFile('globals.txt', sortedKeys.join('\n'), (err) => {
  if (err) {
    console.error('Помилка при записі в файл:', err);
  } else {
    console.log('Ключі збережено в файл globals.txt');
  }
});

// Запустити : node globals.js