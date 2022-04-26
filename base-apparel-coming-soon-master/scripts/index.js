const form = document.getElementById("form-apparel");
const input = document.getElementById("input-email");
const submit = document.getElementById("submit-button");
const errorText = document.getElementsByClassName("form__error");
const errorIcon = document.getElementsByClassName("form__error-icon");

const formValidation = {
  email: false,
};

const validation = () => {
  return Object.values(formValidation).every((e) => e === true) ? true : false;
};

input.addEventListener("change", (e) => {
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (emailRegex.test(e.target.value)) {
    formValidation.email = true;
    input.classList.remove("form__input--error");
    errorText[0].classList.remove("form__error--visible");
    errorIcon[0].classList.remove("form__error-icon--visible");
  } else {
    formValidation.email = false;
    input.classList.add("form__input--error");
    errorText[0].classList.add("form__error--visible");
    errorIcon[0].classList.add("form__error-icon--visible");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validation()) {
    form.submit();
  }
});
