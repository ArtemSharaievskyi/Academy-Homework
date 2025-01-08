// 1. Create a Car object using a constructor function
function Car(name, model, old, price, wheels) {
    this.name = name;
    this.model = model;
    this.old = old;
    this.price = price;
    this.wheels = wheels;
}
const car = new Car("Toyota", "Corolla", 5, 15000, 4);
console.log(car);

// 2. Create custom array methods using prototype
Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

Array.prototype.mySplice = function(start, deleteCount, ...items) {
    const removedItems = [];
    for (let i = start; i < start + deleteCount; i++) {
        removedItems.push(this[i]);
    }
    this.length = this.length - deleteCount;
    this.push(...items);
    return removedItems;
};

// 3. Create a Dog object using a constructor function
function Dog(name, model, year, cost) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.cost = cost;
}
const dog = new Dog("Bulldog", "English", 3, 2000);
console.log(dog);

// 4. Create a Parent object with prototype methods
function Parent(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}
Parent.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
};
Parent.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.occupation}.`);
};

// 5. Create a Son object inheriting from Parent
function Son(name, age, occupation, hobby) {
    Parent.call(this, name, age, occupation);
    this.hobby = hobby;
}
Son.prototype = Object.create(Parent.prototype);
Son.prototype.constructor = Son;
Son.prototype.play = function() {
    console.log(`${this.name} enjoys ${this.hobby}.`);
};
Son.prototype.study = function() {
    console.log(`${this.name} is studying.`);
};

const son = new Son("Jack", 20, "Student", "football");
son.greet();
son.work();
son.play();
son.study();

// 6. Create a People class
class People {
    constructor(name, age, isMarried, isChilds, job) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.isChilds = isChilds;
        this.job = job;
    }
}
const person1 = new People("Alice", 30, true, true, "Engineer");
const person2 = new People("Bob", 25, false, false, "Designer");
const person3 = new People("Charlie", 35, true, true, "Teacher");
console.log(person1);
console.log(person2);
console.log(person3);

// 7. Create a Tiger class
class Tiger {
    constructor(name, kind, age, speed, weight, height) {
        this.name = name;
        this.kind = kind;
        this.age = age;
        this.speed = speed;
        this.weight = weight;
        this.height = height;
    }

    changeName(newName) {
        this.name = newName;
    }

    addAge(years) {
        this.age += years;
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    run() {
        console.log(`${this.name} is running at a speed of ${this.speed} km/h.`);
    }
}
const tiger = new Tiger("Shera", "Bengal", 5, 60, 200, 1.1);
tiger.run();
tiger.changeName("Leo");
tiger.addAge(2);
tiger.changeSpeed(80);
console.log(tiger);

// 8. Verify object inheritance
console.log(car instanceof Car); // true
console.log(dog instanceof Dog); // true
console.log(son instanceof Parent); // true
console.log(person1 instanceof People); // true
console.log(tiger instanceof Tiger); // true
