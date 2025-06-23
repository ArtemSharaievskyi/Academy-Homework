// Імпортуємо Newsletter
const Newsletter = require('./newsletter');

// Створюємо екземпляр розсилки
const news = new Newsletter();

// Підписуємось на новини (підписник №1)
news.subscribe((title) => {
  console.log(`Користувач 1 отримав статтю: ${title}`);
});

// Підписуємось ще раз (підписник №2)
news.subscribe((title) => {
  console.log(`Користувач 2 отримав статтю: ${title}`);
});

// Додаємо нову статтю
news.newArticle('Новий реліз Node.js 22');

// Ще одна стаття
news.newArticle('JavaScript: що нового у 2025 році');
