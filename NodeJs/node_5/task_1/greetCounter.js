// Створюємо глобальну змінну для підрахунку викликів
global.callCount = 0;

// Функція вітає користувача та збільшує лічильник
function greetUser(name) {
  global.callCount++; // Збільшуємо глобальний лічильник
  console.log(`Привіт, ${name}!`);
  console.log(`Кількість викликів: ${global.callCount}`);
}

// Приклади виклику функції
greetUser('Артем');
greetUser('Оля');
greetUser('Іван');
