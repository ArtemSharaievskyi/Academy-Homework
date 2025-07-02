// Імпортуємо модуль для форматування часу
const { format } = require('date-fns');

// Ініціалізуємо глобальний масив логів (якщо ще не створено)
global.logs = global.logs || [];

/**
 * Функція для запису нового лог-повідомлення
 * @param {string} message — текст події
 */
function logEvent(message) {
  // Отримаємо поточний timestamp у форматі YYYY-MM-DD HH:mm:ss
  const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  // Створюємо об’єкт логу
  const entry = { timestamp, message };
  // Додаємо до глобального масиву
  global.logs.push(entry);
  // Підтверджуємо виводом
  console.log(`Logged: [${timestamp}] ${message}`);
}

/**
 * Функція для виведення всієї історії логів
 */
function showLogs() {
  if (global.logs.length === 0) {
    console.log('Історія логів порожня.');
    return;
  }
  console.log('=== ІСТОРІЯ ЛОГІВ ===');
  for (const { timestamp, message } of global.logs) {
    console.log(`[${timestamp}] ${message}`);
  }
  console.log('=== КІНЕЦЬ ІСТОРІЇ ===');
}

// Розбираємо аргументи командного рядка
// Виклик має виглядати: 
//   node logs.js            — щоб логувати нову подію, передавши текст як змінну оточення LOG_MSG
//   node logs.js --show     — щоб вивести всю історію
const args = process.argv.slice(2);

if (args.includes('--show')) {
  // Якщо є флаг --show — друкуємо історію і виходимо
  showLogs();
  process.exit(0);
}

// Для логування нової події чекаємо, що текст буде в переданій змінній оточення LOG_MSG
const msg = process.env.LOG_MSG;
if (!msg) {
  console.log('Щоб зафіксувати подію, встановіть змінну LOG_MSG і запустіть без параметрів:');
  console.log('  LOG_MSG="Текст події" node logs.js');
  process.exit(1);
}

// Логування нової події
logEvent(msg);
