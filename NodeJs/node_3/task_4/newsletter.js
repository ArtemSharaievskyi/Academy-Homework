// Імпортуємо EventEmitter
const EventEmitter = require('events');

// Клас Newsletter успадковує EventEmitter
class Newsletter extends EventEmitter {
  // Метод для підписки нового користувача
  subscribe(callback) {
    // Додаємо обробник на подію 'article'
    this.on('article', callback);
  }

  // Метод для створення нової статті
  newArticle(title) {
    // Емітуємо подію 'article' з передачею заголовка
    this.emit('article', title);
  }
}

// Експортуємо клас Newsletter
module.exports = Newsletter;
