// 3. Показуємо дату останнього входу
const lastVisitKey = "lastVisit";

// Отримуємо дату останнього відвідування
const lastVisit = localStorage.getItem(lastVisitKey);

// Виводимо повідомлення
if (lastVisit) {
    document.getElementById("lastVisitMessage").textContent = `Ваша остання активність була: ${lastVisit}.`;
} else {
    document.getElementById("lastVisitMessage").textContent = "Це ваш перший візит!";
}

// Оновлюємо дату останнього входу
const currentDate = new Date().toLocaleString();
localStorage.setItem(lastVisitKey, currentDate);
