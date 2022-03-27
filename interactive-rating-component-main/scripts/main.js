const buttons = document.getElementById("buttons");
const form = document.getElementById("form");
const submit = document.getElementById("submit-form");
const firstCard = document.getElementById("first-step-card");
const secondCard = document.getElementById("second-step-card");
const answer = document.getElementById("answer");

let rating = null;

const validateForm = () => {
  return rating === null ? false : true;
};

const deselect = () => {
  Array.from(buttons.children).forEach((button) => {
    button.classList.remove("raiting-card-buttons__button--select");
  });
};

buttons.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let button = e.target;
    deselect();
    button.classList.add("raiting-card-buttons__button--select");
    rating = button.textContent.trim();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    firstCard.parentNode.removeChild(firstCard);
    secondCard.classList.remove("raiting-card--hidden");
    answer.textContent = rating;
  }
});
