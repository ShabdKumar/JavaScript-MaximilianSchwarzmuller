// 1.
let numArray = [2, 87, 45, 1, 67, 90, 3, 56, 4, 11];
let result = numArray
  .filter((num) => num > 5)
  .map((num) => {
    return { num: num };
  })
  .reduce((a, b) => a * b.num, 1);
console.log(result);

// 2.
const findMax = (arrays) =>
  arrays.reduce((a, b) => {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  });

console.log(findMax(numArray));

// 3.
const findMaxMin = (arrays) => [
  arrays.reduce((a, b) => {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }),
  arrays.reduce((a, b) => {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  }),
];

let [max, min] = findMaxMin(numArray.filter((num) => num > 5));
console.log(max);
console.log(min);

// 4.

let userIds = new Set();
userIds.add(4);
userIds.add(8);
userIds.add(4);
console.log(userIds);
