// Завдання 1: Промисифікуйте функції
// Опис: Створити функції, які використовують проміси для обробки асинхронних завдань.

function asyncTask1() {
return new Promise((resolve, reject) => {
setTimeout(() => {
    console.log("Завдання 1 виконано");
    resolve("Результат 1");
}, 1000);
});
}

function asyncTask2() {
return new Promise((resolve, reject) => {
setTimeout(() => {
    console.log("Завдання 2 виконано");
    resolve("Результат 2");
}, 2000);
});
}

function asyncTask3() {
return new Promise((resolve, reject) => {
setTimeout(() => {
    console.log("Завдання 3 виконано");
    resolve("Результат 3");
}, 1500);
});
}

// Завдання 2: Викликайте ланцюжок виклику асинхронних функцій через Promise
// Опис: Ланцюжок промісів для послідовного виконання функцій.

asyncTask1()
.then((result1) => {
    console.log(result1);
    return asyncTask2();
})
.then((result2) => {
    console.log(result2);
    return asyncTask3();
})
.then((result3) => {
    console.log(result3);
})
.catch((error) => {
    console.error("Помилка в ланцюжку", error);
});

// Завдання 3: Викликайте ланцюжок виклику асинхронних функцій через async/await
// Опис: Послідовне виконання функцій за допомогою async/await.

async function executeAsyncTasks() {
    try {
        const result1 = await asyncTask1();
        console.log(result1);

        const result2 = await asyncTask2();
        console.log(result2);

        const result3 = await asyncTask3();
        console.log(result3);
        } catch (error) {
        console.error("Помилка в async/await", error);
    }
}

executeAsyncTasks();

// Завдання 4: Покажіть приклади використання Promise.all, Promise.allSettled, Promise.race
// Опис: Демонстрація методів роботи з промісами.

// Promise.all: Виконання всіх промісів, якщо всі успішні
Promise.all([asyncTask1(), asyncTask2(), asyncTask3()])
.then((results) => {
    console.log("Promise.all результати:", results);
})
.catch((error) => {
    console.error("Promise.all помилка:", error);
});

// Promise.allSettled: Виконання всіх промісів незалежно від результату
Promise.allSettled([asyncTask1(), asyncTask2(), asyncTask3()])
.then((results) => {
    console.log("Promise.allSettled результати:", results);
});

// Promise.race: Виконання першого виконаного промісу
Promise.race([asyncTask1(), asyncTask2(), asyncTask3()])
.then((result) => {
    console.log("Promise.race результат:", result);
})
.catch((error) => {
    console.error("Promise.race помилка:", error);
});
