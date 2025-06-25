// Імпортуємо модуль fs
const fs = require('fs');
// Імпортуємо модуль dayjs для форматування дати (за бажанням)
const dayjs = require('dayjs');

// Ім'я лог-файлу
const logFilePath = 'log.txt';

// Основна функція логування
function log(message) {
  // Отримуємо поточну дату й час у форматі YYYY-MM-DD HH:mm:ss
  const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');

  // Формуємо повне повідомлення
  const fullMessage = `[${timestamp}] ${message}\n`;

  // Якщо файл не існує, створимо його — але appendFile сам це зробить
  // Додатково перевіримо на всякий випадок
  if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, '', 'utf-8');
  }

  // Додаємо повідомлення в кінець файлу
  fs.appendFile(logFilePath, fullMessage, (err) => {
    if (err) {
      console.error('Помилка запису в лог:', err);
    } else {
      console.log('✅ Подія записана в log.txt');
    }
  });
}

// Приклад використання
log('Користувач увійшов у систему');
