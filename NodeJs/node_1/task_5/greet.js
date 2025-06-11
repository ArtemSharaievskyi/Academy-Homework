// у файлі package-json було створене поле - "projectAuthor": "Artem Sharaievskyi"

const fs = require('fs');
const path = require('path');

// Шлях до package.json
const packagePath = path.join(__dirname, 'package.json');

// Зчитуємо файл
const data = fs.readFileSync(packagePath, 'utf-8');

// Парсимо JSON
const json = JSON.parse(data);

// Витягуємо ім’я автора
const author = json.projectAuthor;

if (author) {
  console.log(`Привіт, ${author}! Ласкаво просимо до проєкту`);
} else {
  console.log("⚠️ Поле 'projectAuthor' не знайдено у package.json");
}


// Запуск
//Через Node.js напряму: node greet.js
//Або через npm-скрипт: npm start

//Вивід буде такий: Привіт, Artem Sharaievskyi! Ласкаво просимо до проєкту