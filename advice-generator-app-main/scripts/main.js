"use strict";

const button = document.getElementById("generator-button")
const idquote = document.getElementById("id-quote")
const quote = document.getElementById("quote")
let rspt;

const generatedSentence = async ()=>{
  rspt = await fetch('https://api.adviceslip.com/advice', {
                method: 'GET',
                cache: 'no-cache',
              })
              .then(response => response.json())
              .then(data => data.slip)
  idquote.textContent = rspt.id
  quote.textContent = `“${rspt.advice}”`
}

button.addEventListener('click', generatedSentence)