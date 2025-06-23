// Імпортуємо клас FileDownloader
const FileDownloader = require('./fileDownloader');

// Створюємо екземпляр
const downloader = new FileDownloader();

// Підписуємось на подію 'progress'
downloader.on('progress', percent => {
  console.log(`Прогрес: ${percent}%`);
});

// Підписуємось на подію 'completed'
downloader.on('completed', () => {
  console.log('Завантаження завершено!');
});

// Запускаємо завантаження
downloader.start();
