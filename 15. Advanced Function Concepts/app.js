/*     Pure Function      */

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 2)); // 3 //always 3
console.log(add(10, 12)); // 22 // always 22

/*      Impure Function        */

function addRandom(num) {
  return Math.random() + num;
}

console.log(addRandom(5)); // always different value
console.log(addRandom(12)); // always different value

/*      side effects      */

let previousResult = 0;

function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(previousResult); // 0
console.log(addTwoNumbers(5, 8)); // 13
console.log(previousResult); // 13 // function is changing the value of previousResult

let hobbies = ["Movies", "Cricket"];

function addHobbies(h) {
  h.push("Book");
  return h;
}

console.log(addHobbies(hobbies));

/*       Factory Function         */

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.18);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100)); // 18
console.log(calculateVatAmount(200)); // 36
console.log(calculateIncomeTaxAmount(100)); // 25
console.log(calculateIncomeTaxAmount(200)); // 50

/*        Closures        */

let name = "Arnav";

function greetUser() {
  console.log(`Hi ${name}`);
}

greetUser();
name = "Arnab";
greetUser();

let username = "Aman";
function greetUsername() {
  let username = "Shabd";
  console.log(`Hi ${username}`);
}

greetUsername();
username = "Akash";
greetUsername();

/*      Recursion      */

function powOf(num, power) {
  // let result = 1;
  // for (let i = 0; i < power; i++) {
  //   result *= num;
  // }
  // return result;

  // if (power === 1) {
  //   return num;
  // }
  // return num * powOf(num, power - 1);

  return power === 1 ? num : num * powOf(num, power - 1);
}

console.log(powOf(3, 3));

const myself = {
  name: "Shabd",
  friends: [
    {
      name: "Vikash",
      friends: [
        {
          name: "Sonu",
          friends: [{ name: "Sarvesh" }],
        },
        {
          name: "Rohit",
          friends: [
            {
              name: "Pawan",
              friends: [{ name: "Shiv Prasad" }],
            },
          ],
        },
      ],
    },
    {
      name: "Bhaskar",
      friends: [
        {
          name: "Anmol",
          friends: [{ name: "Suman" }],
        },
      ],
    },
    {
      name: "Nikhil",
    },
  ],
};

function getFriendsName(person) {
  if (!person.friends) {
    return [];
  }

  let friends = [];
  for (const friend of person.friends) {
    friends.push(friend.name);
    friends.push(...getFriendsName(friend));
  }
  return friends;
}

console.log(getFriendsName(myself));
