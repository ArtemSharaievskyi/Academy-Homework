console.log("//15 \nwriteProgram => buyKeyboard => visitCinema => flight");

// Backend
function writeProgram(isWrite, cb) {
  console.log("Starting program... Cost: $1000");

  setTimeout(() => {
    if (isWrite) {
      const salary = 1000;
      cb(null, salary);
    } else {
      cb("Error: Program was not written", 0);
    }
  }, 2200);
}

function buyKeyboard(money, cb) {
  console.log("Initiating keyboard purchase... Cost: $250");
  setTimeout(() => {
    const costOfKeyboard = 250;

    if (costOfKeyboard <= money) {
      const rest = money - costOfKeyboard;
      cb(null, rest);
    } else {
      cb("Error: Insufficient funds for keyboard", money);
    }
  }, 2000);
}

function visitCinema(money, cb) {
  console.log("Preparing for cinema visit... Cost: $200");
  setTimeout(() => {
    const costOfCinema = 200;

    if (money >= costOfCinema) {
      const rest = money - costOfCinema;
      cb(null, rest);
    } else {
      cb("Error: Not enough money to watch the movie", money);
    }
  }, 1000);
}

// Adding flight option
function flight(money, cb) {
  console.log("Booking flight... Cost: $230");
  setTimeout(() => {
    const costOfFlight = 230;

    if (money >= costOfFlight) {
      const rest = money - costOfFlight;
      cb(null, rest);
    } else {
      console.log("Error: Insufficient funds to fly", money);
    }
  }, 1000);
}

// (e - f, d - l)(error, payload)

// Frontend
writeProgram(true, (error, salary) => {
  if (!error) {
    console.log("Success! Program has been written!", salary);

    buyKeyboard(salary, (errorKeyboard, restOfKeyboard) => {
      if (!errorKeyboard) {
        console.log("Successfully purchased keyboard! Remaining funds:", restOfKeyboard);

        visitCinema(restOfKeyboard, (errorCinema, restOfCinema) => {
          if (!errorCinema) {
            console.log("Enjoyed the movie! Remaining funds:", restOfCinema);

            flight(restOfCinema, (errorFlight, restOfFlight) => {
              if (!errorFlight) {
                console.log("Enjoying the flight! Remaining funds:", restOfFlight);
              } else {
                console.log("Error during flight booking:", errorFlight, restOfFlight);
              }
            });
          } else {
            console.log("Error during cinema visit:", errorCinema, restOfCinema);
          }
        });
      } else {
        console.log("Error during keyboard purchase:", errorKeyboard, restOfKeyboard);
      }
    });
  } else {
    console.log("Error while writing the program:", error, salary);
  }
});
