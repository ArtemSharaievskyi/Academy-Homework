// 1. Зміна стилю елементу
document.getElementById("changeStyleBtn").addEventListener("click", () => {
    const text = document.getElementById("text");
    text.style.color = "blue";
    text.style.fontSize = "24px";
    text.style.backgroundColor = "lightgray";
});

// 2. Зміна текстового вмісту
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const title = document.getElementById("title");
    title.textContent = "DOM Завдання: Змінений текст";
});

// 3. Додавання нового елементу
document.getElementById("addElementBtn").addEventListener("click", () => {
    const container = document.getElementById("dynamicElements");
    for (let i = 1; i <= 3; i++) {
        const newElement = document.createElement("p");
        newElement.textContent = `Новий елемент ${i}`;
        container.appendChild(newElement);
    }
});

// 4. Видалення елементу
document.getElementById("deleteElementBtn").addEventListener("click", () => {
    const container = document.getElementById("dynamicElements");
    container.innerHTML = ""; // Видалення всіх елементів
});

// 5. Зміна атрибутів
document.getElementById("changeAttrBtn").addEventListener("click", () => {
    const image = document.getElementById("image");
    image.src = "new-image.PNG";
    image.alt = "Оновлене зображення";
});

// 6. Сортування списку
document.getElementById("sortListBtn").addEventListener("click", () => {
    const list = document.getElementById("list");
    const items = Array.from(list.children);
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
});

// 7. Зміна порядку елементів
const container = document.getElementById("container");
const elements = container.children;
const firstElement = elements[0];
container.appendChild(firstElement); // Переміщення першого елемента вниз

// 8. Видалення дочірніх елементів
document.getElementById("removeChildrenBtn").addEventListener("click", () => {
    const container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});

// 9. Зміна класів
const text = document.getElementById("text");
text.classList.add("highlight");
setTimeout(() => {
    text.classList.replace("highlight", "original");
}, 3000);

// 10. Зміна HTML-структури
const newSection = document.createElement("section");
newSection.innerHTML = `
    <h2>Додатковий розділ</h2>
    <p>Це новий елемент, доданий до структури.</p>
`;
document.body.appendChild(newSection);
