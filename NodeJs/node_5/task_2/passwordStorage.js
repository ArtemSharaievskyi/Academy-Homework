const crypto = require('crypto'); // Імпортуємо вбудований модуль для хешування

// Створюємо глобальну "базу даних" користувачів
global.userDB = {};

// Функція для хешування пароля
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Функція для збереження користувача з хешованим паролем
function registerUser(username, password) {
  const hashed = hashPassword(password); // Хешуємо пароль
  global.userDB[username] = hashed; // Зберігаємо у глобальну базу
  console.log(`Користувача "${username}" збережено з хешованим паролем.`);
}

// Демонстрація
registerUser('artem', 'mySecret123');
registerUser('olga', '1234qwerty');

// Виводимо поточну базу
console.log(global.userDB);
