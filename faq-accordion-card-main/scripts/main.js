"use strict";

var sectionQA = document.getElementById('FAQ-accordion__describe');
var questions = Array.from(document.querySelectorAll(".FAQ-accordion__question-answer"));

var toggleAction = function toggleAction(e) {
  if (e.target.classList.contains('FAQ-accordion__question')) {
    questions.forEach(function (question) {
      return e.target.parentNode == question ? question : question.removeAttribute('open');
    });
  }
};

sectionQA.addEventListener('click', toggleAction);