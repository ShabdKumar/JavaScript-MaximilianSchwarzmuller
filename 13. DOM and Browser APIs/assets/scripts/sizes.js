const mainBox = document.getElementById("main-box");
console.log(mainBox);

const dimensionsBox = mainBox.getBoundingClientRect();
console.log(dimensionsBox);
console.log(dimensionsBox.bottom);

console.log(mainBox.scrollHeight);
console.log("offsetTop:" + mainBox.offsetTop);
console.log("offsetLeft:" + mainBox.offsetLeft);
console.log("offsetHeight:" + mainBox.offsetHeight);
console.log("offsetwidth:" + mainBox.offsetWidth);
console.log("clientTop:" + mainBox.clientTop);
console.log("clientLeft:" + mainBox.clientLeft);
console.log("clientHeight:" + mainBox.clientHeight);
console.log("clientWidth:" + mainBox.clientWidth);
console.log("scrollTop:" + mainBox.scrollTop);
console.log("innerwidth - window:" + window.innerWidth);
console.log("innerHeight - window:" + window.innerHeight);
