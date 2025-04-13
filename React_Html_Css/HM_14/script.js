//Recursion

const arr = [11, null, true, 7, 8];

for (let a = 0; a <= arr.length - 1; a++) {
  console.log(`Array element at index ${a}: ${arr[a]}`);
}

function recersionArray(a) {
  let temp = Math.round(Math.random() * 10);
  temp % 2 === 0 ? (a += temp) : (a -= temp);
  console.log(`Current value after modification: ${a}`);
  // recersionArray(a);
  if (a > 3) {
    recersionArray(a);
  }
}
recersionArray(0);
console.log(`Final array: ${arr}`);

function recursionArray2(arr, i = 0) {
  if (arr.length > i) {
    console.log(`Recursive call at index ${i}: ${arr[i]}`);
    recursionArray2(arr, ++i);
  }
}
console.log("===========");
recursionArray2(arr);
console.log("===========");
recursionArray2([1, 2, 3, 4, 5, 6]);
console.log("===========");

function recursionArray3(arr, i = 0) {
  if (arr.length <= i) return;

  console.log(`Element ${i + 1}: ${arr[i]}`);
  recursionArray3(arr, ++i);
}
recursionArray3(arr);

//Closes
console.log("===//Closes========");

function stepper() {
  let numb = 0;

  function dec() {
    numb++;
  }
  function inc() {
    numb--;
  }
  return {
    dec: dec,
    inc: inc,
    numb: numb,
  };
}
console.log("Stepper object initialized:", stepper());
console.log("Initial number in stepper:", stepper().numb);
stepper().dec();
console.log("Number after decrement:", stepper().numb);

const st = stepper();
console.log("Stepper instance:", st);
st.dec();
console.log("Number after decrement in instance:", st);

//колбек функція
console.log("// Callback function");

function clearHouse(isClean, cb) {
  if (isClean) {
    cb(500);
  } else {
    cb("You must clean before receiving money!");
  }
}

function shop(money, cb) {
  const priceOfJeans = 50;

  if (money >= priceOfJeans) {
    const rest = money - priceOfJeans;
    cb(rest);
  } else {
    cb("Not enough money!");
  }
}

function mac(money, cb) {
  const priceOfBurger = 100;

  if (money >= priceOfBurger) {
    const rest = money - priceOfBurger;
    cb(rest);
  } else {
    console.log("Need more money for burgers");
  }
}
clearHouse(true, (response) => {
  if (typeof response === "number") {
    console.log("Success! I received my money!");

    shop(response, (restJeans) => {
      if (typeof restJeans === "number") {
        console.log("Great! I bought jeans, remaining money: ", restJeans);

        mac(restJeans, (restBurger) => {
          if (typeof restBurger === "number") {
            console.log("Delicious! Remaining money for burgers: ", restBurger);
          } else {
            console.log("I will be hungry all day");
          }
        });
      } else {
        console.log("Insufficient salary");
      }
    });
  } else {
    console.log("Not lucky this time :(");
  }
});

console.log("=====================");
