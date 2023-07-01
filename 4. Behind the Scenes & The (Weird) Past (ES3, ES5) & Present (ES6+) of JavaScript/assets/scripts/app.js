/* var, let, const keyword */

let name = "SHABD";
function greet() {
    console.log(`Hi ${name}`);
}
greet();        // Hi SHABD

var nameVar = "SHABD";
function greetVar() {
    console.log(`Hi ${nameVar}`);
}
greetVar();        // Hi SHABD

let name1 = "SHABD";
function greet1() {
    let name1 = "MAX";
    console.log(`Hi ${name1}`);
}
greet1();        // Hi MAX

var nameVar1 = "SHABD";
function greetVar1() {
    var nameVar1 = "MAX";
    console.log(`Hi ${nameVar1}`);
}
greetVar1();        // Hi MAX

let name2 = "SHABD";
function greet2() {
    let age = 30;
    console.log(`Hi ${name2}. Your age is ${age}.`);
}
greet2();        // Hi MAX
// console.log(`Hi ${name2}. Your age is ${age}.`);        // Error: age is not defined

var nameVar2 = "SHABD";
function greetVar2() {
    var ageVar = 30;
    console.log(`Hi ${nameVar2}. Your age is ${ageVar}.`);
}
greetVar2();        // Hi MAX
// console.log(`Hi ${nameVar2}. Your age is ${ageVar}.`);        // Error: age is not defined

let name3 = "Shabd";
if (name3 === "Shabd") {
    let hobbies = [ "Sports", "Walking" ];
    console.log(`Hi ${name3}. Your hobbies are ${hobbies}.`);       // Hi Shabd. Your hobbies are Sports,Walking.
}
// console.log(`Hi ${name3}. Your hobbies are ${hobbies}.`);       // Error: hobbies is not defined

var nameVar3 = "Shabd";
if (nameVar3 === "Shabd") {
    var hobbiesVar = [ "Sports", "Walking" ];
    console.log(`Hi ${nameVar3}. Your hobbies are ${hobbiesVar}.`);     // Hi Shabd. Your hobbies are Sports,Walking.
}
console.log(`Hi ${nameVar3}. Your hobbies are ${hobbiesVar}.`);     // Hi Shabd. Your hobbies are Sports,Walking.

let name4 = "Shabd";
{
    let hobbies1 = [ "Sports", "Walking" ];
    console.log(`Hi ${name4}. Your hobbies are ${hobbies1}.`);       // Hi Shabd. Your hobbies are Sports,Walking.
}
// console.log(`Hi ${name4}. Your hobbies are ${hobbies1}.`);       // Error: hobbies1 is not defined

var nameVar4 = "Shabd";
{
    var hobbiesVar1 = [ "Sports", "Walking" ];
    console.log(`Hi ${nameVar4}. Your hobbies are ${hobbiesVar1}.`);        // Hi Shabd. Your hobbies are Sports,Walking.
}
console.log(`Hi ${nameVar4}. Your hobbies are ${hobbiesVar1}.`);        // Hi Shabd. Your hobbies are Sports,Walking.


/* Hoisting */

// console.log(username);      // Error: username is not defined
console.log(typeof username);       // undefined

console.log(userName1);     // undefined
var userName1 = "Shabd";

// console.log(userName2);     // Error: Cannot access 'userName2' before initialization
let userName2 = "Shabd";

let userName3;
console.log(userName3);     // undefined


/* Strict Mode */

var num1 = 10;
var num1 = 20;
console.log(num1);      // 20

let num2 = 10;
// let num2 = 20;      // SyntaxError: Identifier 'num2' has already been declared
console.log(num2);      // 10

// let undefined = 5;      // Error: Identifier 'undefined' has already been declared
var undefined = 5;

'use strict';

var num1 = 10;
var num1 = 20;
console.log(num1);      // 20

// var undefined = 5;      // Error: Cannot assign to read only property 'undefined' of object '#<Window>'
// num3 = 30;      // Error: num3 is not defined


/* Primitive vs Reference Values */

// Primitive: String, Numbers, Boolean, null, undefined, Symbol
// Reference: All other objects (array is also a object)

let name = "Shabd";
let name1 = name;
console.log(name);      // Shabd
console.log(name1);     // Shabd
name = "Max";
console.log(name);      // Max
console.log(name1);     // Shabd

let hobbies = [ "Sports" ];
const newHobbies = hobbies;
console.log(hobbies);       // ['Sports']
console.log(newHobbies);        // ['Sports']
hobbies.push("Playing");
console.log(hobbies);       // ['Sports', 'Playing']
console.log(newHobbies);        // ['Sports', 'Playing']

let bikes = [ "BMW" ];
let moreBikes = [ ...bikes ];
console.log(bikes);     // ['BMW']
console.log(moreBikes);     // ['BMW']
bikes.push("Ducati");
console.log(bikes);     // ['BMW', 'Ducati']
console.log(moreBikes);     // ['BMW']

let person1 = { age: 30 };
let person2 = { age: 30 };
console.log(person1 === person2);       // false

const cars = [ "Porsche" ];
cars.push("Jaguar");
console.log(cars);      // ['Porsche', 'Jaguar']
// cars = [ "BMW" ];       // TypeError: Assignment to constant variable.

const person = { age: 30 };
person.age = 32;
console.log(person);        // {age: 32}
// person = { age: 32 };       // TypeError: Assignment to constant variable.