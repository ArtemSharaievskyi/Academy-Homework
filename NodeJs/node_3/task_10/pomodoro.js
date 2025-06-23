// Імпортуємо EventEmitter
const EventEmitter = require('events');

// Створюємо клас PomodoroTimer
class PomodoroTimer extends EventEmitter {
  constructor() {
    super(); // Викликаємо конструктор EventEmitter
  }

  // Метод для запуску одного Pomodoro циклу
  start() {
    console.log('Починаємо роботу...');

    // Таймер на 25 хвилин (2 секунди для тесту)
    setTimeout(() => {
      // По завершенню викликаємо подію 'workComplete'
      this.emit('workComplete');

      // Тепер запускаємо 5-хвилинну перерву (1 секунда для тесту)
      console.log('Час на перерву...');
      setTimeout(() => {
        // По завершенню перерви — подія 'breakComplete'
        this.emit('breakComplete');
      }, 1000); // 5 хвилин → 1 секунда
    }, 2000); // 25 хвилин → 2 секунди
  }
}

// Експортуємо клас
module.exports = PomodoroTimer;
