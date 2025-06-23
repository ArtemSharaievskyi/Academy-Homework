// Імпортуємо модуль EventEmitter
const EventEmitter = require('events');

// Створюємо клас RegistrationSystem, що наслідує EventEmitter
class RegistrationSystem extends EventEmitter {
  // Метод для реєстрації нового користувача
  registerUser(user) {
    console.log(`Користувач ${user.name} зареєстрований.`);
    
    // Генеруємо подію 'userRegistered' з даними користувача
    this.emit('userRegistered', user);
  }
}

// Експортуємо клас
module.exports = RegistrationSystem;
