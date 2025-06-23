// Імпортуємо Tournament
const Tournament = require('./tournament');

// Створюємо турнір
const tournament = new Tournament();

// Симулюємо перемоги гравців
tournament.playerWins('Олег');
tournament.playerWins('Анна');
tournament.playerWins('Олег');
tournament.playerWins('Анна');
tournament.playerWins('Анна');
tournament.playerWins('Ігор');

// Виводимо фінальну таблицю перемог
console.log('\nПідсумкова таблиця:');
console.log(tournament.getScoreboard());
