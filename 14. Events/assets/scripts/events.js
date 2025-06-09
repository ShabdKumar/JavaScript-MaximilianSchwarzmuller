const buttonOnClick = document.querySelector(".onClick");
buttonOnClick.onclick = function () {
  alert("On Click");
};

function buttonClickhandler(event) {
  console.log(event);
}

const buttonEventListener = document.querySelector(".eventListener");
buttonEventListener.addEventListener("mouseenter", buttonClickhandler);

// setTimeout(() => {
//   buttonEventListener.removeEventListener("click", buttonClickhandler);
// }, 10000);

window.addEventListener("scroll", buttonClickhandler);

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const secondDivElement = document.getElementById("Second-Div");
const bubblingEventButton = secondDivElement.querySelector("button");
const bubblingMultipleEventButton = bubblingEventButton.nextElementSibling;

secondDivElement.addEventListener("click", (event) => {
  console.log("DIV-2");
  console.log(event);
});

bubblingEventButton.addEventListener("click", (event) => {
  console.log("Button-1st");
  console.log(event);
});

bubblingMultipleEventButton.addEventListener("click", (event) => {
  console.log("Button-2nd, 1st Event");
  console.log(event);
});

bubblingMultipleEventButton.addEventListener("click", (event) => {
  console.log("Button-2nd, 2nd Event");
  console.log(event);
});

const thirdDivElement = document.getElementById("Third-Div");
const capturingEventButton = thirdDivElement.querySelector("button");
const capturingMultipleEventButton = capturingEventButton.nextElementSibling;

thirdDivElement.addEventListener(
  "click",
  (event) => {
    console.log("DIV-3");
    console.log(event);
  },
  true
);

capturingEventButton.addEventListener("click", (event) => {
  console.log("Button-3rd");
  console.log(event);
});

capturingMultipleEventButton.addEventListener("click", (event) => {
  console.log("Button-4th, 1st Event");
  console.log(event);
});

capturingMultipleEventButton.addEventListener("click", (event) => {
  console.log("Button-4th, 2nd Event");
  console.log(event);
});

const fourthDivElement = document.getElementById("Fourth-Div");
const noPropagationButton = fourthDivElement.querySelector("button");
const noPropagationMultiEventButton = noPropagationButton.nextElementSibling;
const noCaptureNoBubbleButton =
  noPropagationMultiEventButton.nextElementSibling;

fourthDivElement.addEventListener("click", (event) => {
  console.log("DIV-4");
  console.log(event);
});

noPropagationButton.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button-5th");
  console.log(event);
});

noPropagationMultiEventButton.addEventListener("click", (event) => {
  event.stopImmediatePropagation(); // should be at first event to stop further propagation
  console.log("Button-6th, 1st Event");
  console.log(event);
});

noPropagationMultiEventButton.addEventListener("click", (event) => {
  // event.stopImmediatePropagation();
  console.log("Button-6th, 2nd Event");
  console.log(event);
});

noCaptureNoBubbleButton.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button-7th, 1st Event");
  console.log(event);
});

noCaptureNoBubbleButton.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("Button-7th, 2nd Event");
  console.log(event);
});

const fifthDiv = document.getElementById("Fifth-Div");
const listsElement = fifthDiv.querySelectorAll("li");

for (const listElement of listsElement) {
  listElement.addEventListener("click", (event) => {
    listElement.classList.toggle("highlight");
  });
}

const sixthDiv = document.getElementById("Sixth-Div");

sixthDiv.addEventListener("click", (event) => {
  event.target.classList.toggle("highlight");
});

const seventhDiv = document.getElementById("Seventh-Div");

seventhDiv.addEventListener("click", (event) => {
  event.target.classList.toggle("highlight");
});

const eighthDiv = document.getElementById("Eighth-Div");

eighthDiv.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
  event.target.closest;
});
