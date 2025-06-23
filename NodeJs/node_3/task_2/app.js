// Імпортуємо клас ShoppingCart
const ShoppingCart = require('./shoppingCart');

// Створюємо новий екземпляр корзини
const cart = new ShoppingCart();

// Підписуємось на подію 'itemAdded' і задаємо, що потрібно зробити
cart.on('itemAdded', (name, total) => {
  // Виводимо назву доданого товару і поточну суму
  console.log(`Додано товар: ${name}`);
  console.log(`Загальна сума замовлення: ${total} грн`);
});

// Додаємо товари
cart.addItem('Ноутбук', 25000);
cart.addItem('Мишка', 800);
cart.addItem('Клавіатура', 1200);
