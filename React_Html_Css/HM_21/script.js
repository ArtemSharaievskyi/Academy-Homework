//Рівень 3.1 задачника JavaScript
//Завдання 1: Перевірити, чи розташовані цифри числа у порядку зростання.
let num = 123456;
let isA = num
  .toString()
  .split("")
  .every((digit, index, arr) => index === 0 || digit >= arr[index - 1]);

if (isA) {
  console.log("Цифри числа розташовані у порядку зростання");
} else {
  console.log("Цифри числа не розташовані у порядку зростання");
}

//Завдання 2: Видалити порожні рядки з масиву.
let arr32 = [1, "", 2, 3, "", 5];
arr32 = arr32.filter((elem) => elem !== "");
console.log(arr32);

//Завдання 3: Відсортувати кожен вкладений масив за зростанням.
let arr33 = [
  [2, 1, 4, 3, 5],
  [3, 5, 2, 4, 1],
  [4, 3, 1, 5, 2],
];
arr33 = arr33.map((subArray) => subArray.sort((a, b) => a - b));
console.log(arr33);

//Завдання 4: Зрівняти довжину двох масивів, обрізавши більший до розміру меншого.
let arr1_36 = [1, 2, 3];
let arr2_36 = [1, 2, 3, 4, 5];

let minLength = Math.min(arr1_36.length, arr2_36.length);
arr1_36.length = minLength;
arr2_36.length = minLength;

console.log(arr1_36);
console.log(arr2_36);

//Рівень 3.2 задачника JavaScript
//Завдання 1: Вивести всі числа в діапазоні 10-1000, у яких передостання цифра парна.
for (let i = 10; i <= 50; i++) {
  if (Math.floor(i / 10) % 2 === 0) {
    console.log(i);
  }
}
console.log("_________________________");
for (let i = 950; i <= 1000; i++) {
  if (Math.floor(i / 10) % 2 === 0) {
    console.log(i);
  }
}

//Завдання 2: Видалити кожен п'ятий елемент із масиву.
let arr41 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr41 = arr41.filter((elem, index) => (index + 1) % 5 !== 0);
console.log(arr41);

//Завдання 3: Створити рядок із нулів відповідної довжини.
let num42 = 5;
let str42 = "0".repeat(num42);
console.log(str42);

//Завдання 4: Видалити кожне друге слово з рядка.
let str43 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
let arr43 = str43.split(" ");
arr43 = arr43.filter((elem, index) => (index + 1) % 2 !== 0);
str43 = arr43.join(" ");
console.log(str43);

//Завдання 5: Знайти суму всіх елементів вкладеного масиву.
let arr45 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sum = arr45.flat().reduce((acc, num) => acc + num, 0);
console.log(sum);

//Рівень 3.3 задачника JavaScript
//Завдання 1: Видалити з масиву слова, що містять більше трьох символів.
let arr51 = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];
arr51 = arr51.filter((elem) => elem.length <= 3);
console.log(arr51);

//Завдання 2: Перевірити, чи всі цифри у числі непарні.
let num52 = 1357;
let isOdd = num52
  .toString()
  .split("")
  .every((digit) => parseInt(digit) % 2 !== 0);
if (isOdd) {
  console.log("Всі цифри числа непарні");
} else {
  console.log("Не всі цифри числа непарні");
}

//Завдання 3: Перевірити, чи є слово паліндромом.
let str53 = "abcba";
let isPalindrome = str53 === str53.split("").reverse().join("");
if (isPalindrome) {
  console.log("Слово є паліндромом");
} else {
  console.log("Слово не є паліндромом");
}

/* ===================================== */
/* Рівень 3.3/3.4 задачника JavaScript   */
/* ===================================== */

/* Завдання 4: Обчислити суму всіх чисел у багаторівневому масиві */
let arr54 = [
[
    [11, 12, 13],
    [14, 15, 16],
    [17, 17, 19],
],
[
    [21, 22, 23],
    [24, 25, 26],
    [27, 27, 29],
],
[
    [31, 32, 33],
    [34, 35, 36],
    [37, 37, 39],
],
];
let sum54 = arr54.flat(2).reduce((acc, num) => acc + num, 0);
console.log(sum54); // Вивід суми всіх елементів

