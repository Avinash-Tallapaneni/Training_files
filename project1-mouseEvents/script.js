/*---------------Avinash Tallapaneni----------------- */

const mouseEventsButtonGroup = document.querySelectorAll(".mouseEvents");
const inputField = document.querySelector(".input__value");
const displayOutput = document.querySelector(".display__box > span");

/*----------Adding event listners to each button by looping through it--
---------------- and also to get data attibutes, which is -------------- 
------------------- set the first argument for event------------------ */

mouseEventsButtonGroup.forEach((button) => {
  button.addEventListener(button.dataset.function, () => {
    displayOutput.textContent = parseInt(inputField.value) + 2;
    inputField.value = parseInt(inputField.value) + 2;
  });
});
