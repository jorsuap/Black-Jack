"use strict";

const container = document.querySelector('.container');
const continerBoot = document.querySelector('.continerBoot');
const play = document.querySelector('#play');
const text__count = document.querySelector('.text__count');
const countBoot = document.querySelector('.text__count-boot');
const plantarse = document.querySelector('.plantarse');
const perdirCarta = document.querySelector('.carta');
const mesa = document.querySelector('.card');
const youWin = document.querySelector('.win');
// const jb = document.querySelector('.jb');


//Arreglos con las posibilidades de cartas
let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; //'2', '3', '4', '5', '6', '7', '8', '9', '10', 
let cartas = [];
let cartasUser = [];
let cartasBoot = [];

let money = 1000;

let contadorUser = 0;
let contadorBoot = 0;

let cartaTapada;
play.disabled = false;
perdirCarta.disabled = false;
plantarse.disabled = false;

perdirCarta.addEventListener('click', turnoUser);

play.addEventListener('click', () => {
    inicarJuego();
    turnoUser();
});

plantarse.addEventListener('click', () => {
    turnoBoot();
    play.disabled = false;
    perdirCarta.disabled = true;
    plantarse.disabled = true;

});

let singleCard;
let singleNumber;
let carta;
let existe;
let conterUser = 2;
let conterBoot = 2;


function inicarJuego() {

    cartas = [];
    cartasUser = [];
    cartasBoot = [];
    contadorUser = 0;
    contadorBoot = 0;
    conterUser = 2;
    conterBoot = 2;
    youWin.style.visibility = 'hidden';
    while (continerBoot.firstChild) {
        continerBoot.removeChild(continerBoot.firstChild);
    };

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    repartirCarta(carta);
    cartasBoot.push(carta);
    crearCarta();
    conterBoot = 1;

    cartaTapada = document.createElement('div');
    cartaTapada.classList.add('cartatapada');
    continerBoot.appendChild(cartaTapada);
    play.disabled = true;
    perdirCarta.disabled = false;
    plantarse.disabled = false;

}

function repartirCarta() {
    //metodo random para las cartas y la pinta


    singleCard = cards[Math.floor(Math.random() * cards.length)];
    singleNumber = numbers[Math.floor(Math.random() * numbers.length)];

    carta = singleNumber + singleCard;

    existe = cartas.some(() => cartas.includes(carta));

    //Estructura para comprobar que no se repitan cartas

    if (existe) {
        do {
            singleCard = cards[Math.floor(Math.random() * cards.length)];
            singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
            carta = singleNumber + singleCard;
            existe = cartas.some(() => cartas.includes(carta));
        } while (existe);
        cartas.push(carta);
    } else {
        cartas.push(carta);
    }
    return carta;

}

//Funcion para crear cartas aleatorias
function turnoUser() {

    for (let i = 0; i < conterUser; i++) {

        repartirCarta(carta);
        cartasUser.push(carta);

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
        text__count.textContent = contadorUser;
        ases();
        count();

    }
    if (cartasUser.length === 2) {
        blackJack();
    }
    conterUser = 1;
};


///-----------------Funcion para darle cartas al Boot-----------------------------------


function turnoBoot() {

    cartaTapada.classList.remove('cartatapada');

    if (contadorUser > 21) {
        repartirCarta(carta);
        cartasBoot.push(carta);
        crearCarta();

    } else if (contadorUser <= 21) {
        do {
            repartirCarta(carta);
            cartasBoot.push(carta);
            crearCarta();
        } while (contadorBoot < contadorUser && contadorBoot < 21);

    } else if (contadorUser === 21) {
        repartirCarta(carta);
        cartasBoot.push(carta);
        crearCarta();
    }
    quienGana();
    ases();
};

function crearCarta() {

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



function count() {
    if (contadorUser > 21) {
        ases();
        turnoBoot();
    }
};
//'♥', '♣', '♦', '♠'
function ases() {

    // cartasUser.forEach(assss => {
    //     let asesU = assss.includes('A');
    //     if (asesU) {
    //         console.log(cartasUser);
    //     }
    // });



    // if (asesU && contadorUser > 21) {
    //     contadorUser -= 10;
    //     text__count.textContent = contadorUser;
    // }

    // let asesB = cartasBoot.some(() => carta.includes('A'));

    // if (asesB && contadorBoot > 21) {
    //     contadorBoot -= 10;
    //     countBoot.textContent = contadorBoot;
    //     console.log(contadorBoot);
    // }

}

function quienGana() {

    if (contadorUser > contadorBoot && contadorUser <= 21) {
        console.log('Ganaste!');
        youWin.style.visibility = 'visible';
        youWin.textContent = 'GANASTE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;
    } else if (contadorUser <= 21 && contadorBoot > 21) {
        console.log('Ganaste!');
        youWin.style.visibility = 'visible';
        youWin.textContent = 'GANASTE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;
    } else if (contadorUser < contadorBoot && contadorBoot <= 21) {
        console.log('Perdiste!');
        youWin.style.visibility = 'visible';
        youWin.textContent = 'PERDISTE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;
        blackJack();
    } else if (contadorUser > 21 && contadorBoot <= 21) {
        console.log('Perdiste!');
        youWin.style.visibility = 'visible';
        youWin.textContent = 'PERDISTE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;
    } else if (contadorUser === contadorBoot && contadorUser <= 21) {
        console.log('Empate');
        youWin.style.visibility = 'visible';
        youWin.textContent = 'EMPATE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;

    }
    // blackJack();
};

function blackJack() {

    cartasBoot.forEach(As => {
        let existeAS = As.includes('A');
        if (existeAS && contadorBoot === 21) {
            const jb = document.createElement('span');
            jb.classList.add('jb');
            continerBoot.appendChild(jb);
            youWin.style.visibility = 'visible';
            play.disabled = false;
            perdirCarta.disabled = true;
            plantarse.disabled = true;
            youWin.style.visibility = 'visible';
            youWin.textContent = 'PERDISTE';
        }
    });

    cartasUser.forEach(As => {
        let existeAS = As.includes('A');
        if (existeAS && contadorUser === 21) {
            console.log('Black Jack');
            const jb = document.createElement('span');
            jb.classList.add('jb');
            container.appendChild(jb);
            youWin.style.visibility = 'visible';
            youWin.textContent = 'GANASTE';
            play.disabled = false;
            perdirCarta.disabled = true;
            plantarse.disabled = true;
            turnoBoot();

            cartasBoot.forEach(As => {
                let existeAS = As.includes('A');
                if (existeAS && contadorBoot === 21) {
                    const jb = document.createElement('span');
                    jb.classList.add('jb');
                    continerBoot.appendChild(jb);
                    play.disabled = false;
                    perdirCarta.disabled = true;
                    plantarse.disabled = true;
                    youWin.style.visibility = 'visible';
                    youWin.textContent = 'EMPATE';
                }
            });

        }
    });



}