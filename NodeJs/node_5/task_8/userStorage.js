const fs = require('fs');
const path = require('path');

// Файл для зберігання імені користувача
const storagePath = path.join(__dirname, 'storage.json');

// Функція для читання збереженого імені
function readStoredUser() {
  if (fs.existsSync(storagePath)) {
    const data = fs.readFileSync(storagePath, 'utf-8');
    const json = JSON.parse(data);
    return json.username;
  }
  return null;
}

// Функція для запису нового імені
function saveUser(username) {
  const data = { username };
  fs.writeFileSync(storagePath, JSON.stringify(data), 'utf-8');
  console.log(`Ім’я "${username}" збережено.`);
}

// Читання з process.stdin
function askUsername() {
  process.stdout.write('Введіть ваше ім’я: ');
  process.stdin.on('data', (data) => {
    const username = data.toString().trim();
    global.currentUser = username;
    saveUser(username);
    process.stdin.pause(); // Завершення вводу
  });
}

// Перевіряємо, чи вже є збережене ім’я
const existingUser = readStoredUser();

if (existingUser) {
  global.currentUser = existingUser;
  console.log(`Вітаємо назад, ${existingUser}!`);
} else {
  askUsername();
}
