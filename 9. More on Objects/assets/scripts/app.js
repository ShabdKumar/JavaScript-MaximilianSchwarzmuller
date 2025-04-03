let person = {
  name: "Shabd",
  age: "32",
  hobbies: ["Watching Anime", "Playing Games"],
  greeting: () => {
    console.log("Hi Shabd");
  },
};

console.log(person);
person.place = "Jamshedpur";
console.log(person);
delete person.age;
console.log(person);
person.name = undefined;
console.log(person);
person.greeting(); // Hi Shabd

const userInput = "lastName";
let person2 = {
  "first-name": "Akash",
  1.6: "Hello",
  [userInput]: "Kumar",
};

console.log(person2);
console.log(person2["first-name"]); // Akash
console.log(person2[1.6]); // Hello
console.log(person2["1.6"]); // Hello
console.log(person2[userInput]); // Kumar
console.log(person2["lastName"]); // Kumar

person2["first-name"] = "Nikki";
console.log(person2);

person["name"] = "Aman";
person.age = 20;
console.log(person);
let person3 = { ...person }; // shallow copy
console.log(person3);
person3 = { ...person, age: 40 };
console.log(person3);
person3 = { ...person, age: 50, hobbies: [...person.hobbies] }; // example of deep copy
console.log(person3);

/*          Object.assign()              */

let person4 = { name: "Gandhi" };
let person5 = { age: 34 };
let person6 = Object.assign({}, person4);
console.log(person4);
console.log(person6);
person6 = Object.assign({}, person4, person5);
console.log(person4);
console.log(person5);
console.log(person6);
person6 = Object.assign(person4, person5); // person5 will be merged to person4 as well as person6
console.log(person4);
console.log(person5);
console.log(person6);

/*         Object Destructuring      */
let person7 = {
  name: "Kiran",
  place: "Rourkela",
  favourites: { food: "Chicken" },
};
let person8 = {
  name: "Garima",
  place: "Tatanagar",
  favourites: { food: "Biryani" },
};
let { name } = person7;
console.log(name);
let { favourites } = person7;
console.log(favourites);
let { name: firstName, favourites: interest } = person8;
console.log(firstName);
console.log(interest);
console.log(name);
console.log(favourites);
let { name: lastName, ...otherInfo } = person7;
console.log(lastName);
console.log(otherInfo);
