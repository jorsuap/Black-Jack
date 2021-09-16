"use strict";

const container = document.querySelector('.container');

let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


function cartaAleatoria() {

    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];

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
        case 'A':
            cuadrado.classList.add('a')
            cuadrado.innerHTML = `${singleCard}`;
            break;
        case '2':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                cuadrado.classList.add('dosytres');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
        case '3':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                cuadrado.classList.add('dosytres');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
            case '4':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                cuadrado.classList.add('cuatro');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
            case '5':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                if(i===2){
                    span.classList.add('item5');
                }
                cuadrado.classList.add('cinco');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
            case '6':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                cuadrado.classList.add('six');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
            case '7':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                if(i===2){
                    span.classList.add('item7');
                }
                if(i===7){
                    span.classList.add('span7');
                }
                cuadrado.classList.add('seven');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
            case '8':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                if(i===2){
                    span.classList.add('item8');
                }
                if(i===7){
                    span.classList.add('span8');
                }
                cuadrado.classList.add('ocho');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
            case '9':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                if(i===5){
                    span.classList.add('item9');
                }
                cuadrado.classList.add('nine');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
            case '10':
            parseInt(singleNumber);
            console.log(singleNumber);
            for (let i = 1; i <= singleNumber; i++) {
                const span = document.createElement('span');
                if(i===5){
                    span.classList.add('item10');
                }
                if(i===10){
                    span.classList.add('span10');
                }
                cuadrado.classList.add('ten');
                span.innerHTML = `${singleCard}`;
                cuadrado.appendChild(span);
            }
            break;
    };

    upNumber.innerHTML = `${singleNumber}`;
    upSimbol.innerHTML = `${singleCard}`;
    downNumber.innerHTML = `${singleNumber}`;
    downSimbol.innerHTML = `${singleCard}`;
};