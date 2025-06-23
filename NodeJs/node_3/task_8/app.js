// Імпортуємо модуль EventEmitter
const EventEmitter = require('events');

// Створюємо клас NetworkMonitor, який наслідує EventEmitter
class NetworkMonitor extends EventEmitter {
  // Метод перевірки швидкості
  checkSpeed(speedMbps) {
    // Виводимо поточну швидкість
    console.log(`Поточна швидкість: ${speedMbps} Мбіт/с`);

    // Якщо швидкість нижче 10 — викликаємо подію "slowConnection"
    if (speedMbps < 10) {
      this.emit('slowConnection', speedMbps);
    }
  }
}

// Експортуємо клас
module.exports = NetworkMonitor;
