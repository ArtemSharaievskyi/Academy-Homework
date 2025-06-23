// Імпортуємо EventEmitter з модуля 'events'
const EventEmitter = require('events');

// Створюємо клас BankCard, який наслідує EventEmitter
class BankCard extends EventEmitter {
  constructor(correctPin) {
    super(); // Викликаємо конструктор EventEmitter
    this.correctPin = correctPin; // Зберігаємо правильний PIN-код
    this.failedAttempts = 0; // Лічильник неправильних спроб
    this.isBlocked = false; // Стан карти (чи заблокована)
  }

  // Метод для введення PIN-коду
  enterPin(pin) {
    // Якщо карта вже заблокована — припиняємо перевірку
    if (this.isBlocked) {
      console.log('Карта заблокована. Доступ заборонено.');
      return;
    }

    // Перевіряємо, чи введений PIN правильний
    if (pin === this.correctPin) {
      console.log('Доступ дозволено. PIN правильний.');
      this.failedAttempts = 0; // Скидаємо лічильник при успіху
    } else {
      // Збільшуємо кількість невдалих спроб
      this.failedAttempts++;
      console.log(`Неправильний PIN. Спроба №${this.failedAttempts}`);

      // Якщо 3 або більше невдалих спроб — блокуємо карту
      if (this.failedAttempts >= 3) {
        this.isBlocked = true; // Позначаємо як заблоковану
        this.emit('blocked');  // Емітуємо подію "blocked"
      }
    }
  }
}

// Експортуємо клас
module.exports = BankCard;
