"use strict";

var buttons = document.getElementById("buttons");
var form = document.getElementById("form");
var submit = document.getElementById("submit-form");
var firstCard = document.getElementById("first-step-card");
var secondCard = document.getElementById("second-step-card");
var answer = document.getElementById("answer");
var rating = null;

var validateForm = function validateForm() {
  return rating === null ? false : true;
};

var deselect = function deselect() {
  Array.from(buttons.children).forEach(function (button) {
    button.classList.remove("raiting-card-buttons__button--select");
  });
};

buttons.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    var button = e.target;
    deselect();
    button.classList.add("raiting-card-buttons__button--select");
    rating = button.textContent.trim();
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    firstCard.parentNode.removeChild(firstCard);
    secondCard.classList.remove("raiting-card--hidden");
    answer.textContent = rating;
  }
});