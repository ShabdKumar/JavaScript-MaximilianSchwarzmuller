let result = 0;
let logEntries = [];

function getInput() {
  return parseInt(userInput.value);
}

function writeOutput(prevResult, operator, currentInput, result) {
  let calDescription = `${prevResult} ${operator} ${currentInput}`;
  outputResult(result, calDescription);
}

function writeToLog(prevResult, operator, currentInput, result) {
  const entry = {
    firstOperand: prevResult,
    operation: operator,
    secondOperand: currentInput,
    result: result,
  };

  logEntries.push(entry);
  const cloneLogEntries = structuredClone(logEntries);
  console.log(cloneLogEntries);
}

// function calculate(mathOperationType) {
//   const currentInput = getInput();
//   const prevResult = result;
//   let operator;

//   if (
//     mathOperationType !== "ADD" &&
//     mathOperationType !== "SUBTRACT" &&
//     mathOperationType !== "MULTIPLY" &&
//     mathOperationType !== "DIVIDE" &&
//     enteredNumber
//   ) {
//     return;
//   }

//   if (mathOperationType === "ADD") {
//     result += currentInput;
//     operator = "+";
//   } else if (mathOperationType === "SUBTRACT") {
//     result -= currentInput;
//     operator = "-";
//   } else if (mathOperationType === "MULTIPLY") {
//     result *= currentInput;
//     operator = "*";
//   } else {
//     result /= currentInput;
//     operator = "/";
//   }

//   writeOutput(prevResult, operator, currentInput, result);
//   writeToLog(prevResult, operator, currentInput, result);
// }

// function add() {
//   calculate("ADD");
// }

// function subtract() {
//   calculate("SUBTRACT");
// }

// function multiply() {
//   calculate("MULTIPLY");
// }

// function divide() {
//   calculate("DIVIDE");
// }

function calculation(mathOperationType) {
  const currentInput = getInput();
  const prevResult = result;
  let operator;

  if (mathOperationType === "ADD") {
    result += currentInput;
    operator = "+";
  } else if (mathOperationType === "SUBTRACT") {
    result -= currentInput;
    operator = "-";
  } else if (mathOperationType === "MULTIPLY") {
    result *= currentInput;
    operator = "*";
  } else {
    result /= currentInput;
    operator = "/";
  }

  writeOutput(prevResult, operator, currentInput, result);
  writeToLog(prevResult, operator, currentInput, result);
}

// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);

addBtn.addEventListener("click", calculation.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculation.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculation.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculation.bind(this, "DIVIDE"));
