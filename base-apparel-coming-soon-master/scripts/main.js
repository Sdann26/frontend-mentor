"use strict";

var form = document.getElementById("form-apparel");
var input = document.getElementById("input-email");
var submit = document.getElementById("submit-button");
var errorText = document.getElementsByClassName("form__error");
var errorIcon = document.getElementsByClassName("form__error-icon");
var formValidation = {
  email: false
};

var validation = function validation() {
  if (formValidation.email === false) {
    input.classList.add("form__input--error");
    errorText[0].classList.add("form__error--visible");
    errorIcon[0].classList.add("form__error-icon--visible");
  }

  return Object.values(formValidation).every(function (e) {
    return e === true;
  }) ? true : false;
};

input.addEventListener("change", function (e) {
  var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  emailRegex.test(e.target.value) ? formValidation.email = true : formValidation.email = false;
});
input.addEventListener("input", function () {
  input.classList.remove("form__input--error");
  errorText[0].classList.remove("form__error--visible");
  errorIcon[0].classList.remove("form__error-icon--visible");
});
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validation()) {
    form.submit();
  }
});