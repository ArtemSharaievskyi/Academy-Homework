// Імпортуємо ChatRoom
const ChatRoom = require('./chatRoom');

// Створюємо екземпляр чат-кімнати
const chat = new ChatRoom();

// Додаємо обробник на подію 'message'
// Він виводить ім'я відправника і текст повідомлення
chat.on('message', (data) => {
  console.log(`[${data.sender}]: ${data.text}`);
});

// Симулюємо надсилання повідомлень
chat.sendMessage('Оля', 'Привіт усім!');
chat.sendMessage('Андрій', 'Як справи?');
chat.sendMessage('Бот', 'Нагадую про дз :)');
