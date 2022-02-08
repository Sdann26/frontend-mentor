"use strict";

let sectionQA = document.getElementById('FAQ-accordion__describe')
let questions = Array.from(document.querySelectorAll(".FAQ-accordion__question-answer"));

const toggleAction = (e) => {
    if(e.target.classList.contains('FAQ-accordion__question')){
        questions.forEach((question)=>(e.target.parentNode==question)? question:question.removeAttribute('open'))
    }
}

sectionQA.addEventListener('click', toggleAction)