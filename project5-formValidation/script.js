/*---------------Avinash Tallapaneni----------------- */

/*------name validation, should accept only Alphabets-------- */

const nameInputBox = document.querySelector(".name > input");
const nameErrorMessage = document.querySelector(".name > small ");

nameInputBox.addEventListener("input", (e) => {
  const nameInput = e.target.value;
  const nameRegex = /^[a-zA-Z\s]{3,}$/;

  const nameValidation = nameRegex.test(nameInput);

  if (nameValidation) {
    nameErrorMessage.classList.remove("text-red-500");
    nameErrorMessage.classList.add("text-green-500");
    nameErrorMessage.firstElementChild.classList.remove(
      "fa-triangle-exclamation"
    );
    nameErrorMessage.firstElementChild.classList.add("fa-circle-check");
    nameErrorMessage.lastElementChild.textContent = "Name is valid";
    nameInputBox.classList.add("valid");
    nameInputBox.classList.remove("invalid");
    formValidation.name = true;
  } else {
    nameErrorMessage.classList.add("text-red-500");
    nameErrorMessage.classList.remove("text-green-500");
    nameErrorMessage.firstElementChild.classList.add("fa-triangle-exclamation");
    nameErrorMessage.firstElementChild.classList.remove("fa-circle-check");
    nameErrorMessage.lastElementChild.textContent = "Name is Invalid";
    nameInputBox.classList.add("invalid");
    nameInputBox.classList.remove("valid");
    formValidation.name = false;
  }
  formSubmit();
});

/*------Email validation-------- */

const emailInputBox = document.querySelector(".email > input");
const emailErrorMessage = document.querySelector(".email > small ");

emailInputBox.addEventListener("input", (e) => {
  const emailInput = e.target.value;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailValidation = emailRegex.test(emailInput);

  if (emailValidation) {
    emailErrorMessage.classList.remove("text-red-500");
    emailErrorMessage.classList.add("text-green-500");
    emailErrorMessage.firstElementChild.classList.remove(
      "fa-triangle-exclamation"
    );
    emailErrorMessage.firstElementChild.classList.add("fa-circle-check");
    emailErrorMessage.lastElementChild.textContent = "Email is valid";
    emailInputBox.classList.add("valid");
    emailInputBox.classList.remove("invalid");
    formValidation.email = true;
  } else {
    emailErrorMessage.classList.add("text-red-500");
    emailErrorMessage.classList.remove("text-green-500");
    emailErrorMessage.firstElementChild.classList.add(
      "fa-triangle-exclamation"
    );
    emailErrorMessage.firstElementChild.classList.remove("fa-circle-check");
    emailErrorMessage.lastElementChild.textContent = "Email is Invalid";
    emailInputBox.classList.add("invalid");
    emailInputBox.classList.remove("valid");
    formValidation.email = false;
  }
  formSubmit();
});

/*------Password validation and possword toggle-------- */

const passwordInputBox = document.querySelector(".password > div >input");
const passwordToggle = document.querySelector(".eye");
const passwordErrorMessage = document.querySelectorAll(".errorMessage > small");

passwordToggle.addEventListener("click", () => {
  if (passwordToggle.firstElementChild.classList.contains("hidden")) {
    passwordInputBox.setAttribute("type", "password");
    passwordToggle.firstElementChild.classList.remove("hidden");
    passwordToggle.lastElementChild.classList.add("hidden");
  } else {
    passwordInputBox.setAttribute("type", "text");
    passwordToggle.firstElementChild.classList.add("hidden");
    passwordToggle.lastElementChild.classList.remove("hidden");
  }
});

