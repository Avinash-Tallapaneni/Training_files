/*-------------Obtaining Hex code from input value to---------
-----------------and display the hex and rgb code------------*/

const colorPicker = document.querySelector(".colorPicker");
const displayHex = document.querySelector(".hexValue");
const displayrgb = document.querySelector(".rgbValue");
colorPicker.addEventListener("input", (e) => {
  let hexValue = e.target.value;
  let rgbvalue = hexToRgb(hexValue);
  console.log(hexValue, rgbvalue);
  displayHex.textContent = hexValue;
  displayrgb.textContent = `(${rgbvalue.r}, ${rgbvalue.g}, ${rgbvalue.b})`;
});

function hexToRgb(hexValue) {
  /*we want to remove the # from the hexvalue */
  hexValue = hexValue.replace(/^#/, "");

  /*found code in stackoverflow. need to look into it  */

  let bigint = parseInt(hexValue, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Return the RGB values as an object
  return { r: r, g: g, b: b };
}
