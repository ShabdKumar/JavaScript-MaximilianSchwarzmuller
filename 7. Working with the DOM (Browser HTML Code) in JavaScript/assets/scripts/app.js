console.dir(window);
console.dir(document);
const h1 = document.querySelector("h1");
const header1 = document.getElementById("header1");
const header1ByClass = document.querySelector("#header1");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const liByClassName = document.getElementsByClassName("list-item");
const liByTagName = document.getElementsByTagName("li");

h1.style.color = "white";
header1.style.backgroundColor = "black";
header1ByClass.style.fontSize = "40px";

ul.style.color = "blue";
li[0].style.color = "white";

console.dir(ul);
console.dir(li);
console.dir(liByClassName);
console.dir(liByTagName);

console.log(ul.children);
console.log(ul.childNodes);

h1.classList.add("heading");
h1.classList.add("head123"); // will append to after first class name
h1.className = "heading";
h1.className = "head123"; // will replace the existing class

const input = document.getElementById("user-input");
input.value = "Default Choice";
console.log(input.value);

input.setAttribute("value", "Hello123");
console.log(input.value);
input.value = input.getAttribute("value");
console.log(input.value);
