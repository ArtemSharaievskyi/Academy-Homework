const crypto = require('crypto'); // Для хешування пароля

// Емуляція глобальної бази користувачів (як у попередньому завданні)
global.userDB = global.userDB || {
  admin: crypto.createHash('sha256').update('admin123').digest('hex'),
  guest: crypto.createHash('sha256').update('guestpass').digest('hex'),
};

// Глобальне сховище сесій
global.sessions = global.sessions || {}; // ключ — логін, значення — токен сесії

// Функція хешування пароля
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Зчитування командного рядка: login/logout loginName password
const [, , action, login, password] = process.argv;

// LOGIN
if (action === 'login') {
  if (!login || !password) {
    console.log("Введіть логін і пароль. Приклад: node sessionSystem.js login admin admin123");
    process.exit(1);
  }

  const hashedInput = hashPassword(password);
  const storedHash = global.userDB[login];

  if (!storedHash) {
    console.log("Користувача не знайдено.");
  } else if (hashedInput === storedHash) {
    // Генеруємо простий токен сесії
    const sessionToken = crypto.randomBytes(16).toString('hex');
    global.sessions[login] = sessionToken;

    console.log(`Авторизовано. Сесія створена: ${sessionToken}`);
  } else {
    console.log("Невірний пароль.");
  }

// LOGOUT
} else if (action === 'logout') {
  if (!login) {
    console.log("Введіть логін для виходу. Приклад: node sessionSystem.js logout admin");
    process.exit(1);
  }

  if (global.sessions[login]) {
    delete global.sessions[login];
    console.log(`Користувач '${login}' вийшов з системи.`);
  } else {
    console.log(" Сесія не знайдена.");
  }

} else {
  console.log("Доступні дії: login або logout");
}
