const crypto = require('crypto'); // Імпортуємо модуль для хешування

// Припускаємо, що глобальний userDB вже існує. Якщо ні — створюємо.
global.userDB = global.userDB || {
  artem: crypto.createHash('sha256').update('mySecret123').digest('hex'),
  olga: crypto.createHash('sha256').update('1234qwerty').digest('hex'),
};

// Функція хешування пароля
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Зчитування аргументів: login password
const [, , login, password] = process.argv;

if (!login || !password) {
  console.log("Будь ласка, введіть логін і пароль. Приклад: node loginCheck.js artem mySecret123");
  process.exit(1);
}

// Перевірка логіна і пароля
function verifyUser(username, plainPassword) {
  const hashedInput = hashPassword(plainPassword); // Хешуємо введений пароль
  const storedPassword = global.userDB[username];  // Шукаємо хеш у "базі"

  if (!storedPassword) {
    console.log("Користувача не знайдено.");
    return;
  }

  if (storedPassword === hashedInput) {
    console.log("Авторизація пройшла успішно!");
  } else {
    console.log("Невірний пароль.");
  }
}

// Викликаємо перевірку
verifyUser(login, password);
