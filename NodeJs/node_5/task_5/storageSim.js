// Симуляція localStorage в Node.js через звичайний об'єкт
const storage = {
  _data: {}, // внутрішнє сховище

  // Метод для збереження значення
  setItem(key, value) {
    this._data[key] = String(value); // значення завжди зберігаємо як рядок
    console.log(`setItem: ${key} = "${value}"`);
  },

  // Метод для отримання значення
  getItem(key) {
    const value = this._data[key];
    console.log(`getItem: ${key} => "${value}"`);
    return value ?? null; // якщо ключ не існує — повертаємо null
  },

  // Метод для видалення значення
  removeItem(key) {
    if (key in this._data) {
      delete this._data[key];
      console.log(`removeItem: ${key} видалено`);
    } else {
      console.log(`removeItem: ключ "${key}" не знайдено`);
    }
  },

  // Показати всі ключі
  showAll() {
    console.log("Вміст storage:", this._data);
  }
};

// Тестування роботи:
storage.setItem('name', 'John');
storage.setItem('age', 30);

storage.getItem('name');   // => "John"
storage.getItem('city');   // => null

storage.removeItem('age'); // => видалено
storage.removeItem('foo'); // => не знайдено

storage.showAll();
