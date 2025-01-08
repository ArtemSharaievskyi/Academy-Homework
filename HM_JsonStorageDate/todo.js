// 4. Список завдань
const todoKey = "todoList";
let todoList = JSON.parse(localStorage.getItem(todoKey)) || [];

// Функція для оновлення списку на сторінці
function updateTodoList() {
    const listElement = document.getElementById("todoList");
    listElement.innerHTML = "";
    todoList.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${task.title} - ${task.describe} (${task.isDone ? "Виконано" : "Невиконано"})`;
        const markDoneButton = document.createElement("button");
        markDoneButton.textContent = "Відмітити як виконане";
        markDoneButton.onclick = () => markAsDone(index);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити";
        deleteButton.onclick = () => deleteTask(index);
        listItem.append(markDoneButton, deleteButton);
        listElement.appendChild(listItem);
    });
}

// Додаємо нове завдання
document.getElementById("todoForm").onsubmit = function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const describe = document.getElementById("describe").value;
    todoList.push({ title, describe, isDone: false });
    localStorage.setItem(todoKey, JSON.stringify(todoList));
    updateTodoList();
    e.target.reset();
};

// Відмічаємо завдання як виконане
function markAsDone(index) {
    todoList[index].isDone = true;
    localStorage.setItem(todoKey, JSON.stringify(todoList));
    updateTodoList();
}

// Видаляємо завдання
function deleteTask(index) {
    todoList.splice(index, 1);
    localStorage.setItem(todoKey, JSON.stringify(todoList));
    updateTodoList();
}

// Завантажуємо список при старті
updateTodoList();
