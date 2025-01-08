// 2. Форма входу
const userKey = "loggedUser";

// Перевірка, чи є користувач у sessionStorage
const loggedUser = sessionStorage.getItem(userKey);

if (!loggedUser) {
    // Запит імені та пароля через prompt
    const username = prompt("Введіть ваше ім'я:");
    const password = prompt("Введіть ваш пароль:");

    // Просте збереження імені в sessionStorage
    if (username && password) {
        sessionStorage.setItem(userKey, username);
        document.getElementById("welcomeMessage").textContent = `Привіт, ${username}!`;
    } else {
        document.getElementById("welcomeMessage").textContent = "Будь ласка, увійдіть у систему.";
    }
} else {
    // Вітання, якщо користувач вже увійшов
    document.getElementById("welcomeMessage").textContent = `Привіт, ${loggedUser}!`;
}
