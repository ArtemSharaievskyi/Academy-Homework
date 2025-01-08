// 1. Підрахунок кількості відвідувань сторінки
const visitCountKey = "visitCount";

// Отримуємо поточну кількість відвідувань
let visitCount = localStorage.getItem(visitCountKey) || 0;
visitCount = parseInt(visitCount) + 1;

// Оновлюємо збережене значення
localStorage.setItem(visitCountKey, visitCount);

// Виводимо результат на сторінку
document.getElementById("visitCount").textContent = `Ви відвідали цю сторінку ${visitCount} разів.`;
