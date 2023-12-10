/*---------------Avinash Tallapaneni----------------- */

const functionCall = document.querySelector(".functionCall");
const functionResult = document.querySelector(".functionResult");

/*----------Prime number function-------- */

const primenumber = (value) => {
  functionCall.textContent = `primenumber(${value})`;

  /*----------Checks if the entered number is a number-------- */

  if (typeof value !== "number") {
    functionResult.textContent = "Please Enter a valid Number";
  }

  /*----------IF value less than or equal to 0,--------
  ------------ it will return appropriate msg-------- */

  if (value <= 0) {
    return (functionResult.textContent = "please Enter a positive number");
  }

  /*---------------IF value equal to 0,it will return appropriate msg --------*/

  if (value === 1) {
    return (functionResult.textContent =
      "1 is neither a prime nor a composite number");
  }

  /*------Looping from 2 till the entererd number. if value divisible by increment---
  -------------------------parameter then its not a prime number ------------------*/

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return (functionResult.textContent = `${value} is a Not prime number`);
    }
  }
  return (functionResult.textContent = `${value} is a prime number`);
};

/*----------fibonacci function-------- */

const fibonacci = (value) => {
  functionCall.textContent = `fibonacci(${value})`;

  /*----------Checks if the entered number is a number-------- */

  if (typeof value !== "number") {
    functionResult.textContent = "Please Enter a valid Number";
  }

  /*----------IF value less than or equal to 0,--------
  ------------ it will return appropriate msg-------- */
  if (value < 0) {
    return (functionResult.textContent = `Please Enter a positive Number`);
  }

  /*----------we need two default value to start the series--------
  ------------ so 0 and 1 is set as defaults, the rest-------------
  --------------is geneated by the sum of previous two values--- */

  let sequence = [0, 1];
  let num1 = 0;
  let num2 = 1;
  for (let i = 2; i <= value; i++) {
    let sum = num1 + num2;
    sequence.push(sum);
    num1 = num2;
    num2 = sum;
  }

  /*----------IF value equal to 0, it will return appropriate msg-------- */
  if (value === 0) {
    return (functionResult.textContent = `Fibonacci Series is : ${sequence[0]}`);
  }

  return (functionResult.textContent = `Fibonacci Series is : ${sequence.toString()}`);
};

/*----------Temperature conversion function-------- */

const tempConversion = (value) => {
  functionCall.textContent = `tempConversion(${value})`;

  /*----------Checks if the entered number is a number-------- */

  if (typeof value !== "number") {
    functionResult.textContent = "Please Enter a valid Number";
  }

  /*----------converts from F to C using the formula. Fixed to restrict to 2 decimals-------- */

  const celcius = ((value - 32) * (5 / 9)).toFixed(2);
  return (functionResult.textContent = `The Temperature conversion of ${value} fahrenheit to celcius is ${celcius}.`);
};

/*----------factorial function-------- */

const factorial = (value, strNumber = false) => {
  /*----------factorial is used by both factorial and strong number--------
  ---------added if strNumber is true then it will only return number------ 
  ---------------for the strong number instead of text------------------- */

  if (!strNumber) {
    functionCall.textContent = `factorial(${value})`;
  }

  /*----------IF value less than or equal to 0,--------
  ------------ it will return appropriate msg-------- */

  if (value < 0) {
    return (functionResult.textContent = "please Enter a positive number");
  } else if (value === 0) {
    return (functionResult.textContent = `The factorial of ${value} is 1.`);
  } else {
    let factorialResult = 1;
    for (let i = 2; i <= value; i++) {
      factorialResult *= i;
    }

    if (!strNumber) {
      return (functionResult.textContent = `The factorial of ${value} is ${factorialResult}.`);
    } else {
      return factorialResult;
    }
  }
};

/*----------Armstrong function-------- */

const armstrong = (value) => {
  functionCall.textContent = `armstrong(${value})`;

  /*---We split the number and perform nth sum with the number of digits obtained----
  ---------it will return appropriate msg once the sum of nth digits is done------- */

  const armstrongElement = value.toString().split("");

  let armstrongResult = 0;
  armstrongElement.map((element) => {
    armstrongResult += parseInt(element) ** armstrongElement.length;
  });

  return (functionResult.textContent =
    armstrongResult === value
      ? `The Number ${value} is an armstrong.`
      : `The Number ${value} is Not an armstrong.`);
};

/*----------Strong Number function-------- */

const strongNumber = (value) => {
  functionCall.textContent = `strongNumber(${value})`;

  /*---We split the number and perform factorial with each digits obtained------
  ----it will return appropriate msg once the sum of each factorial is done----*/

  const strongNumberElement = value.toString().split("");
  let strongNumberResult = 0;
  strongNumberElement.map(
    (element) => (strongNumberResult += factorial(element, true))
  );
  return (functionResult.textContent =
    strongNumberResult === value
      ? `The Number ${value} is an strong Number.`
      : `The Number ${value} is Not an strong Number.`);
};

/*----------Prompt to start one of the following operation-------- */

const inputFunction = prompt(
  `Please enter the function which you want to execute? 
   eg:
      type 1 or primenumber to perform the requested operation, 
      type 2 or fibonacci to perform the requested operation,
      type 3 or tempConversion to perform the requested operation,
      type 4 or factorial to perform the requested operation,
      type 5 or armstrong to perform the requested operation,
      type 6 or strongNumber to perform the requested operation,
   `
);
const inputValue = prompt("Please enter the Input value");

/*----------Self invoking functions is added here-------- */

(() => {
  console.log(inputFunction);
  switch (true) {
    case inputFunction === "primenumber" || inputFunction === "1":
      return primenumber(inputValue);
    case inputFunction === "fibonacci" || inputFunction === "2":
      return fibonacci(inputValue);
    case inputFunction === "tempConversion" || inputFunction === "3":
      return tempConversion(inputValue);
    case inputFunction === "factorial" || inputFunction === "4":
      return factorial(inputValue);
    case inputFunction === "armstrong" || inputFunction === "5":
      return armstrong(inputValue);
    case inputFunction === "strongNumber" || inputFunction === "6":
      return strongNumber(inputValue);

    default:
      return alert("Please enter valid function name");
  }
})();
