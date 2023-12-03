/*---------------Avinash Tallapaneni----------------- */

const displayColor = document.querySelector(".display__color");
const buttonGroup = document.querySelectorAll("button");

/*----------Looping through button to get----------
--------------data attibutes and set the ----------
-----------button color and  display color------- */

buttonGroup.forEach((button) => {
  button.style.backgroundColor = button.dataset.color;

  button.addEventListener("click", (e) => {
    const colorSet = e.target.closest("button").dataset.color;
    displayColor.style.backgroundColor = colorSet;
    displayColor.querySelector(
      "span"
    ).textContent = `Background color set to ${colorSet}`;
  });
});

/*-------Setting display color based on the input------ */

const colorPicker = document.querySelector("#color_picker");
const colorPickerText = document.querySelector(".color_picker_text");

colorPicker.addEventListener("input", (e) => {
  displayColor.style.backgroundColor = e.target.value;
  colorPickerText.textContent = e.target.value;
  displayColor.querySelector(
    "span"
  ).textContent = `Background color set to ${e.target.value}`;
});
