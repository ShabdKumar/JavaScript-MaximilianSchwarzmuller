const submitButton = document.querySelector("button");
const resultEle = document.getElementById("result");
const gendersEle = document.getElementsByName("gender");

submitButton.addEventListener("click", () => {
  for (const genderEle of gendersEle) {
    if (genderEle.checked) {
      resultEle.value = genderEle.value;
    }
  }
});
