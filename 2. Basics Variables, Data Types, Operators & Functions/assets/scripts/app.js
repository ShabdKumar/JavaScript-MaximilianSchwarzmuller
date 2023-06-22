/* Variables and Constant */
/* Basic Operators */

let currentResult = 0;

currentResult = currentResult + 10;
console.log(currentResult);     // 10
currentResult = 0;
currentResult = currentResult + 10 * 3;
console.log(currentResult);     // 30
currentResult = 0;
currentResult = (currentResult + 10) * 3;
console.log(currentResult);     // 30
currentResult = 0;
currentResult = (currentResult + 10) * 3 / 2;
console.log(currentResult);     // 15
currentResult = 0;
currentResult = (currentResult + 10) * 3 / 2 - 1;
console.log(currentResult);     // 14


/* Data Types: Numbers & Strings (Text) */

let currentResultDescription = '(0 + 10) * 3 / 2 - 1';
console.log(currentResultDescription);      // (0 + 10) * 3 / 2 - 1
currentResultDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';
console.log(currentResultDescription);      // (14 + 10) * 3 / 2 - 1
currentResult = 0;
currentResultDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';
console.log(currentResultDescription);      // (0 + 10) * 3 / 2 - 1


/* Using Constant */

const defaultResult = 0;
currentResult = defaultResult;
// defaultResult = (currentResult + 10) * 3 / 2 - 1;       // TypeError: Assignment to constant variable.
currentResult = (currentResult + 10) * 3 / 2 - 1;
currentResultDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
console.log(currentResult);     // 14
console.log(currentResultDescription);      // (0 + 10) * 3 / 2 - 1


/* Escape Seqence */
// String Escape Sequences => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation
/* Template Literal */

currentResultDescription = "'(' + defaultResult + ' + 10) * 3 / 2 - 1'";
console.log(currentResultDescription);      // '(' + defaultResult + ' + 10) * 3 / 2 - 1'
currentResultDescription = "'('" + defaultResult + ' + 10) * 3 / 2 - 1';
console.log(currentResultDescription);      // '('0 + 10) * 3 / 2 - 1

currentResultDescription = `'(' + defaultResult + ' + 10) * 3 / 2 - 1`;
console.log(currentResultDescription);      // '(' + defaultResult + ' + 10) * 3 / 2 - 1
currentResultDescription = `(defaultResult + 10) * 3 / 2 - 1`;
console.log(currentResultDescription);      // (defaultResult + 10) * 3 / 2 - 1
currentResultDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
console.log(currentResultDescription);      // (0 + 10) * 3 / 2 - 1
currentResultDescription = `(${defaultResult} + 10) 
* 3 / 2 - 1`;
console.log(currentResultDescription);      /* (0 + 10) 
                                               * 3 / 2 - 1 */
let errorMessage = 'An error ' + 
                   'ocurred!';
console.log(errorMessage);      // An error ocurred!
errorMessage = 'An error \n' + 
               'ocurred!';
console.log(errorMessage);      /* An error 
                                   ocurred! */
errorMessage = 'An \'error\' ' + 
               'ocurred!';
console.log(errorMessage);      // An 'error' ocurred!
errorMessage = 'An error \\ ' + 
               'ocurred!';
console.log(errorMessage);      // An error \ ocurred!


/* Functions */

function add(num1, num2) {
    const result = num1 + num2;
    // alert('The result is ' + result);
    return result;
}

console.log(add(10, 5));    // 15
console.log(add(5, 5));     // 10


/* Local and Global Scope */

let result;     /* Global Variable */

function add(num1, num2) {
    result = num1 + num2;
    return result;
}

add(1, 2);
console.log(result);        // 3


/* Shadowed Variable */

let userName = 'Max';
function greetUser(name) {
  let userName = name;
  console.log(userName);
}
userName = 'Manu';
greetUser('Max');       // Max


/* Data Type Conversion */

let currentResult = 10 + '20';
console.log(currentResult);     // 1020
currentResult = 10 + parseInt('20');
console.log(currentResult);     // 30
currentResult = 10 + parseFloat('20');
console.log(currentResult);     // 30
currentResult = 10 + +'20';
console.log(currentResult);     // 30
currentResult = 20 - '10';
console.log(currentResult);     // 10
console.log(2 + 3 + 4 + "5");   // 95
console.log("10" - "4" - "3" - 2 + "5");    // 15


/* Increment / Decrement Operators */

let currentResult = 10;
console.log(currentResult++);       // 10
currentResult = 10;
console.log(currentResult--);       // 10
currentResult = 10;
console.log(++currentResult);       // 11
currentResult = 10;
console.log(--currentResult);       // 9

/* More on Data Types */
/* Arrays */

let entries = [];
console.log(entries);       // []
entries.push(1);
console.log(entries);       // [1]
entries.push(2);
console.log(entries);       // (2) [1, 2]
entries.push(3);
console.log(entries);       // (3) [1, 2, 3]
console.log(entries[0]);        // 1
console.log(entries[1]);        // 2
console.log(entries[2]);        // 3
console.log(entries[3]);        // undefined
console.log(typeof(entries));       // object


/* Objects */

let entries = [];
let logEntries = {
    operation: 'Add',
    prevNumber: 10,
    currentNumber: 20,
    result: 30
};
console.log(entries);       // []
entries.push(logEntries);
console.log(logEntries);        // {operation: 'Add', prevNumber: 10, currentNumber: 20, result: 30}
console.log(logEntries.result);     // 30
console.log(entries);       /* [{…}]
                                0: {operation: 'Add', prevNumber: 10, currentNumber: 20, result: 30} */

logEntries = {
    operation: 'Sub',
    prevNumber: 20,
    currentNumber: 10,
    result: 10
};
entries.push(logEntries);
console.log(logEntries);        // {operation: 'Sub', prevNumber: 20, currentNumber: 10, result: 10}
console.log(logEntries.operation);     // Sub
console.log(entries);       /* (2) [{…}, {…}]
                                0: {operation: 'Add', prevNumber: 10, currentNumber: 20, result: 30}
                                1: {operation: 'Sub', prevNumber: 20, currentNumber: 10, result: 10} */

console.log(entries[0]);        // {operation: 'Add', prevNumber: 10, currentNumber: 20, result: 30}


/* undefined, null & NaN */
/* typeof keyword */

let userName;
console.log(userName);      // undefined
console.log(typeof undefined);      // undefined
console.log(typeof userName);       // undefined

userName = 'Shabd';
console.log(userName);      // Shabd
console.log(typeof userName);       // string

console.log(typeof null);       // object
userName = null;
console.log(userName);      // null
console.log(typeof userName);   // object

console.log(3 * 'hi');      // NaN
console.log(typeof (3 * 'hi'));     // number
console.log(typeof NaN);        // number
console.log(3 * NaN);       // NaN
console.log(typeof (3 * NaN));      // number

console.log(typeof 10);     // number
console.log(typeof 1.1);        // number
console.log(typeof true);       // boolean
console.log(typeof [1, 2, 3]);      // object
console.log(typeof {name: 'Shabd', age: 28});       // object
