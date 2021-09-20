"use strict";

const container = document.querySelector('.container');
const continerBoot = document.querySelector('.continerBoot');
const play = document.querySelector('#play');
const text__count = document.querySelector('.text__count');
const countBoot = document.querySelector('.text__count-boot');
const plantarse = document.querySelector('.plantarse');

let contadorUser = 0;
let contadorBoot = 0;

//Arreglos con las posibilidades de cartas
let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let cartas = [];

play.addEventListener('click', turnoUser);
plantarse.addEventListener('click', turnoBoot);

let singleCard;
let singleNumber;
let carta;
let existe;
let conter = 2;

function repartirCarta() {
    //metodo random para las cartas y la pinta


    singleCard = cards[Math.floor(Math.random() * cards.length)];
    singleNumber = numbers[Math.floor(Math.random() * numbers.length)];

    carta = singleCard + singleNumber;

    existe = cartas.some(() => cartas.includes(carta));

    //Estructura para comprobar que no se repitan cartas

    if (existe) {

        console.log('repetido');
        do {
            singleCard = cards[Math.floor(Math.random() * cards.length)];
            singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
            carta = singleCard + singleNumber;
            existe = cartas.some(() => cartas.includes(carta));
        } while (existe);
        cartas.push(carta);
    } else {
        cartas.push(carta);
    }
}

//Funcion para crear cartas aleatorias
function turnoUser() {

    for (let i = 0; i < conter; i++) {

        if (contadorUser <= 21) {

            repartirCarta();

            //Creamos elemntos para crear la carta con sus estilos

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

            //En esta estructura IF damos color rojo a las pinta corazon y diamante

            if (singleCard === '♥' || singleCard === '♦') {

                up.classList.remove('cardsblack');
                down.classList.remove('cardsblack');
                cuadrado.classList.remove('black');

                up.classList.add('cardsred');
                down.classList.add('cardsred');
                cuadrado.classList.add('red');

            } else {

                up.classList.remove('cardsred');
                down.classList.remove('cardsred');
                cuadrado.classList.remove('red');

                up.classList.add('cardsblack');
                down.classList.add('cardsblack');
                cuadrado.classList.add('black');

            }

            //Damos estilos y cantidad de pintas por carta...
            switch (singleNumber) {
                case 'A':
                    cuadrado.classList.add('a')
                    cuadrado.innerHTML = `${singleCard}`;
                    contadorUser += 11;
                    break;
                case 'J':
                    cuadrado.classList.add('j');
                    contadorUser += 10;
                    break;
                case 'Q':
                    cuadrado.classList.add('q');
                    contadorUser += 10;
                    break;
                case 'K':
                    cuadrado.classList.add('k');
                    contadorUser += 10;
                    break;
                case '2':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('dosytres');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 2;
                    break;
                case '3':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('dosytres');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 3;
                    break;
                case '4':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('cuatro');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 4;
                    break;
                case '5':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item5');
                        }
                        cuadrado.classList.add('cinco');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 5;
                    break;
                case '6':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('six');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 6;
                    break;
                case '7':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item7');
                        }
                        if (i === 7) {
                            span.classList.add('span7');
                        }
                        cuadrado.classList.add('seven');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 7;
                    break;
                case '8':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item8');
                        }
                        if (i === 7) {
                            span.classList.add('span8');
                        }
                        cuadrado.classList.add('ocho');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 8;
                    break;
                case '9':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 5) {
                            span.classList.add('item9');
                        }
                        cuadrado.classList.add('nine');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 9;
                    break;
                case '10':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 5) {
                            span.classList.add('item10');
                        }
                        if (i === 10) {
                            span.classList.add('span10');
                        }
                        cuadrado.classList.add('ten');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorUser += 10;
                    break;
            };
            text__count.style.visibility = 'visible';
            //imprimimos los valores de la carta en el DOM

            upNumber.innerHTML = `${singleNumber}`;
            upSimbol.innerHTML = `${singleCard}`;
            downNumber.innerHTML = `${singleNumber}`;
            downSimbol.innerHTML = `${singleCard}`;

            count();
            text__count.textContent = contadorUser;
        } else {
            return;
        }
    }
    conter = 1;
};


///-----------------Funcion para darle cartas al Boot-----------------------------------

