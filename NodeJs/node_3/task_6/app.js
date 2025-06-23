// Імпортуємо RegistrationSystem
const RegistrationSystem = require('./registrationSystem');

// Створюємо екземпляр системи
const system = new RegistrationSystem();

// Додаємо слухача на подію 'userRegistered'
// Він "відправляє" вітального листа
system.on('userRegistered', (user) => {
  console.log(`Відправлено вітального листа на ${user.email}`);
});

// Симулюємо реєстрацію користувача
const newUser = {
  name: 'Іван',
  email: 'ivan@example.com'
};

system.registerUser(newUser);
