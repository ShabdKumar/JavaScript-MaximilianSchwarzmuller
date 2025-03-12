/* functions vs Methods */

const person = {
  name: "Shabd",
  greet: function greet() {
    // function assigned to object is Method.
    console.log("Hi there");
  },
};

person.greet(); // Hi there

/* Storing Function in Variables */

const start = function () {
  console.log("Hi There");
};

start(); // Hi There

const startGameBtn = document.getElementById("start-button-game");
function startGame() {
  console.log("Game is Starting");
}
startGameBtn.addEventListener("click", startGame);

begin(); // Staring
function begin() {
  console.log("Starting");
}
// letsRoll(); // Error: letsRoll is not defined
// lets(); // Error: lets is not a function
var lets = function letsRoll() {
  console.log("Roll");
};
lets(); // Roll
// letsRoll(); // Error: letsRoll is not defined

/* REST OPERATORs */

const sumUp = (a, b, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);
  let sum = a + b;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};
console.log(sumUp(1, 2, 3, 4, 5, 6));

const subtractDown = function () {
  let subtract = 100;
  for (const num of arguments) {
    subtract -= num;
  }
  return subtract;
};
console.log(subtractDown(20, 1, 2));

/* CALLBACK FUNCTIONS */

const validateNumber = (number, isDivideOrMultiply = false) => {
  if (isDivideOrMultiply) {
    return isNaN(number) ? 1 : number;
  }
  return isNaN(number) ? 0 : number;
};

const showResults = (result) => {
  console.log(result);
};

const sumUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};
sumUp(showResults, 1, 2, 3, 4, 5, 6);

const subtractDown = (resultHandler, ...numbers) => {
  let subtract = 100;
  for (const num of numbers) {
    subtract -= num;
  }
  resultHandler(subtract);
};

subtractDown(showResults, 20, 1, 2);

const add = (...numbers) => {
  let result = 0;
  for (const num of numbers) {
    result += validateNumber(num);
  }
  return result;
};

const subtract = (x, ...numbers) => {
  let result = x;
  for (const num of numbers) {
    result -= validateNumber(num);
  }
  return result;
};

const multiply = (...numbers) => {
  let result = 1;
  for (const num of numbers) {
    result *= validateNumber(num, true);
  }
  return result;
};

const divide = (x, ...numbers) => {
  let result = x;
  for (const num of numbers) {
    result /= validateNumber(num, true);
  }
  return result;
};

const calculation = (operation, ...numbers) => {
  showResults(operation(...numbers));
};

calculation(add, 1, 2, 3, 4, 5);
calculation(subtract, 10, 1, 2);
calculation(multiply, 1, 2, 3, 4);
calculation(divide, 12, 1, 2, 3);
