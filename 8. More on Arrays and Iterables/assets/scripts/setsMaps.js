let numSet = new Set([1, 2, 3, 4]);
console.log(numSet); // {1, 2, 3, 4}
numSet.add(-1);
console.log(numSet); // {1, 2, 3, 4, -1}
console.log(numSet.has(4));
numSet.delete(1);
console.log(numSet); // {2, 3, 4, -1}
numSet.add(3); // duplicate value will be removed
console.log(numSet); // {2, 3, 4, -1}

numSet.forEach((num, index, nums) => {
  console.log(num);
});
/* 2
3
4
-1 */

for (const num of numSet) {
  console.log(num);
}
/* 2
3
4
-1 */

for (const num of numSet.entries()) {
  console.log(num[0]);
}
/* 2
3
4
-1 */

/*             Maps               */

let person1 = { name: "Shabd", age: 30 };
let person2 = { name: "Akash", age: 28 };

let personMap = new Map([
  [person1, { DOB: "24/06/1999", place: "Jamshedpur" }],
]);
console.log(personMap);

personMap.set(person2, { DOB: "18/04/1999", place: "Jamshedpur" });
console.log(personMap);

for (let maps of personMap.entries()) {
  console.log(maps);
}

for (let maps of personMap) {
  console.log(maps);
}

for (let maps of personMap.keys()) {
  console.log(maps);
}

for (let maps of personMap.values()) {
  console.log(maps);
}

for (let [key, value] of personMap) {
  console.log(key.name);
  console.log(value.place);
}
