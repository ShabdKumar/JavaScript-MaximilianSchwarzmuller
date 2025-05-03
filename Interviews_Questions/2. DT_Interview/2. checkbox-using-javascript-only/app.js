const body = document.querySelector("body");
const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const stateLabelElement = document.createElement("label");
const stateCheckboxElement = document.createElement("input");

body.append(div);
div.append(div1);
div.append(div2);
div1.append(stateLabelElement);
stateLabelElement.append(stateCheckboxElement);
stateLabelElement.for = "Bihar";
stateCheckboxElement.type = "checkbox";
stateCheckboxElement.value = "Bihar";
stateCheckboxElement.name = "Bihar";
stateLabelElement.append(document.createTextNode("Bihar"));

const districts = ["Patna", "Gaya", "Darbhanga", "Munger"];
for (const district of districts) {
  const labelElement = document.createElement("label");
  const checkboxElement = document.createElement("input");
  labelElement.append(checkboxElement);
  labelElement.for = district;
  checkboxElement.type = "checkbox";
  checkboxElement.value = district;
  checkboxElement.name = district;
  labelElement.append(document.createTextNode(district));
  labelElement.style.display = "block";
  div2.append(labelElement);
}

const allDistrictCheckboxes = div2.querySelectorAll("input");

function stateCheckboxhandler() {
  for (const distNode of allDistrictCheckboxes) {
    if (stateCheckboxElement.checked) {
      distNode.checked = true;
    } else {
      distNode.checked = false;
    }
  }
}

stateCheckboxElement.addEventListener("click", stateCheckboxhandler);

const districtCheckboxhandler = () => {
  let count = 0;
  for (const distNode of allDistrictCheckboxes) {
    if (distNode.checked) {
      count++;
    }
  }
  if (count === allDistrictCheckboxes.length) {
    stateCheckboxElement.checked = true;
  } else {
    stateCheckboxElement.checked = false;
  }
};

for (const distNode of allDistrictCheckboxes) {
  distNode.addEventListener("click", districtCheckboxhandler);
}
