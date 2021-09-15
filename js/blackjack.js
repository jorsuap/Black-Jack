"use strict";

const container = document.querySelector('.container');

let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


function cartaAleatoria() {

    const crearCarta = document.createElement('div');
    crearCarta.classList.add('card');
    container.appendChild(crearCarta);

    const up = document.createElement('p');
    up.classList.add('up');
    crearCarta.appendChild(up);

    const upNumber = document.createElement('span');
    upNumber.classList.add('up__number');
    up.appendChild(upNumber);

    const upSimbol = document.createElement('span');
    upSimbol.classList.add('up__simbol');
    up.appendChild(upSimbol);

    const down = document.createElement('p');
    down.classList.add('down');
    crearCarta.appendChild(down);

    const downNumber = document.createElement('span');
    downNumber.classList.add('down__number');
    down.appendChild(downNumber);

    const downSimbol = document.createElement('span');
    downSimbol.classList.add('down__simbol');
    down.appendChild(downSimbol);

    const cuadrado = document.createElement('span');
    cuadrado.classList.add('cuadrado');
    crearCarta.appendChild(cuadrado);

    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];

    if (singleCard === '♥' || singleCard === '♦') {

        console.log(singleCard);
        up.classList.add('cardsred');
        down.classList.add('cardsred');
        cuadrado.classList.add('red');

    } else {

        up.classList.remove('cardsred');
        down.classList.remove('cardsred');
        down.classList.remove('cardsred');
        cuadrado.classList.add('black');
        cuadrado.classList.remove('red');
    }
    switch (singleNumber) {
        case 'J':
            cuadrado.classList.add('j');
            break;
        case 'Q':
            cuadrado.classList.add('q');
            break;
        case 'K':
            cuadrado.classList.add('k');
            break;
    };

    upNumber.innerHTML = `${singleNumber}`;
    upSimbol.innerHTML = `${singleCard}`;
    downNumber.innerHTML = `${singleNumber}`;
    downSimbol.innerHTML = `${singleCard}`;

};
