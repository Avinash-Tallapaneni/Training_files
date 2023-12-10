/*---------------Avinash Tallapaneni----------------- */

const displayColor = document.querySelector(".display__color");
const buttonGroup = document.querySelectorAll("button");



/*----------Adding event listners to each button by looping through it--------
---------- To prevent event bubbling, im targeting closest button class-------
-------------------to get data attibutes named color, which is---------------- 
---------------------- set as the display background color------------------*/


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



/*----------------Obtaining Hex code from input value to--------------
-----------------set the display color based on the input----------- */

const colorPicker = document.querySelector("#color_picker");
const colorPickerText = document.querySelector(".color_picker_text");

colorPicker.addEventListener("input", (e) => {
  displayColor.style.backgroundColor = e.target.value;
  colorPickerText.textContent = e.target.value;
  displayColor.querySelector(
    "span"
  ).textContent = `Background color set to ${e.target.value}`;
});