function turnoBoot() {
    // play.disabled = true; 

    if(contadorUser>21){
        
        for(let i = 0; i < 2; i++) {
            
            repartirCarta();

            const crearCarta = document.createElement('div');
            crearCarta.classList.add('card');
            continerBoot.appendChild(crearCarta);

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

            //En esta estructura IF damos color rojo a las pinta corazon y diamante

            if (singleCard === '♥' || singleCard === '♦') {

                up.classList.remove('cardsblack');
                down.classList.remove('cardsblack');
                cuadrado.classList.remove('black');

                up.classList.add('cardsred');
                down.classList.add('cardsred');
                cuadrado.classList.add('red');

            } else {

                up.classList.remove('cardsred');
                down.classList.remove('cardsred');
                cuadrado.classList.remove('red');

                up.classList.add('cardsblack');
                down.classList.add('cardsblack');
                cuadrado.classList.add('black');

            }

            //Damos estilos y cantidad de pintas por carta...
            switch (singleNumber) {
                case 'A':
                    cuadrado.classList.add('a')
                    cuadrado.innerHTML = `${singleCard}`;
                    contadorBoot += 11;
                    break;
                case 'J':
                    cuadrado.classList.add('j');
                    contadorBoot += 10;
                    break;
                case 'Q':
                    cuadrado.classList.add('q');
                    contadorBoot += 10;
                    break;
                case 'K':
                    cuadrado.classList.add('k');
                    contadorBoot += 10;
                    break;
                case '2':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('dosytres');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 2;
                    break;
                case '3':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('dosytres');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 3;
                    break;
                case '4':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('cuatro');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 4;
                    break;
                case '5':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item5');
                        }
                        cuadrado.classList.add('cinco');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 5;
                    break;
                case '6':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('six');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 6;
                    break;
                case '7':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item7');
                        }
                        if (i === 7) {
                            span.classList.add('span7');
                        }
                        cuadrado.classList.add('seven');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 7;
                    break;
                case '8':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item8');
                        }
                        if (i === 7) {
                            span.classList.add('span8');
                        }
                        cuadrado.classList.add('ocho');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 8;
                    break;
                case '9':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 5) {
                            span.classList.add('item9');
                        }
                        cuadrado.classList.add('nine');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 9;
                    break;
                case '10':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 5) {
                            span.classList.add('item10');
                        }
                        if (i === 10) {
                            span.classList.add('span10');
                        }
                        cuadrado.classList.add('ten');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 10;
                    break;
            };
            countBoot.style.visibility = 'visible';
            //imprimimos los valores de la carta en el DOM

            upNumber.innerHTML = `${singleNumber}`;
            upSimbol.innerHTML = `${singleCard}`;
            downNumber.innerHTML = `${singleNumber}`;
            downSimbol.innerHTML = `${singleCard}`;


            countBoot.textContent = contadorBoot;
        }
    }else if(contadorUser <= 21) {

        //metodo random para las cartas y la pinta

        //Creamos elemntos para crear la carta con sus estilos
        do{
            
            repartirCarta();

            const crearCarta = document.createElement('div');
            crearCarta.classList.add('card');
            continerBoot.appendChild(crearCarta);

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

            //En esta estructura IF damos color rojo a las pinta corazon y diamante

            if (singleCard === '♥' || singleCard === '♦') {

                up.classList.remove('cardsblack');
                down.classList.remove('cardsblack');
                cuadrado.classList.remove('black');

                up.classList.add('cardsred');
                down.classList.add('cardsred');
                cuadrado.classList.add('red');

            } else {

                up.classList.remove('cardsred');
                down.classList.remove('cardsred');
                cuadrado.classList.remove('red');

                up.classList.add('cardsblack');
                down.classList.add('cardsblack');
                cuadrado.classList.add('black');

            }

            //Damos estilos y cantidad de pintas por carta...
            switch (singleNumber) {
                case 'A':
                    cuadrado.classList.add('a')
                    cuadrado.innerHTML = `${singleCard}`;
                    contadorBoot += 11;
                    break;
                case 'J':
                    cuadrado.classList.add('j');
                    contadorBoot += 10;
                    break;
                case 'Q':
                    cuadrado.classList.add('q');
                    contadorBoot += 10;
                    break;
                case 'K':
                    cuadrado.classList.add('k');
                    contadorBoot += 10;
                    break;
                case '2':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('dosytres');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 2;
                    break;
                case '3':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('dosytres');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 3;
                    break;
                case '4':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('cuatro');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 4;
                    break;
                case '5':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item5');
                        }
                        cuadrado.classList.add('cinco');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 5;
                    break;
                case '6':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        cuadrado.classList.add('six');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 6;
                    break;
                case '7':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item7');
                        }
                        if (i === 7) {
                            span.classList.add('span7');
                        }
                        cuadrado.classList.add('seven');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 7;
                    break;
                case '8':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 2) {
                            span.classList.add('item8');
                        }
                        if (i === 7) {
                            span.classList.add('span8');
                        }
                        cuadrado.classList.add('ocho');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 8;
                    break;
                case '9':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 5) {
                            span.classList.add('item9');
                        }
                        cuadrado.classList.add('nine');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 9;
                    break;
                case '10':
                    parseInt(singleNumber);
                    for (let i = 1; i <= singleNumber; i++) {
                        const span = document.createElement('span');
                        if (i === 5) {
                            span.classList.add('item10');
                        }
                        if (i === 10) {
                            span.classList.add('span10');
                        }
                        cuadrado.classList.add('ten');
                        span.innerHTML = `${singleCard}`;
                        cuadrado.appendChild(span);
                    }
                    contadorBoot += 10;
                    break;
            };
            countBoot.style.visibility = 'visible';
            //imprimimos los valores de la carta en el DOM

            upNumber.innerHTML = `${singleNumber}`;
            upSimbol.innerHTML = `${singleCard}`;
            downNumber.innerHTML = `${singleNumber}`;
            downSimbol.innerHTML = `${singleCard}`;
            countBoot.textContent = contadorBoot;
        }while (contadorBoot < contadorUser && contadorBoot < 21) 
    } else {
        return;
    }
};

function count() {
    if (contadorUser > 21) {
        // alert('Te pasaste');
        turnoBoot();
    }
}