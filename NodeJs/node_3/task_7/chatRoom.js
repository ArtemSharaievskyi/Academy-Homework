// Імпортуємо EventEmitter для роботи з подіями
const EventEmitter = require('events');

// Створюємо клас ChatRoom, який наслідує EventEmitter
class ChatRoom extends EventEmitter {
  // Метод для надсилання повідомлення
  sendMessage(sender, text) {
    // Емітуємо подію 'message' та передаємо об'єкт з даними
    this.emit('message', { sender, text });
  }
}

// Експортуємо клас ChatRoom
module.exports = ChatRoom;
