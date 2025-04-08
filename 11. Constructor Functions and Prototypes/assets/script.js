class Person {
  name = "Shabd";
  age = 32;
  greet() {
    console.log("hi");
  }
}

/*     Constructor function       */

function Person() {
  this.name = "Shabd";
  this.age = 32;
  this.greet = function () {
    console.log("hi");
  };
}

const p = new Person();
console.log(p);

Array.prototype.max = function () {
  max = this[0];
  this.forEach((a) => {
    if (max > a) {
      return;
    } else {
      max = a;
    }
  });
  return max;
};
console.log([10, 8, 12, 5].max());

Array.prototype.sorting = function () {
  return this.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });
};

console.log([10, 8, 12, 5].sorting());

/*         Object.defineProperty()       */

let person = {
  name: "Shabd",
  age: 32,
};
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptors(person));

class Person {
  name = "Shabd";
  age = 32;
}
let person1 = new Person();
console.log(Object.getOwnPropertyDescriptor(person1, "age"));
console.log(Object.getOwnPropertyDescriptors(person1));

console.log(person);
person.name = "Aman";
console.log(person);
Object.defineProperty(person, "name", { writable: false });
person.name = "Max";
console.log(person);

/*         setPrototypeOf()        */

const a = {};
const b = {
  greet: function () {
    console.log("Hi");
  },
};

console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(b));
b.greet(); // Hi
// a.greet(); // a.greet not a function
console.log(Object.getPrototypeOf(a));
Object.setPrototypeOf(a, b);
console.log(Object.getPrototypeOf(a));
a.greet(); // Hi
