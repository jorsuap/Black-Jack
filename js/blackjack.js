"use strict";

let up = document.querySelector('.up');
let down = document.querySelector('.down');
const cuadrado = document.querySelector('.cuadrado');
const card = document.querySelector('.card');
let upNumber = document.querySelector('.up__number');
let upSimbol = document.querySelector('.up__simbol');
let downNumber = document.querySelector('.down__number');
let downSimbol = document.querySelector('.down__simbol');

let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
card.classList.add('cartatapada')
function cartaAleatoria() {
    card.classList.remove('cartatapada')
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    if(singleCard === '♥' || singleCard === '♦'){
        console.log(singleCard);
        up.classList.add('cardsred');
        down.classList.add('cardsred');
        cuadrado.classList.add('red');
    }else{
        up.classList.remove('cardsred');
        down.classList.remove('cardsred');
        cuadrado.classList.add('black');
        cuadrado.classList.remove('red');
        
    }
      
    upNumber.innerHTML = `${singleNumber}`;
    upSimbol.innerHTML = `${singleCard}`;
    downNumber.innerHTML = `${singleNumber}`;
    downSimbol.innerHTML = `${singleCard}`;

    // console.log(singleCard, singleNumber);
}