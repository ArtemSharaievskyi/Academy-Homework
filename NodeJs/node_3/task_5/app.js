// Імпортуємо клас BankCard
const BankCard = require('./bankCard');

// Створюємо картку з правильним PIN-кодом 1234
const card = new BankCard(1234);

// Підписуємось на подію "blocked"
card.on('blocked', () => {
  console.log('Карту заблоковано через 3 невдалі спроби.');
});

// Симулюємо введення неправильного PIN
card.enterPin(1111); // Невірно
card.enterPin(2222); // Невірно
card.enterPin(3333); // Невірно і тут спрацює блокування

// Навіть якщо ввести правильний PIN — вже не працює
card.enterPin(1234); // повідомлення про блокування
