const fs = require('fs');
const path = require('path');

// Отримуємо аргументи командного рядка
const args = process.argv.slice(2);

// Допоміжна функція для витягування значення аргументу
function getArgValue(flag) {
  const index = args.indexOf(flag);
  return (index !== -1 && index + 1 < args.length) ? args[index + 1] : null;
}

const src = getArgValue('--src');
const dest = getArgValue('--dest');

if (!src || !dest) {
  console.log('Використання: node text-replacer.js --src <вхідний_файл> --dest <вихідний_файл>');
  process.exit(1);
}

// Зчитування, заміна і запис
fs.readFile(src, 'utf-8', (err, data) => {
  if (err) {
    console.error('Помилка при читанні src-файлу:', err.message);
    return;
  }

  const processedText = data.replace(/test/gi, 'exam');

  fs.writeFile(dest, processedText, (err) => {
    if (err) {
      console.error('Помилка при записі у dest-файл:', err.message);
    } else {
      console.log(`Текст успішно оброблено і записано в ${dest}`);
    }
  });
});

// Запустити : node text-replacer.js --src input.txt --dest output.txt