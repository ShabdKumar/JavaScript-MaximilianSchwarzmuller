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


/* Ternary Operator */

const damage = '5' === 5 ? "TRUE" : "FALSE";
console.log(damage);        // FALSE
const maxDamage = '5' == 5 ? "TRUE" : "FALSE";
console.log(maxDamage);     // TRUE


/* Logical Operator "Tricks" & Shorthands */

let userInput = '';
const isValidInput = !!userInput;
console.log(isValidInput);      // false
let userName = userInput || 'Shabd';
console.log(userName);      // Shabd
userInput = 'Max';
userName = userInput || 'Shabd';
console.log(userName);      // Max
let isLoggedIn = true;
let shoppingCart = isLoggedIn && [ 'Books' ];
console.log(shoppingCart);      // [ 'Books' ]
isLoggedIn = false;
shoppingCart = isLoggedIn && [ 'Books' ];
console.log(shoppingCart);      // false
shoppingCart = null && [ 'Books' ];
console.log(shoppingCart);      // null
console.log('Max' && NaN);     // NaN


/* switch-case */

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
    }
    return result;
}

console.log(calculate(20, 10, '+'));        // 30
console.log(calculate(20, 10, '-'));        // 10
console.log(calculate(20, 10, '*'));        // 200
console.log(calculate(20, 10, '/'));        // 2


/* Loops */
/* 'for' loop */

for (let i = 0; i < 3; i++) {
    console.log(i);
}
// 0
// 1
// 2

for (let i = 0; i < 5; ) {
    console.log(i);
    i++;
}
// 0
// 1
// 2

for (let i = 0; i < 5;) {
    i++;
    console.log(i);
}
// 1
// 2
// 3


/*  'for-of' loop */

const numArray = [ 'a', 'b', 'c'];
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}
// a
// b
// c

for (const element of numArray) {
    console.log(element);
}
// a
// b
// c


/* 'for-in' loop */

const countryCapital = {
    'India': 'New Delhi',
    'U.S.A': 'Washington DC'
};

for (const key in countryCapital) {
    console.log(`${key} = ${countryCapital[ key ]}`);
}
// India = New Delhi
// U.S.A = Washington DC


/* 'while' and 'do-while' loop */

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
// 0
// 1
// 2

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3);
// 0
// 1
// 2

j = 3;
do {
    console.log(j);
    j++;
} while (j < 3);
// 3


/* 'break' and "continue" keyword */

for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        break;
    }
    console.log(i);
}
// 1

for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
// 1
// 3
// 5


/* Control with Labeled Statements */

for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 3; j++) {
        if (j >= 2) {
            break;
        }
        console.log(j);
    }
}
// 1
// 1
// 1

outerFor: for (let i = 1; i < 4; i++) {
    innerFor: for (let j = 1; j < 3; j++) {
        if (j >= 2) {
            break outerFor;
        }
        console.log(j);
    }
}
// 1