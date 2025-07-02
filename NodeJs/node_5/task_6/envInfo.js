// Виводимо всі змінні середовища
console.log("Усі змінні середовища (process.env):");
console.log(process.env);

// Отримуємо шлях до інтерпретатора Node.js
const nodePath = process.execPath;

// Виводимо шлях
console.log(`\n Шлях до Node.js: ${nodePath}`);

// Зберігаємо у глобальну змінну
global.nodePath = nodePath;

// Для перевірки, що глобальна змінна існує:
console.log(`\n global.nodePath = ${global.nodePath}`);