/* Рівень 3.4 задачника JavaScript */

/* Завдання 1: Вивести усі числа від 10 до 1000, у яких перша цифра парна */
for (let i = 10; i <= 1000; i++) {
let firstDigit = parseInt(i.toString()[0]);
if (firstDigit % 2 === 0) {
    console.log(i);
}
}

/* Завдання 2: Поміняти місцями сусідні елементи масиву */
let arr61 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr61.length - 1; i += 2) {
// Обмін значеннями двох послідовних елементів
[arr61[i], arr61[i + 1]] = [arr61[i + 1], arr61[i]];
}
console.log(arr61);

/* Завдання 3: Обчислити суму числових значень у вкладеному об'єкті */
let obj62 = {
1: {
    1: 11,
    2: 12,
    3: 13,
},
2: {
    1: 21,
    2: 22,
    3: 23,
},
3: {
    1: 24,
    2: 25,
    3: 26,
},
};
let sum62 = Object.values(obj62).reduce((total, subObj) => {
return total + Object.values(subObj).reduce((subTotal, num) => subTotal + num, 0);
}, 0);
console.log(sum62);

/* ===================================== */
/* Рівень 3.5 задачника JavaScript       */
/* ===================================== */

/* Завдання 1: Знайти усі слова, що починаються з літери 'a' у тексті */
let text71 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
let arr71 = text71.split(" ").filter((word) => word[0].toLowerCase() === "a");
console.log(arr71);

/* Завдання 2: Відфільтрувати числа, які діляться на 5 */
let arr72 = [1, 4, 5, 7, 10, 11, 15, 20, 25, 30];
arr72 = arr72.filter((num) => num % 5 === 0);
console.log(arr72);

/* Завдання 3: Відфільтрувати числа, які містять цифру 0 */
let arr73 = [1, 4, 5, 7, 10, 11, 15, 20, 25, 30];
arr73 = arr73.filter((num) => num.toString().includes("0"));
console.log(arr73);

/* Завдання 4: Перевірити, чи містить масив хоча б одне число з цифрою 3 */
let arr74 = [1, 4, 5, 7, 10, 11, 15, 20, 25, 30];
let hasThree = arr74.some((num) => num.toString().includes("3"));
if (hasThree) {
console.log("Масив містить число з цифрою 3");
} else {
console.log("Масив не містить число з цифрою 3");
}

/* Завдання 5: Відсортувати цифри числа за зростанням та сформувати нове число */
let num75 = 35142;
let sortedNum = parseInt(num75.toString().split("").sort().join(""));
console.log(sortedNum);

/* Завдання 6: Сформувати рядок у форматі '-1-2-3-4-5-' */
let str76 = Array.from({ length: 5 }, (_, i) => i + 1).join("-");
str76 = "-" + str76 + "-";
console.log(str76);

/* Завдання 7: Обчислити суму всіх значень у трирівневому вкладеному об'єкті */
let obj77 = {
1: {
    1: {
    1: 111,
    2: 112,
    3: 113,
    },
    2: {
    1: 121,
    2: 122,
    3: 123,
    },
},
2: {
    1: {
    1: 211,
    2: 212,
    3: 213,
    },
    2: {
    1: 221,
    2: 222,
    3: 223,
    },
},
3: {
    1: {
    1: 311,
    2: 312,
    3: 313,
    },
    2: {
    1: 321,
    2: 322,
    3: 323,
    },
},
};
let sum77 = Object.values(obj77).reduce((total, subObj) => {
return total + Object.values(subObj).reduce((subTotal, subSubObj) => {
    return subTotal + Object.values(subSubObj).reduce((subSubTotal, num) => subSubTotal + num, 0);
}, 0);
}, 0);
console.log(sum77);

/* ===================================== */
/* Рівень 3.6 задачника JavaScript       */
/* ===================================== */

/* Завдання 1: Видалити з масиву числа, які складаються більше ніж з трьох цифр */
let arr81 = [1, 12, 123, 1234, 12345, 123456];
arr81 = arr81.filter((num) => num.toString().length <= 3);
console.log(arr81);

