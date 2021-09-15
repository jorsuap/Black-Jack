"use strict";

let up = document.querySelectorAll('.up');
let down = document.querySelectorAll('.down');
let cuadrado = document.querySelectorAll('.cuadrado');
const card = document.querySelector('.card');
let upNumber = document.querySelector('.up__number');
let upSimbol = document.querySelector('.up__simbol');
let downNumber = document.querySelector('.down__number');
let downSimbol = document.querySelector('.down__simbol');
const container = document.querySelector('.container');

let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
card.classList.add('cartatapada')

function cartaAleatoria() {
    
    // crearnuevaCarta();
    const crearCarta = document.createElement('div');
    crearCarta.classList.add('card');
    crearCarta.innerHTML = `
        
        <span class="cuadrado"></span>
            `;
    container.appendChild(crearCarta);

    card.classList.remove('cartatapada');
    // cuadrado.classList.remove('j');
    cuadrado.forEach(centro => {
        centro.classList.remove('j');
    });
    // cuadrado.classList.remove('q');
    cuadrado.forEach(centro => {
        centro.classList.remove('q');
    });
    // cuadrado.classList.remove('k');
    cuadrado.forEach(centro => {
        centro.classList.remove('k');
    });

    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    if (singleCard === '♥' || singleCard === '♦') {
        console.log(singleCard);
        // up.classList.add('cardsred');
        card.classList.add('cardsred');
        up.forEach(upp => {
            upp.classList.add('cardsred');
        });
        down.forEach(downn => {
            downn.classList.add('cardsred');
        });
        // down.classList.add('cardsred');
        cuadrado.forEach(centro => {
            centro.classList.add('red');
        })
        // cuadrado.classList.add('red');
    } else {
        // up.classList.remove('cardsred');
        up.forEach(upp => {
            upp.classList.remove('cardsred');
        });
        // down.classList.remove('cardsred');
        down.forEach(downn => {
            downn.classList.remove('cardsred');
        });
        // cuadrado.classList.add('black');
        cuadrado.forEach(centro => {
            centro.classList.add('black');
        });
        // cuadrado.classList.remove('red');
        cuadrado.forEach(centro => {
            centro.classList.remove('red');
        });
    }
    switch (singleNumber) {
        case 'J':
            // cuadrado.classList.add('j');
            cuadrado.forEach(centro => {
                centro.classList.add('j');
            });
            break;
        case 'Q':
            // cuadrado.classList.add('q');
            cuadrado.forEach(centro => {
                centro.classList.add('q');
            });
            break;
        case 'K':
            // cuadrado.classList.add('k');
            cuadrado.forEach(centro => {
                centro.classList.add('k');
            });
            break;
    };


    upNumber.innerHTML = `${singleNumber}`;
    upSimbol.innerHTML = `${singleCard}`;
    downNumber.innerHTML = `${singleNumber}`;
    downSimbol.innerHTML = `${singleCard}`;

   

};

// function crearnuevaCarta(){
    
// }
/* <p class="up">
            <span class="up__number"></span>
            <span class="up__simbol"></span>
        </p>
        <p class="down">
            <span class="down__number"></span>
            <span class="down__simbol"></span>
        </p> */