// Імпортуємо вбудований модуль events
const EventEmitter = require('events');

// Створюємо клас ShoppingCart, який наслідує EventEmitter
class ShoppingCart extends EventEmitter {
  constructor() {
    super(); // Викликаємо конструктор батьківського класу EventEmitter
    this.items = []; // Масив для збереження товарів
  }

  // Метод для додавання товару
  addItem(name, price) {
    // Додаємо товар як об'єкт до масиву
    this.items.push({ name, price });

    // Обчислюємо загальну суму усіх товарів
    const total = this.items.reduce((sum, item) => sum + item.price, 0);

    // Викликаємо подію 'itemAdded' з передачею даних
    this.emit('itemAdded', name, total);
  }
}

// Експортуємо клас ShoppingCart
module.exports = ShoppingCart;
