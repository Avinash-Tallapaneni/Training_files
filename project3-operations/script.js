/*---------------Avinash Tallapaneni----------------- */

const functionCall = document.querySelector(".functionCall");
const functionResult = document.querySelector(".functionResult");

/*----------Prime number function-------- */

const primenumber = (value) => {
  functionCall.textContent = `primenumber(${value})`;
  if (typeof value !== "number") {
    functionResult.textContent = "Please Enter a valid Number";
  }

  if (value <= 0) {
    return (functionResult.textContent = "please Enter a positive number");
  }
  if (value === 1) {
    return (functionResult.textContent =
      "1 is neither a prime nor a composite number");
  }

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

  if (typeof value !== "number") {
    functionResult.textContent = "Please Enter a valid Number";
  }
  if (value < 0) {
    return (functionResult.textContent = `Please Enter a positive Number`);
  }
  let sequence = [0, 1];
  let num1 = 0;
  let num2 = 1;
  for (let i = 2; i <= value; i++) {
    let sum = num1 + num2;
    sequence.push(sum);
    num1 = num2;
    num2 = sum;
  }

  if (value === 0) {
    return (functionResult.textContent = `Fibonacci Series is : ${sequence[0]}`);
  }

  return (functionResult.textContent = `Fibonacci Series is : ${sequence.toString()}`);
};

/*----------Temperature conversion function-------- */

const tempConversion = (value) => {
  functionCall.textContent = `tempConversion(${value})`;

  const celcius = ((value - 32) * (5 / 9)).toFixed(2);
  return (functionResult.textContent = `The Temperature conversion of ${value} fahrenheit to celcius is ${celcius}.`);
};

/*----------factorial function-------- */

const factorial = (value, strNumber = false) => {
  if (!strNumber) {
    functionCall.textContent = `factorial(${value})`;
  }

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
