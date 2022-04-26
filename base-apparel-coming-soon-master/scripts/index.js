const form = document.getElementById("form-apparel");
const input = document.getElementById("input-email");
const submit = document.getElementById("submit-button");
const errorText = document.getElementsByClassName("form__error");
const errorIcon = document.getElementsByClassName("form__error-icon");

const formValidation = {
  email: false,
};

const validation = () => {
  if (formValidation.email === false) {
    input.classList.add("form__input--error");
    errorText[0].classList.add("form__error--visible");
    errorIcon[0].classList.add("form__error-icon--visible");
  }
  return Object.values(formValidation).every((e) => e === true) ? true : false;
};

input.addEventListener("change", (e) => {
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  emailRegex.test(e.target.value)
    ? (formValidation.email = true)
    : (formValidation.email = false);
});

input.addEventListener("input", () => {
  input.classList.remove("form__input--error");
  errorText[0].classList.remove("form__error--visible");
  errorIcon[0].classList.remove("form__error-icon--visible");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validation()) {
    form.submit();
  }
});
