// 1.  об'єкт People за допомогою класу, який отримує дані ззовні (поля: ім'я, прізвище, вік, одружений, посада, діти)
class People {
    constructor(name, f_name, old, isMarried, hasPossition, children) {
        this.name = name;
        this.f_name = f_name;
        this.old = old;
        this.isMarried = isMarried;
        this.hasPossition = hasPossition;
        this.children = children;
    }
}
const person = new People("John", "Doe", 30, true, "Manager", ["Anna", "Jack"]);
console.log(person);

// 2.  клас shortWork із власними методами для роботи з масивами: filter, find, includes, join, slice
class shortWork {
    static filter(array, callback) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                result.push(array[i]);
            }
        }
        return result;
    }

    static find(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                return array[i];
            }
        }
        return undefined;
    }

    static includes(array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    static join(array, separator = ",") {
        let result = "";
        for (let i = 0; i < array.length; i++) {
            result += array[i];
            if (i < array.length - 1) {
                result += separator;
            }
        }
        return result;
    }

    static slice(array, start, end) {
        const result = [];
        for (let i = start; i < (end || array.length); i++) {
            result.push(array[i]);
        }
        return result;
    }
}

// 3.  об'єкт Car за допомогою класу, який отримує дані ззовні (поля: назва, модель, рік, новий, вартість, кількість коліс)
class Car {
    constructor(name, model, year, isNew, cost, wheels) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.isNew = isNew;
        this.cost = cost;
        this.wheels = wheels;
    }
}
const car = new Car("Toyota", "Corolla", 2023, true, 20000, 4);
console.log(car);

// 4.  об'єкт Animal за допомогою класу (мінімум 3 поля) і додати поведінку через прототип
class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
}
Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
};
Animal.prototype.sleep = function() {
    console.log(`${this.name} is sleeping.`);
};

// 5.  клас Dog, який наслідує поведінку Animal і додає власну поведінку
class Dog extends Animal {
    constructor(name, species, age, breed) {
        super(name, species, age);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking.`);
    }
    fetch() {
        console.log(`${this.name} is fetching.`);
    }
}
const dog = new Dog("Buddy", "Canine", 5, "Labrador");
dog.eat();
dog.sleep();
dog.bark();
dog.fetch();

// 6.  клас Poli, який виводить опис поліморфізму в консоль
class Poli {
    static describe() {
        console.log("Поліморфізм — це здатність різних об'єктів реагувати на один і той самий метод по-різному.");
    }
}
Poli.describe();

// 7. Приклад поліморфізму
class Bird extends Animal {
    eat() {
        console.log(`${this.name} is pecking at seeds.`);
    }
}
const bird = new Bird("Sparrow", "Avian", 2);
bird.eat(); // Специфічна поведінка для Bird
const genericAnimal = new Animal("Generic Animal", "Unknown", 5);
genericAnimal.eat(); // Загальна поведінка для Animal

// 8.  клас Inc, який виводить опис інкапсуляції в консоль
class Inc {
    static describe() {
        console.log("Інкапсуляція — це об'єднання даних і методів, що працюють із цими даними, в єдину сутність із обмеженим доступом до деяких компонентів.");
    }
}
Inc.describe();

// 9.  клас калькулятор із геттерами і сеттерами для операцій і полем date
class Calculator {
    constructor() {
        this._date = new Date();
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    add(a, b) {
        this._updateDate();
        return a + b;
    }

    subtract(a, b) {
        this._updateDate();
        return a - b;
    }

    multiply(a, b) {
        this._updateDate();
        return a * b;
    }

    divide(a, b) {
        this._updateDate();
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }

    power(base, exponent) {
        this._updateDate();
        return Math.pow(base, exponent);
    }

    factorial(n) {
        this._updateDate();
        if (n < 0) return undefined;
        return n === 0 ? 1 : n * this.factorial(n - 1);
    }

    sqrt(n) {
        this._updateDate();
        if (n < 0) throw new Error("Cannot compute square root of a negative number");
        return Math.sqrt(n);
    }

    _updateDate() {
        this._date = new Date();
    }
}
const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.factorial(5));
console.log(calc.date);
