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
