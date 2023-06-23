/* Introducing "if" Statements & Boolean (Comparison) Operators */

console.log(2 == 2);        // true
console.log(2 == '2');      // true
console.log(2 === 2);       // true
console.log(2 === '2');     // false


/* Working with "if", "else" and "else-if" */

function calculate(num1, num2, mathOperationType) {
    if (mathOperationType === 'ADD') {
        return num1 + num2;
    } else if (mathOperationType === 'SUBTRACT') {
        return num1 - num2;
    } else if (mathOperationType === 'MULTIPLY') {
        return num1 * num2;
    } else if (mathOperationType === 'DIVIDE') {
        return num1 / num2;
    } else {
        return 'Please enter proper math operation: ADD, SUBTRACT, MULTIPLY, DIVIDE';
    }
}

console.log(calculate(20, 10, 'ADD'));      // 30
console.log(calculate(20, 10, 'SUBTRACT'));     // 10
console.log(calculate(20, 10, 'MULTIPLY'));     // 200
console.log(calculate(20, 10, 'DIVIDE'));       // 2
console.log(calculate(20, 10, 'PLUS'));     // Please enter proper math operation: ADD, SUBTRACT, MULTIPLY, DIVIDE


/* Comparing Objects & Arrays for Equality! */

const person1 = {name: 'SHABD'};
const person2 = {name: 'SHABD'};
console.log(person1 == person2);        // false
console.log(person1 === person2);       // false
const person3 = person1;
console.log(person1 === person3);       // true
console.log(person1 == person3);        // true
console.log(person1.name == person2.name);      //true

const hobbies = ['Playing', 'Walking'];
const moreHobbies = ['Playing', 'Walking'];
console.log(hobbies == moreHobbies);        // false
console.log(hobbies === moreHobbies);       // false
const betterHobbies = hobbies;
console.log(hobbies == betterHobbies);      // true
console.log(hobbies === betterHobbies);     // true
console.log(hobbies[1] === moreHobbies[1]);     //true


/* The Logical AND and OR Operators */

function isLeapYear(year) {
    return ((year % 400 === 0) || ((year % 100 != 0) && (year % 4 == 0)));
}

console.log(isLeapYear(2100));      // false
console.log(isLeapYear(1600));      // true
console.log(isLeapYear(1004));      // true


/* Operator Precedence */

console.log(3 + 2 < 9 - 2);     // true     /* 5 < 7 */
console.log(5 == 5 && 3 > 6 || 10 > 5);     // true     /* true && flase || true */     /* false || true */


/* "Truthy" and "Falsy" Values */

console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(-2));       // true
console.log(Boolean(''));       // false
console.log(Boolean('SHABD'));      // true
console.log(Boolean({}));       //true
console.log(Boolean({name: 'SHABD'}));      //true
console.log(Boolean([]));       // true
console.log(Boolean([1, 2]));       // true
console.log(Boolean(null));     // fasle
console.log(Boolean(undefined));        // false
console.log(Boolean(NaN));      // false