/* Завдання 2: Перевірити, чи всі цифри числа більше нуля */
let num82 = 12345;
let isPositive = num82
.toString()
.split("")
.every((digit) => parseInt(digit) > 0);
if (isPositive) {
console.log("Всі цифри числа більше нуля");
} else {
console.log("Не всі цифри числа більше нуля");
}

/* Завдання 3: Розбити кожне число масиву на окремі цифри та об'єднати в один масив */
let arr83 = [123, 456, 789];
arr83 = arr83
.map((num) => num.toString().split(""))
.flat()
.map((num) => parseInt(num));
console.log(arr83);

/* Завдання 4: Обчислити суму всіх значень у масиві об'єктів */
let data84 = [
{
    1: 11,
    2: 12,
    3: 13,
},
{
    1: 21,
    2: 22,
    3: 23,
},
{
    1: 24,
    2: 25,
    3: 26,
},
];
let sum84 = data84.reduce((total, obj) => {
return total + Object.values(obj).reduce((subTotal, num) => subTotal + num, 0);
}, 0);
console.log(sum84);

/* ===================================== */
/* Рівень 3.7 задачника JavaScript       */
/* ===================================== */

/* Завдання 1: Відсортувати слова у рядку в алфавітному порядку */
let str91 = "lorem ipsum dolor sit amet consectetur adipisicing elit.";
let arr91 = str91.split(" ").sort();
str91 = arr91.join(" ");
console.log(str91);

/* Завдання 2: Отримати масив дільників заданого числа */
let num92 = 28;
let divisors = [];
for (let i = 1; i <= num92; i++) {
if (num92 % i === 0) {
    divisors.push(i);
}
}
console.log(divisors);

/* Завдання 3: Отримати масив спільних дільників двох чисел */
let num93_1 = 28;
let num93_2 = 35;
let cDiv = [];
for (let i = 1; i <= Math.min(num93_1, num93_2); i++) {
if (num93_1 % i === 0 && num93_2 % i === 0) {
    cDiv.push(i);
}
}
console.log(cDiv);

/* Завдання 4: Перевірити, чи є число простим (має лише два дільники) */
let num94 = 17;
let div94 = [];
for (let i = 1; i <= num94; i++) {
if (num94 % i === 0) {
    div94.push(i);
}
}
if (div94.length === 2) {
console.log("Число є простим");
} else {
console.log("Число не є простим");
}

/* Завдання 5: З рядка чисел, розділених комами, знайти максимальне число */
let str95 = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
let max95 = Math.max(...str95.split(", ").map((num) => parseInt(num)));
console.log(max95);

/* Завдання 6: Після кожного однозначного числа у масиві вставити ще одне таке саме число */
let arr96 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr96 = arr96.flatMap((num) => (num < 10 ? [num, num] : num));
console.log(arr96);

/* Завдання 7: Видалити з рядка всі голосні літери */
let str97 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
str97 = str97.replace(/[aeiouy]/gi, "");
console.log(str97);

/* Завдання 8: Зробити останню літеру кожного слова у рядку великою */
let str98 = "lorem ipsum dolor sit amet consectetur adipisicing elit.";
str98 = str98.replace(/\b\w+\b/g, (word) => {
return word.slice(0, -1) + word.slice(-1).toUpperCase();
});
console.log(str98);

/* Завдання 9: Обчислити суму всіх значень у вкладеній структурі, де кожен ключ містить масив чисел */
let data99 = [
{
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
},
{
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
},
{
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
},
];
let sum99 = data99.reduce((total, obj) => {
return total + Object.values(obj).reduce((subTotal, arr) => {
    return subTotal + arr.reduce((subSubTotal, num) => subSubTotal + num, 0);
}, 0);
}, 0);
console.log(sum99);

/* ===================================== */
/* Рівень 3.8 задачника JavaScript       */
/* ===================================== */

/* Завдання 1: Перевірити, чи всі числа в масиві містять цифру 3 */
let arr101 = [13, 23, 32, 43, 50, 63, 77, 83, 96];
let hasThree101 = arr101.every((num) => num.toString().includes("3"));
if (hasThree101) {
console.log("Всі числа містять цифру 3");
} else {
console.log("Не всі числа містять цифру 3");
}

