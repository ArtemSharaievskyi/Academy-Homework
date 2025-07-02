// Імпортуємо вбудований модуль crypto
const crypto = require('crypto');

// Функція для хешування пароля
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Глобальна база даних користувачів
global.users = {};

// Додаємо користувача (збереження хешу)
function registerUser(username, password) {
  const hashed = hashPassword(password);
  global.users[username] = hashed;
  console.log(`Користувач "${username}" зареєстрований.`);
}

// Перевірка пароля користувача
function login(username, password) {
  const hashed = hashPassword(password);
  if (!global.users[username]) {
    console.log("Користувача не знайдено.");
    return;
  }

  if (global.users[username] === hashed) {
    console.log("Успішна авторизація!");
  } else {
    console.log("Невірний пароль.");
  }
}

// Демонстрація:

registerUser("john", "mySecret123");
login("john", "mySecret123");    // Успішно
login("john", "wrongPassword");  // Невірно
login("jane", "anyPass");        // Користувача не знайдено
