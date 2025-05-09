//ф-ція: кількість раз прописати \n - експеримент)
function n(count) {
    return "\n".repeat(count);
  }
  
  //1. Через функцію конструктор створити об'єкт People з полями:
  //name, f_name, old, isMarried, hasPossition, children
  //Вивести об'єкт в консоль.
  
  console.log(n(3) + "//1. завдання");
  
  function People(name, f_name, old, isMarried, hasPossition, children) {
    this.name = name || "User";
    this.f_name = f_name || "Useroff";
    this.old = old || 25;
    this.isMarried = isMarried || false;
    this.hasPosition = hasPossition || true;
    this.children = children || [];
  }
  
  const citizen = new People(
    "Stepan",
    undefined,
    undefined,
    undefined,
    undefined,
    ["Mary", "John"]
  );
  console.log(n(2), citizen);
  
  //////////////////////////////////////////////////////////////////////////////
  //2. Через прототайп створити власні методи масивів:
  //   filter, find, includes, join, slice
  console.log(n(3) + "//2. завдання arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];");
  
    // Реалізація методу filter
    Array.prototype.filter = function (cb) {
        // cb - функція зворотного виклику (callback) для застосування до кожного елемента
        const arr = []; // Створення порожнього масиву для збереження відфільтрованих елементів
        for (let i = 0; i < this.length; i++) {
            // Проходимося по елементах масиву, до якого застосовується метод filter
            if (cb(this[i], i, this)) 
                arr.push(this[i]); // Якщо умова виконується (true), додаємо елемент у новий масив
        }
        return arr; // Повертаємо новий відфільтрований масив
    };
  
  // find
  Array.prototype.find = function (cb) {
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
  
  // includes
  Array.prototype.includes = function (el) {
    for (let i = 0; i < this.length; i++) {
      if (el === this[i]) return true;
    }
    return false;
  };
  
  //join
  Array.prototype.join = function (param = ", ") {
    if (!this.length) return "";
    let str = "";

    for (let i = 0; i < this.length - 1; i++) {
      str += this[i];
      str += param;
    }

    str += this[this.length - 1];
    return str;
  };
  
  //slice
  Array.prototype.slice = function (begin = 0, end = this.length) {
    if (begin < this.length * -1) begin = 0;
    if (end < this.length * -1) end = 0;
    if (begin < 0) begin = this.length + begin; 
    if (end < 0) end = this.length + end;
    if (begin > this.length) begin = this.length;
    if (end > this.length) end = this.length;
  
    const arr = [];
    for (let i = begin; i < end; i++) {
      arr.push(this[i]);
    }
    return arr;
  };
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log(
    n(2) + "Результати:" + n(2),
    "filter element > 5:\t",
    arr.filter((e) => e > 5),
    n(2),
    "find 3:\t",
    arr.find((e) => e === 3),
    n(2),
    "includes 2:\t",
    arr.includes(2),
    n(2),
    "join ' - ':\t",
    arr.join(" - "),
    n(2),
    "slice -3:\t",
    arr.slice(-3)
  );
  
  //////////////////////////////////////////////////////////////////////////////
  //3. Через функцію конструктор створити об'єкт Car з полями:
  //name, model, year, isNew, cost, wheels
  //Вивести об'єкт в консоль.
  console.log(n(3) + "//3. завдання");
  
  function Car(name, model, year, isNew, cost, wheels) {
    this.name = name || "TOYOTA";
    this.model = model || "COROLA";
    this.year = year || 2010;
    this.isNew = isNew || false;
    this.cost = cost || 25000;
    this.wheels = wheels || 4;
  }
  const car = new Car("BMW", "E38");
  console.log(car);
  
  //////////////////////////////////////////////////////////////////////////////
  //4. Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля,
  // та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
  console.log(
    n(3) +
      "//4. завдання. створити об'єкт Animal, створити мінімум 3 поля, 2 методи"
  );
  
  function Animal(type, name, age) {
    this.type = type || "animal";
    this.name = name || "N/A";
    this.age = age || 2;
  }
  
  Animal.prototype.eat = function () {
    return (
      "Hello, I`m " +
      this.type +
      " my name is " +
      this.name +
      " and I`m eating now."
    );
  };
  
  Animal.prototype.sleep = function () {
    return this.name + " is sleeping.";
  };
  
  Animal.prototype.run = function () {
    return (
      "Hello, I`m " + this.name + ", me " + this.age + " old and I`m runing."
    );
  };
  
  const animal = new Animal();
  console.log(animal);
  console.log(animal.eat());
  console.log(animal.sleep());
  console.log(animal.run());
  
  //////////////////////////////////////////////////////////////////////////////
  //5. Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal та додати власну поведінку (мінімум 2 методи).
  console.log(
    n(3) +
      "//5. завдання. Створити об'єкт Dog, унаслідувати" +
      " поведінку від об'єкту Animal, додати 2 методи"
);

function Dog(name, color, age) {
    // Викликаємо конструктор Animal, щоб мати доступ до полів Animal через Dog
    Animal.call(this, "dog", name, age);
    // "dog", тому що всі екземпляри будуть типом "собака"
    this.color = color || "white";
    // Додаємо своє поле color, якщо не передано, за замовчуванням буде "white"
}

// Унаслідуємо всі методи від Animal
Dog.prototype = Object.create(Animal.prototype);
// Виправляємо посилання на конструктор Dog
Dog.prototype.constructor = Dog;

// Метод для того, щоб собака сіла
Dog.prototype.sit = function () {
    return (
        "Hello, I`m " +
        this.color +
        " " +
        // Використовуємо поле Animal (type) у методі конструктора Dog
        this.type +
        " " +
        this.name +
        " and I am sitting."
    );
};

// Метод для того, щоб собака лягла
Dog.prototype.lieDown = function () {
    return "I`m " + this.color + " " + this.name + " and I`m lying down now.";
};

const dog = new Dog("Charley", "Brown", 4);
console.log(dog);

// Виклик методів Animal у Dog
console.log(dog.eat());
console.log(dog.sleep());
console.log(dog.run());

// Виклик власних методів
console.log(dog.sit());
console.log(dog.lieDown());