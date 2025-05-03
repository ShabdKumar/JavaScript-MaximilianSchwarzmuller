const clickableDropDown = document.querySelector(".state-bihar");
const districtBihar = document.querySelector(".district-bihar");
const stateBihar = document.querySelector(".state-bihar");
const inputState = document.querySelector(".state-name input");
const resultButton = document.querySelector("button");
const allDistrict = document.querySelectorAll(".district-bihar input");

function clickableDropDownHandler() {
  districtBihar.classList.toggle("invisibility");
  if (districtBihar.className.includes("invisibility")) {
    stateBihar.innerHTML = `<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      class="size-6"
    >
      <path 
        fill-rule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clip-rule="evenodd" 
      />
    </svg>`;
  } else {
    stateBihar.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path
        fill-rule="evenodd"
        d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
        clip-rule="evenodd"
      />
    </svg>`;
  }
}

function inputHandler() {
  if (inputState.checked) {
    for (const district of allDistrict) {
      district.checked = true;
    }
  } else {
    for (const district of allDistrict) {
      district.checked = false;
    }
  }
}

function printValue() {
  const allValue = document.querySelectorAll(".district input");
  let selectedDistricts = [];
  for (const district of allValue) {
    if (district.checked) {
      selectedDistricts.push(district.value);
    }
  }

  const inputResult = document.querySelector(".textResult");
  console.log(selectedDistricts);
  inputResult.value = selectedDistricts;
}

setInterval(() => {
  let count = 0;
  for (const district of allDistrict) {
    if (district.checked) {
      count++;
    }
  }
  if (count !== 5) {
    inputState.checked = false;
  } else {
    inputState.checked = true;
  }
}, 500);

clickableDropDown.addEventListener("click", clickableDropDownHandler);
inputState.addEventListener("click", inputHandler);
resultButton.addEventListener("click", printValue);
