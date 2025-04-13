// Завдання 1: Функція, яка виводить "Hello, World!" з затримкою 3 секунди
// Опис: Використовуємо setTimeout для асинхронного виконання.

console.info("Асинхронне виконання: setTimeout");

function helloWorld() {
  setTimeout(() => {
    console.log("Hello, World!");
  }, 3000);
}

// Викликаємо функцію
helloWorld();

// Опис: Виконання setTimeout асинхронно — це означає, що він не блокує інші операції в JavaScript. 
// Виведення "Hello, World!" буде виконано через 3 секунди, 
// але решта коду не буде заблокована.
console.log("Це буде виведено до того, як Hello, World!");

// Завдання 2: Промисифіковані функції та виклики з Promise.all, Promise.allSettled, Promise.race, Promise.any

// Створюємо промісифіковані функції:
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

// Promise.all: Всі проміси повинні бути успішними
Promise.all([asyncTask1(), asyncTask2(), asyncTask3()])
  .then((results) => {
    console.log("Promise.all результати:", results);
  })
  .catch((error) => {
    console.error("Promise.all помилка:", error);
  });

// Promise.allSettled: Виконується всі проміси, незалежно від результату
Promise.allSettled([asyncTask1(), asyncTask2(), asyncTask3()])
  .then((results) => {
    console.log("Promise.allSettled результати:", results);
  });

// Promise.race: Перший успішний проміс
Promise.race([asyncTask1(), asyncTask2(), asyncTask3()])
  .then((result) => {
    console.log("Promise.race результат:", result);
  })
  .catch((error) => {
    console.error("Promise.race помилка:", error);
  });

// Promise.any: Перший успішний проміс з будь-яким результатом
Promise.any([asyncTask1(), asyncTask2(), asyncTask3()])
  .then((result) => {
    console.log("Promise.any результат:", result);
  })
  .catch((error) => {
    console.error("Promise.any помилка:", error);
  });

// Завдання 3: Використання async/await та Promise в циклі

async function runAsyncTasks() {
  console.log("Початок виконання асинхронних завдань:");

  // Використовуємо async/await
  for (let i = 1; i <= 3; i++) {
    const task = await asyncTask1();
    console.log(`Завдання ${i} завершено через async/await`);
  }

  console.log("Закінчено виконання async/await");

  // Використовуємо Promise
  console.log("Початок виконання з Promise:");
  Promise.all([asyncTask2(), asyncTask3()])
    .then(() => {
      console.log("Завдання з Promise завершено.");
    })
    .catch((error) => {
      console.error("Помилка в Promise", error);
    });
}

// Викликаємо функцію
runAsyncTasks();

// Завдання 4: Анімація об'єкта на веб-сторінці

// Функція для асинхронного запуску анімації при кліку на кнопку
function startAnimation() {
  const box = document.getElementById("box");

  // Додаємо клас для анімації
  setTimeout(() => {
    box.classList.add("animate");
  }, 500); // Затримка для демонстрації
}
