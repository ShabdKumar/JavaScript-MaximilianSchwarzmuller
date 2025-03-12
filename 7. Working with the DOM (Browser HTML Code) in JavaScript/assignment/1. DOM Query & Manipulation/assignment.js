const list1 = document.getElementById("task-1");
const firstList = document.querySelector("li:first-of-type");

list1.style.backgroundColor = "black";
firstList.style.color = "white";

const title = document.querySelector("title");
const head = document.head;
const title1 = head.querySelector("title");
title.textContent = "Assignment - Solved!";
title1.innerText = "Assignment - SOLVED!";

const header = document.querySelector("h1");
header.textContent = "Assignment - Solved!";
