const generateBiodata = document.querySelector("button");
const arnab = document.querySelector(".arnab");
const others = document.querySelector(".others");
const donkey = document.querySelector(".donkey");
const female = document.querySelector(".female");
const firstInput = document.querySelector("input");
const akash = document.querySelector(".akash");
const genderInput = document.getElementsByName("gender");

generateBiodata.addEventListener("click", () => {
  // setTimeout(() => {
  //   alert("Finding perfect Match. Please wait .........");
  // }, 1000);

  if (isGender()) {
    if (getGender() === "female") {
      female.style.display = "block";
    } else if (firstInput.value === "arnav" || firstInput.value === "arnab") {
      arnab.style.display = "block";
    } else if (firstInput.value === "abhinav" || firstInput.value === "somya") {
      donkey.style.display = "block";
    } else if (firstInput.value === "akash" || firstInput.value === "nikki") {
      akash.style.display = "block";
    } else if (!firstInput.value) {
      alert("Please enter name atleast");
    } else {
      others.style.display = "block";
    }
  } else {
    alert("Select a gender.");
  }
});

function hideImage() {
  arnab.style.display = "none";
  others.style.display = "none";
  donkey.style.display = "none";
  female.style.display = "none";
  akash.style.display = "none";
}

arnab.addEventListener("click", hideImage);
others.addEventListener("click", hideImage);
donkey.addEventListener("click", hideImage);
female.addEventListener("click", hideImage);
akash.addEventListener("click", hideImage);

function isGender() {
  for (const gender of genderInput) {
    if (gender.checked) {
      return true;
    }
  }
  return false;
}

function getGender() {
  for (const gender of genderInput) {
    if (gender.checked) {
      console.log("hi", gender.value);
      return gender.value;
    }
  }
}
