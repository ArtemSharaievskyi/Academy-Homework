// Імпортуємо модуль events
const EventEmitter = require('events');

// Створюємо клас FileDownloader, який наслідує EventEmitter
class FileDownloader extends EventEmitter {
  // Метод start імітує процес завантаження
  start() {
    let progress = 0; // Початковий прогрес

    // Використовуємо setInterval для оновлення прогресу кожні 500 мс
    const interval = setInterval(() => {
      progress += 20; // Збільшуємо прогрес на 20%

      // Емітуємо подію 'progress' з поточним значенням
      this.emit('progress', progress);

      // Якщо прогрес досягає або перевищує 100%
      if (progress >= 100) {
        clearInterval(interval); // Зупиняємо таймер
        this.emit('completed');  // Емітуємо подію 'completed'
      }
    }, 500); // Інтервал у 500 мс
  }
}

// Експортуємо клас
module.exports = FileDownloader;
