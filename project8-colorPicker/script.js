/*----------------Obtaining Hex code from input value to--------------
-----------------set the display color based on the input----------- */

const colorPicker = document.querySelector(".colorPicker");
const displaycontainerSpan = document.querySelector(
  ".display_container> span:last-of-type"
);
colorPicker.addEventListener("input", (e) => {
  displaycontainerSpan.textContent = `Hex code:  ${e.target.value}`;
});