passwordInputBox.addEventListener("input", (e) => {
  const passwordInput = e.target.value;

  const passwordRegex = {
    length: /^.{8}/,
    number: /[0-9]/,
    lowercases: /[a-z]/,
    uppercases: /[A-Z]/,
    special: /[#?!@$%^&*-]/,
  };

  const passwordValidation = {
    length: passwordRegex.length.test(passwordInput),
    number: passwordRegex.number.test(passwordInput),
    lowercases: passwordRegex.lowercases.test(passwordInput),
    uppercases: passwordRegex.uppercases.test(passwordInput),
    special: passwordRegex.special.test(passwordInput),
  };

  if (Object.values(passwordValidation).every((field) => field)) {
    formValidation.password = true;
  } else {
    formValidation.password = false;
  }

  passwordErrorMessage.forEach((msg) => {
    if (passwordValidation[msg.classList[0]]) {
      msg.classList.add("text-green-500");
      msg.classList.remove("text-red-500");
      msg.firstElementChild.classList.add("fa-circle-check");
      msg.firstElementChild.classList.remove("fa-triangle-exclamation");
      passwordInputBox.parentElement.classList.add("valid");
      passwordInputBox.parentElement.classList.remove("invalid");
    } else {
      msg.classList.remove("text-green-500");
      msg.classList.add("text-red-500");
      msg.firstElementChild.classList.add("fa-triangle-exclamation");
      msg.firstElementChild.classList.remove("fa-circle-check");
      passwordInputBox.parentElement.classList.add("invalid");
      passwordInputBox.parentElement.classList.remove("valid");
    }
  });
  formSubmit();
});

/*------URL validation-------- */

const urlInputBox = document.querySelector(".urlBox > input");
const urlErrorMessage = document.querySelector(".urlErrorMessage");

urlInputBox.addEventListener("input", (e) => {
  const urlInput = e.target.value;

  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  const urlValidation = urlRegex.test(urlInput);

  if (urlValidation) {
    urlErrorMessage.classList.remove("text-red-500");
    urlErrorMessage.classList.add("text-green-500");
    urlErrorMessage.firstElementChild.classList.remove(
      "fa-triangle-exclamation"
    );
    urlErrorMessage.firstElementChild.classList.add("fa-circle-check");
    urlErrorMessage.lastElementChild.textContent = "URL is valid";
    urlInputBox.classList.add("valid");
    urlInputBox.classList.remove("invalid");
    formValidation.url = true;
  } else {
    urlErrorMessage.classList.add("text-red-500");
    urlErrorMessage.classList.remove("text-green-500");
    urlErrorMessage.firstElementChild.classList.add("fa-triangle-exclamation");
    urlErrorMessage.firstElementChild.classList.remove("fa-circle-check");
    urlErrorMessage.lastElementChild.textContent =
      "URL is Invalid. URL starts with HTTP/HTTPS";
    urlInputBox.classList.add("invalid");
    urlInputBox.classList.remove("valid");
    formValidation.url = false;
  }
  formSubmit();
});

/*------Textarea validation-------- */

const textAreaBox = document.querySelector("#textArea");
const textAreaErrorMessage = document.querySelector(".textArea > small");

textAreaBox.addEventListener("input", (e) => {
  const textAreaInput = e.target.value;
  const textAreaRegex = /^[a-zA-Z\s.]+$/;

  const textAreaValidation = textAreaRegex.test(textAreaInput);

  if (textAreaValidation) {
    textAreaErrorMessage.classList.remove("text-red-500");
    textAreaErrorMessage.classList.add("text-green-500");
    textAreaErrorMessage.firstElementChild.classList.remove(
      "fa-triangle-exclamation"
    );
    textAreaErrorMessage.firstElementChild.classList.add("fa-circle-check");
    textAreaErrorMessage.lastElementChild.textContent = "Text area is valid";
    textAreaBox.classList.add("valid");
    textAreaBox.classList.remove("invalid");
    formValidation.textarea = true;
  } else {
    textAreaErrorMessage.classList.add("text-red-500");
    textAreaErrorMessage.classList.remove("text-green-500");
    textAreaErrorMessage.firstElementChild.classList.add(
      "fa-triangle-exclamation"
    );
    textAreaErrorMessage.firstElementChild.classList.remove("fa-circle-check");
    textAreaErrorMessage.lastElementChild.textContent =
      "Text area is Invalid. Will only accepts Alphabets, period(.) and spaces";
    textAreaBox.classList.add("invalid");
    textAreaBox.classList.remove("valid");
    formValidation.textarea = false;
  }
  formSubmit();
});

/*------File validation-------- */

const fileUploadButton = document.querySelector(".fileUpload");
const fileUploadBox = document.querySelector(".fileUploadBox");
const fileUploadErrorMessage = document.querySelector(
  ".fileUploadErrorMessage"
);

fileUploadButton.addEventListener("change", (e) => {
  const acceptableFileTypes = ["image/png", "application/pdf"];
  const fileUploadedType = e.target.files[0].type;
  const fileValidation = acceptableFileTypes.includes(fileUploadedType);

  if (fileValidation) {
    fileUploadErrorMessage.classList.remove("text-red-500");
    fileUploadErrorMessage.classList.add("text-green-500");
    fileUploadErrorMessage.firstElementChild.classList.remove(
      "fa-triangle-exclamation"
    );
    fileUploadErrorMessage.firstElementChild.classList.add("fa-circle-check");
    fileUploadErrorMessage.lastElementChild.textContent =
      "File Upload is valid";
    fileUploadButton.classList.add("valid");
    fileUploadButton.classList.remove("invalid");
    formValidation.file = true;
  } else {
    fileUploadErrorMessage.classList.add("text-red-500");
    fileUploadErrorMessage.classList.remove("text-green-500");
    fileUploadErrorMessage.firstElementChild.classList.add(
      "fa-triangle-exclamation"
    );
    fileUploadErrorMessage.firstElementChild.classList.remove(
      "fa-circle-check"
    );
    fileUploadErrorMessage.lastElementChild.textContent =
      "File upload is Invalid. Acceptable file format are PDF, png";
    fileUploadButton.classList.add("invalid");
    fileUploadButton.classList.remove("valid");
    formValidation.file = false;
  }
  formSubmit();
});

/*------Form validation-------- */

const formValidation = {
  name: false,
  email: false,
  password: false,
  url: false,
  textarea: false,
  file: false,
};

const formSubmit = () => {
  const formValid = Object.values(formValidation).every((field) => field);
  const formSubmitbutton = document.querySelector(".submit");
  const mainForm = document.querySelector(".mainForm");
  const formMessage = document.querySelector(".formMessage");
  formSubmitbutton.disabled = !formValid;

  if (formValid) {
    formSubmitbutton.classList.remove("disabled");
    formSubmitbutton.classList.add("enabled");
  } else {
    formSubmitbutton.classList.add("disabled");
    formSubmitbutton.classList.remove("enabled");
  }

  formSubmitbutton.addEventListener("click", (e) => {
    e.preventDefault();
    if (formValid) {
      formMessage.classList.remove("hidden");
      mainForm.classList.add("hidden");
    }
  });
};

formSubmit();
