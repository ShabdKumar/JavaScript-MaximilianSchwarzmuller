/*         splice() Method              */

let numArray = [1, 2, 3, 4, 5];
let deletedData = numArray.splice(); // splice with no argument do nothing. returns the deleted items.
console.log(numArray); // [1, 2, 3, 4, 5]
console.log(deletedData); // []
deletedData = numArray.splice(0);
console.log(numArray); // []
console.log(deletedData); // [1, 2, 3, 4, 5]
numArray = [1, 2, 3, 4, 5];
deletedData = numArray.splice(2, 0);
console.log(numArray); // [1, 2, 3, 4, 5]
console.log(deletedData); // []
deletedData = numArray.splice(2, 0, "a");
console.log(numArray); // [1, 2, 'a', 3, 4, 5]
console.log(deletedData); // []
deletedData = numArray.splice(2, 1, "b");
console.log(numArray); // [1, 2, 'b', 3, 4, 5]
console.log(deletedData); // ['a']
deletedData = numArray.splice(2, 2);
console.log(numArray); // [1, 2, 4, 5]
console.log(deletedData); // ['b', 3]

/*             slice() Method              */

let charArray = ["a", "b", ["c", "d"]];
let newArray = charArray.slice(); // returns a shallow copy
charArray.push("e", "f");
console.log(charArray); // ['a', 'b', ['c', 'd'], 'e', 'f']
console.log(newArray); // ['a', 'b', ['c', 'd']]
charArray[2].push("x");
console.log(charArray); // ['a', 'b', ['c', 'd', 'x'], 'e', 'f']
console.log(newArray); // ['a', 'b', ['c', 'd', 'x']]
newArray = charArray.slice(2);
console.log(charArray); // ["a", "b", ["c", "d", "x"], "e", "f"];
console.log(newArray); // ['c', 'd', 'x'], 'e', 'f']
newArray = charArray.slice(2, 1);
console.log(charArray); // ['a', 'b', ['c', 'd', 'x'], 'e', 'f']
console.log(newArray); // []
newArray = charArray.slice(2, 4);
console.log(charArray); // ['a', 'b', ['c', 'd', 'x'], 'e', 'f']
console.log(newArray); // [['c', 'd', 'x'], 'e']
newArray = charArray.slice(-3, 4);
console.log(charArray); // ['a', 'b', ['c', 'd', 'x'], 'e', 'f']
console.log(newArray); // [['c', 'd', 'x'], 'e']

/*           concat() Method             */

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
const resultArray = firstArray.concat(secondArray); // merging content of two arrays and returning single array
console.log(resultArray); // [1, 2, 3, 4, 5, 6]

/*        another important methods        */
let arrayOfPrimitiveType = [1, 2, 3, 4, 2, 3, 1];
let index = arrayOfPrimitiveType.indexOf(2);
console.log(index); // 1
index = arrayOfPrimitiveType.lastIndexOf(2);
console.log(index); // 4
index = arrayOfPrimitiveType.indexOf(5);
console.log(index); // -1
console.log(arrayOfPrimitiveType.includes(4)); // true // returns boolean if element is present in array or not

let arrayOfReferenceType = [{ name: "Max" }, { name: "Manuel" }];
let result = arrayOfReferenceType.find((person, index, persons) => {
  // return the first matching value from Array
  return person.name === "Manuel";
});
console.log(result); // { name: "Max" }
result = arrayOfReferenceType.findIndex(
  // return the index of first matching value
  (person, index, persons) => person.name === "Manuel"
);
console.log(result); // 1
result = arrayOfReferenceType.findIndex(
  (person, index, persons) => person.name === "manuel"
);
console.log(result); // -1

/*          forEach()            */

let incomes = [1000, 800, 900, 600];
let taxDeductionRate = 18;
let newSalaries = [];
incomes.forEach((income, index, incomes) => {
  // works as for-of loop but with index value
  const salary = {
    index: index,
    newIncome: income * ((100 - taxDeductionRate) / 100),
  };
  newSalaries.push(salary);
});
console.log(newSalaries);

/*            map()           */

taxDeductionRate = 15;
newSalaries = incomes.map((income, index, incomes) => {
  const salary = {
    index: index,
    newIncome: income * ((100 - taxDeductionRate) / 100),
  };
  return salary;
});
console.log(newSalaries);

/*           sort() , reverse(), filter(), reduce()                */

let floatArray = [4.5, 10.9, 2.3, 8.7];
let sortedArray = floatArray.sort();
console.log(sortedArray); // [10.9, 2.3, 4.5, 8.7]
console.log(floatArray); // [10.9, 2.3, 4.5, 8.7]

sortedArray = floatArray.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else return 0;
});
console.log(sortedArray); // [2.3, 4.5, 8.7, 10.9]

let reversedArray = sortedArray.reverse();
console.log(reversedArray); // [10.9, 8.7, 4.5, 2.3]

let filteredArray = floatArray.filter((num, index, nums) => {
  return num > 6;
});
console.log(filteredArray); // [10.9, 8.7]

let sumArray = floatArray.reduce((a, b) => {
  return a + b;
}, 0);
console.log(sumArray); // 26.400000000000002

let max = [10, 4, 9, 11, 6].reduce((a, b) => {
  if (a > b) {
    return a;
  } else return b;
}, 0);
console.log(max);

/*        join(), split()              */

let name = "Shabd.Kumar";
let newName = name.split("."); // splitting string and return as array
console.log(name); // Shabd.Kumar
console.log(newName); // ['Shabd', 'Kumar']
let nameUpdated = newName.join("?"); // return string from array by joining elements
console.log(newName); // ['Shabd', 'Kumar']
console.log(nameUpdated); // Shabd?Kumar
nameUpdated = newName.join();
console.log(nameUpdated); // Shabd,Kumar
