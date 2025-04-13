/////////////// Rest //////////////////////
console.log("=== Example of using Rest Operator ===");

function hello(firstWord, ...othersWords) {
  console.log(firstWord + othersWords.join("_"));
}
hello("", "Hello", "word", "!!!", "demo", "rest");

//////////////
const arrOfNumber = (...nums) => {
  console.log("Array of numbers:", nums);
};
arrOfNumber(9, 70, 53, 76);

////////////////
const auto = { model: "BMW", country: "DE", year: 2002 }; 
const { model, ...other } = auto;
console.log("Model:", model, "===", "Other properties:", other); 

///////////// Function to multiply all input numbers
function multiplyNums(...nums) {
  return nums.reduce((mult, num) => mult * num, 1);
}
let res = multiplyNums(8, 5, 6, 3);
console.log("Result of multiplication:", res);

////////////////
const [one, two, ...n] = [111, 222, 555, 777, 999, 888];
console.log("Remaining numbers:", n);
console.log("First two numbers:", one, two);

/////////////// Spread ////////////////

console.log("=== Example of using Spread Operator ===");

const ob1 = { f: 555, s: 777 };
const ob2 = { ...ob1 };
console.log("Copy of object ob1:", ob2);

////////////////
const ob11 = { model: "BMW" };
const ob22 = { year: 2002 };
const ob11AddedOb22 = { ...ob11, ...ob22 };
console.log("Merged object:", ob11AddedOb22);

////////////////
const arr1 = [7, 9, 8, 5, 6];
const copyOfArr1 = [...arr1];
console.log("Copy of array arr1:", copyOfArr1);

////////////////
const arr77 = ["A", "B", "C"];
const arr88 = [800, 700];
console.log("Merged array:", arr99);

//////////////////
const arrNums = [9, 5, 7, 3, 5];
const res5 = Math.min(...arrNums);
console.log("Minimum value:", res5);

///////////////// Copying Objects /////////////////
console.log("=== Copying Objects ===");

const obj9 = { first: { second: "AUDI" } };
const obj9Copy = { ...obj9 };
console.log("Copy of object obj9:", obj9Copy.first.second);

// Modifying the original object
obj9.first.second = "BMW"; 
console.log("Updated obj9:", obj9.first.second);
console.log("Copy of obj9 remains unchanged:", obj9Copy.first.second);

/////////////////////////////
const obj99 = { first: { second: "MERCEDES" } };
const obj99Copy = { ...obj99, first: { ...obj99.first } };
console.log("Copy of object obj99:", obj99Copy.first.second);

// Modifying the original object
obj99.first.second = "TOYOTA"; 
console.log("Updated obj99:", obj99.first.second);
console.log("Copy of obj99 remains unchanged:", obj99Copy.first.second);

///////////////////////////////////
const obj777 = { model: "Slavuta" };
const obj7788 = { ...obj777, color: "Green" }; 
console.log("Object with color:", obj7788);

////////////////////////
const obj77 = { model: "Tavria NOVA", color: "Red" };
const obj778 = { ...obj77 };
console.log("Copy of object obj77:", obj778);

////////////////////////////
const obj123 = { yyyyyy: 12345 };
const obj234 = { xxxxxx: 98765 };
const obj345 = { ...obj123, ...obj234 };
console.log("Merged object of obj123 and obj234:", obj345);

///////////////// Copying Arrays /////////////////
console.log("=== Copying Arrays ===");

const arr11 = [
  [777, 666],
  [555, 444],
];
const copyArr11 = [...arr11];
console.log("First element of copied array arr11:", copyArr11[0][0]);
// Modifying the copy
copyArr11[0][0] = "TEST"; 
console.log("Original array arr11 remains unchanged:", arr11[0][0]);
console.log("Copied array arr11:", copyArr11[0][0]);

////////////////////////
const arr22 = [
  [777, 666],
  [555, 444],
];
const copyArr22 = arr22.map((e) => [...e]);
console.log("First element of deep copied array arr22:", copyArr22[0][0]);
// Modifying the copy
copyArr22[0][0] = "TEST"; 
console.log("Original array arr22 remains unchanged:", arr22[0][0]);
console.log("Deep copied array arr22:", copyArr22[0][0]);

////////////////////////
const arr33 = [567, 456, 345];
const arr3344 = [...arr33, 234, 123];
console.log("New array arr3344:", arr3344);

/////////////////////////
const arr44 = [789, 678, 567, 345];
const copyArr44 = [...arr44];
console.log("Copy of array arr44:", copyArr44);

/////////////////////////
const arr444 = [5678, 4578, 3456, 9876];
const copyOfArr444 = [...arr444];
console.log("Copy of array arr444:", copyOfArr444);

/////////////////////////
const arr5555 = [678, 456];
const arr5577 = ["ert", "sdf"];
const arr5599 = [...arr5555, ...arr5577];
console.log("Merged array arr5599:", arr5599);

///////////////// De-structuring /////////////////
console.log("=== De-structuring Objects ===");

const moto = {
  model: "YAMAHA",
  year: 2018,
  country: "JAPAN",
};

const { model: modelMoto, year: yearMoto, country: cMoto } = moto;
console.log("Model:", modelMoto, "Year:", yearMoto, "Country:", cMoto);
