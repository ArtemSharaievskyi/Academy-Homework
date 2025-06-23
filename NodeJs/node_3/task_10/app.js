// Імпортуємо PomodoroTimer
const PomodoroTimer = require('./pomodoro');

// Створюємо екземпляр таймера
const timer = new PomodoroTimer();

// Додаємо обробник події завершення роботи
timer.on('workComplete', () => {
  console.log('Робоча сесія завершена!');
});

// Додаємо обробник події завершення перерви
timer.on('breakComplete', () => {
  console.log('Перерва завершена. Пора знову працювати!');
});

// Запускаємо таймер
timer.start();
