/* --------------------Numbers-------------------- */

console.log(0.2 + 0.4); // 0.6000000000000001

console.log((0.2).toString(2)); // 0.001100110011001100110011001100110011001100110011001101

console.log((0.2).toString(10)); // 0.2

console.log((0.2 + 0.4).toFixed(2)); // 0.60

console.log(Number.isFinite(10)); // true

console.log(Number.isFinite(1 / 0)); // false

console.log(1 / 0); // Infinity

console.log(Number.parseInt(10.1)); // 10

// console.log(10n + 2); // TypeError: Cannot mix BigInt and other types

console.log(10n + BigInt(2)); // 12n

console.log(10n + 2n); // 12n

console.log(typeof 10n); // bigint

/*      Randon number between a and b      */

function randomNumberBetween(lower, upper) {
  return Math.random() * (upper - lower) + lower; // not including boundary
}

console.log(randomNumberBetween(10, 15));

function randomIntegerBetween(lower, upper) {
  let randomNumber = randomNumberBetween(lower, upper);
  const lowerInteger = Math.floor(randomNumber);
  return randomNumber >= lowerInteger + 0.5 ? lowerInteger + 1 : lowerInteger;
}

console.log(randomIntegerBetween(10, 15));

/* --------------------Strings-------------------- */

function productDescription(strings, name, price) {
  console.log(strings);
  console.log(name);
  console.log(price);
  return `${strings[0]}${name}${strings[1]}${price}${strings[2]}`;
}

const productName = "JavaScript Course";
const productPrice = 499.0;

const result = productDescription`This product (${productName}) is ${productPrice}.`;
console.log(result); // This product (JavaScript Course) is 499.

const result1 = productDescription`This product (${productName}) is 30.`;
console.log(result1); // This product (JavaScript Course) is 30.undefinedundefined

const emailRegex = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/;
console.log(emailRegex.test("arnavgandhi@gmail.com")); // true
console.log(emailRegex.test("somya@gandhi@gmail.com")); // false

const regex = /hello/;
console.log(regex.test("Hi hello")); // true
console.log(regex.test("jhello")); // true
console.log(regex.test("hello")); // true
console.log(regex.test("h ello")); // false
console.log(regex.test("Hello")); // false

const regex1 = /(h|H)ello/;
console.log(regex1.test("hello")); // true
console.log(regex1.test("Hello")); // true
console.log(regex1.test("H ello")); // false
