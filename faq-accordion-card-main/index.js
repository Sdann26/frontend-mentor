const questions = Array.from(document.querySelectorAll(".FAQ-accordion__question"));
const answers = Array.from(document.querySelectorAll(".FAQ-accordion__answer"));
const icons = Array.from(document.querySelectorAll(".FAQ-accordion__question-img"));

for (const i in questions) {
    questions[i].addEventListener('click', ()=>{
        console.log(questions[i].classList.contains('FAQ-accordion__question--active'));
        if(questions[i].classList.contains('FAQ-accordion__question--active') == true){
            questions[i].classList.remove('FAQ-accordion__question--active');
            answers[i].classList.replace('FAQ-accordion__answer--active','accordion__question-img--desactive');
            icons[i].classList.remove('FAQ-accordion__question-img--active');
        }
        else{
            reset(questions);
            questions[i].classList.add('FAQ-accordion__question--active');
            answers[i].classList.add('FAQ-accordion__answer--active');
            icons[i].classList.add('FAQ-accordion__question-img--active');
        }
    });
}

const reset = (arr)=>{
    for (const i in arr) {
        let eliminate = !arr[i].classList.toggle('FAQ-accordion__question--active', false);
        if(eliminate == true){
            answers[i].classList.replace('FAQ-accordion__answer--active','accordion__question-img--desactive');
            icons[i].classList.remove('FAQ-accordion__question-img--active');
        }
    }
}