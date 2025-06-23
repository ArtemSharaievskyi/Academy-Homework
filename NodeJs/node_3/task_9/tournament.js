// Імпортуємо EventEmitter з модуля 'events'
const EventEmitter = require('events');

// Створюємо клас Tournament
class Tournament extends EventEmitter {
  constructor() {
    super(); // Викликаємо конструктор батьківського класу EventEmitter

    // Створюємо об'єкт для зберігання кількості перемог
    this.wins = {};

    // Додаємо обробник події 'playerWin'
    this.on('playerWin', (playerName) => {
      // Якщо гравець уже є в об'єкті — збільшуємо лічильник
      // Інакше — ініціалізуємо з 1 перемогою
      if (this.wins[playerName]) {
        this.wins[playerName]++;
      } else {
        this.wins[playerName] = 1;
      }

      // Виводимо оновлену інформацію
      console.log(`${playerName} переміг! Загальна кількість перемог: ${this.wins[playerName]}`);
    });
  }

  // Метод для реєстрації перемоги гравця
  playerWins(playerName) {
    this.emit('playerWin', playerName);
  }

  // Метод для отримання статистики перемог
  getScoreboard() {
    return this.wins;
  }
}

// Експортуємо клас
module.exports = Tournament;
