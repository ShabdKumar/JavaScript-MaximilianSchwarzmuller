function onSelecting() {
  document.querySelector(".dropdownSelector").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdownButton") && !event.target.matches("a")) {
    document.querySelector(".dropdownSelector").classList.remove("show");
  }
};
