const fs = require('fs').promises;
const path = require('path');

async function copyFiles() {
  const inputDir = path.join(__dirname, 'input');
  const outputDir = path.join(__dirname, 'output');

  try {
    // Створюємо output, якщо не існує
    await fs.mkdir(outputDir, { recursive: true });

    // Читаємо вміст input
    const files = await fs.readdir(inputDir);

    // Перебираємо кожен файл
    for (const file of files) {
      const srcPath = path.join(inputDir, file);
      const destPath = path.join(outputDir, file);

      // Копіюємо файл
      await fs.copyFile(srcPath, destPath);
      console.log(`📄 Скопійовано: ${file}`);
    }

    console.log('Усі файли успішно скопійовано');
  } catch (err) {
    console.error('Помилка:', err.message);
  }
}

copyFiles();
