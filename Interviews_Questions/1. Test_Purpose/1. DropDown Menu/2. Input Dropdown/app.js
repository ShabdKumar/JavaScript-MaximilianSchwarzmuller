const selectElement = document.querySelector("select");
const para = document.querySelector("p");

function gettingValue() {
  if (selectElement.value) {
    para.textContent = selectElement.value;
    para.parentElement.style.display = "block";
  } else {
    alert("Please select a value from dropdown");
  }
}

para.parentElement.addEventListener("click", () => {
  para.parentElement.style.display = "none";
});