/* Завдання 2: Перетворити рядок у форматі kebab-case у snake_case */
let str102 = "kebab-case";
str102 = str102.replace(/-/g, "_");
console.log(str102);

/* Завдання 3: Перетворити рядок у форматі snake_case у camelCase */
let str103 = "snake_case";
str103 = str103.replace(/_./g, (match) => match[1].toUpperCase());
console.log(str103);

/* Завдання 4: Перетворити рядок у форматі camelCase у snake_case */
let str104 = "camelCase";
str104 = str104.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
console.log(str104);

/* Завдання 5: Сформувати масив з 5 вкладених масивів, кожен з яких містить числа від 1 до 3 */
let arr105 = Array.from({ length: 5 }, () =>
Array.from({ length: 3 }, (_, i) => i + 1)
);
console.log(arr105);

/* ===================================== */
/* Рівень 3.9 задачника JavaScript       */
/* ===================================== */

/* Завдання 1: Перевірити, чи рядок складається виключно з цифр */
let str111 = "123a45";
let isDigits = /^\d+$/.test(str111);
if (isDigits) {
console.log("Рядок складається лише з цифр");
} else {
console.log("Рядок не складається лише з цифр");
}

/* Завдання 2: Перевірити, чи рядок складається виключно з парних цифр */
let str112 = "24680";
let isEvenDigits = /^[02468]+$/.test(str112);
if (isEvenDigits) {
console.log("Рядок складається лише з парних цифр");
} else {
console.log("Рядок не складається лише з парних цифр");
}

/* Завдання 3: Видалити з масиву числа, які містять два або більше нулів */
let arr113 = [100, 200, 300, 1, 2000, 30];
arr113 = arr113.filter((num) => num.toString().split("0").length - 1 < 2);
console.log(arr113);

/* Завдання 4: Знайти всі числа від 1 до 1000, сума цифр яких дорівнює 13 */
let nums114 = [];
for (let i = 1; i <= 1000; i++) {
let sum = i
    .toString()
    .split("")
    .reduce((acc, num) => acc + parseInt(num), 0);
if (sum === 13) {
    nums114.push(i);
}
}
console.log(nums114);

/* Завдання 5: Сформувати 3x3 масив з послідовних чисел від 1 до 9 */
let arr115 = Array.from({ length: 3 }, (_, i) =>
Array.from({ length: 3 }, (_, j) => i * 3 + j + 1)
);
console.log(arr115);

/* ===================================== */
/* Рівень 3.10 задачника JavaScript      */
/* ===================================== */

/* Завдання 1: Повторити кожен елемент масиву двічі */
let arr121 = [1, 2, 3, 4, 5];
arr121 = arr121.flatMap((num) => [num, num]);
console.log(arr121);

/* Завдання 2: Залишити в масиві лише числа, які є дільниками заданого числа */
let arr122 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num122 = 6;
arr122 = arr122.filter((elem) => num122 % elem === 0);
console.log(arr122);

/* Завдання 3: Отримати масив спільних цифр двох чисел (без повторень) */
let num123_1 = 6123458;
let num123_2 = 543219;
let digits1 = num123_1.toString().split("");
let digits2 = num123_2.toString().split("");
let commonDigits = digits1.filter((digit) => digits2.includes(digit));
console.log([...new Set(commonDigits)]);

/* Завдання 4: Отримати масив індексів усіх входжень цифри '3' у числі, за винятком першого та останнього символу */
let num124 = 12345367893;
let positions = num124
.toString()
.split("")
.map((digit, index, arr) =>
    digit === "3" && index !== 0 && index !== arr.length - 1 ? index : null
)
.filter((pos) => pos !== null);
console.log(positions);

/* Завдання 5: Відфільтрувати з масиву числа, які складаються лише з унікальних цифр */
let arr125 = [123, 456, 789, 111, 222, 333];
arr125 = arr125.filter(
(num) => new Set(num.toString()).size === num.toString().length
);
console.log(arr125);

/* Завдання 6: Об'єднати вкладені масиви в один плоский масив */
let arr126 = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
];
arr126 = arr126.flat();
console.log(arr126);
