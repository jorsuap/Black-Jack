"use strict";

//Constantes para manipular el DOM
const container = document.querySelector('.container');
const continerBoot = document.querySelector('.continerBoot');
const play = document.querySelector('#play');
const replay = document.querySelector('.replay');
const text__count = document.querySelector('.text__count');
const countBoot = document.querySelector('.text__count-boot');
const plantarse = document.querySelector('.plantarse');
const perdirCarta = document.querySelector('.carta');
const mesa = document.querySelector('.card');
const youWin = document.querySelector('.win');
const panelApuesta = document.querySelector('.apuesta');
const mymoney = document.querySelector('.mymoney');
const venticinco = document.querySelector('.veinticinco');
const cincuenta = document.querySelector('.cincuenta');
const cien = document.querySelector('.cien');
const totalApuesta = document.querySelector('.total_apuesta');
const restaurarCapital = document.querySelector('.restaurarCapital');
const soudrepartir = document.querySelector('.soudrepartir');
const soundbarajar = document.querySelector('.soundbarajar');

//Declaracio e inicializacion de variables

let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A',  '10', 'J', 'Q', 'K']; //'2', '3', '4', '5', '6', '7', '8', '9',
let cartas = [];
let cartasUser = [];
let asuser = [];
let cartasBoot = [];
let asboot = [];
let money = 1000;
let apuesta = 0;
let contadorUser = 0;
let contadorBoot = 0;
let singleCard;
let singleNumber;
let carta;
let existe;
let conterUser = 2;
let conterBoot = 2;
let cartaTapada;

mymoney.textContent = money;

//se desabilitan los botones no necesarios
play.disabled = false;
perdirCarta.disabled = true;
plantarse.disabled = true;

replay.classList.add('hiden'); //esconder boton replay

perdirCarta.addEventListener('click', turnoUser); //boton pedir carta llama funion turnoUser()

play.addEventListener('click', () => { //boton comenzar a  jugar // llama funciones para repartir cartas
    if (apuesta === 0) {
        preventDefault();
        panelApuesta.classList.remove('hiden');
    } else {
        panelApuesta.classList.add('hiden');
        inicarJuego(); // llama iniciar juego 
        turnoUser(); // llama turno usuario 
    }
});

plantarse.addEventListener('click', () => { // boton plantarse cede turno al boot
    play.classList.add('hiden');
    replay.classList.remove('hiden');
    turnoBoot();
    play.disabled = false;
    perdirCarta.disabled = true;
    plantarse.disabled = true;
});

replay.addEventListener('click', () => { //repley permite junar una nueva ronda reinicialdo algunos valores
    soundbarajar.play();
    recargarPlante();

    apuesta = 0;
    totalApuesta.textContent = apuesta;

    panelApuesta.classList.remove('hiden');
    text__count.style.visibility = 'hidden';
    countBoot.style.visibility = 'hidden';
    youWin.style.visibility = 'hidden';

    while (continerBoot.firstChild) { //borra las cartas de la mesa boot
        continerBoot.removeChild(continerBoot.firstChild);
    };

    while (container.firstChild) { //borra las cartas de la mesa user
        container.removeChild(container.firstChild);
    };
    replay.classList.add('hiden');
    play.classList.remove('hiden');
});

//valores posibles para apostar
venticinco.addEventListener('click', () => {
    if (money >= 25) {
        let apuesta25 = 25;
        apuesta += apuesta25;
        money -= apuesta25;
        mymoney.textContent = money;
        totalApuesta.textContent = apuesta;
    }
});

cincuenta.addEventListener('click', () => {
    if (money >= 50) {
        let apuesta50 = 50;
        apuesta += apuesta50;
        money -= apuesta50;
        mymoney.textContent = money;
        totalApuesta.textContent = apuesta;
    }
});
cien.addEventListener('click', () => {
    if (money >= 100) {
        let apuesta100 = 100;
        apuesta += apuesta100;
        money -= apuesta100;
        mymoney.textContent = money;
        totalApuesta.textContent = apuesta;
    }
});

function inicarJuego() { //Inicia el juego, reinicia varibles, quitar cartas de la mano anterior

    cartas = [];
    cartasUser = [];
    asuser = [];
    cartasBoot = [];
    asboot = [];
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

    // reparte la primera carta del boot 
    repartirCarta(carta);
    cartasBoot.push(carta);
    asboot.push(carta);
    crearCarta();
    conterBoot = 1;

    // setTimeout(function () {
        // crea la carta tapada en el DOM
        cartaTapada = document.createElement('div');
        cartaTapada.classList.add('cartatapada');
        continerBoot.appendChild(cartaTapada);
    // }, 200)
    play.disabled = true;
    perdirCarta.disabled = false;
    plantarse.disabled = false;
}

function repartirCarta() {
    soudrepartir.play();
    //metodo random repartir cartas aleatorias

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


function turnoUser() { // turno de usuario, inicialmente se ejecuta dos veces para dar dos cartas y en cada llamado posterior solo arroja una carta

    for (let i = 0; i < conterUser; i++) {
        

        repartirCarta(carta);
        cartasUser.push(carta);
        asuser.push(carta);

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

        //Damos estilos y cantidad de pintas por carta y valor a cada carta
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
                for (let i = 1; i <= singleNumber; i++) { // dependiente del valor de la carta se crea la cantidad de figuras
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
    }
    if (cartasUser.length === 2) { // evaluamos si saca black jack en las dos primeras cartas
        blackJack();
    }
    ases();
    count();
    conterUser = 1;
};


///-----------------Funcion para darle cartas al Boot-----------------------------------

function turnoBoot() {

    cartaTapada.classList.remove('cartatapada');

    if (contadorUser > 21) { // si el user paso de 21 solo debe sacar una carta cualqueira para ganar
        repartirCarta(carta);
        cartasBoot.push(carta);
        asboot.push(carta);
        crearCarta();

    } else if (contadorUser < 21) { // si el user se planta debe intentar igualar su puntaje o superarlo, lo que ocurra primero
        do {
            repartirCarta(carta);
            cartasBoot.push(carta);
            asboot.push(carta);
            crearCarta();
        } while (contadorBoot <= contadorUser && contadorBoot <= 21);
    } else if (contadorUser === 21) { // si el user saca 21 se evalua si contiene un As y solo dos cartas para determinar si es black jack

        cartasUser.forEach(barajaUser => {
            let asesU = barajaUser.includes('A'); // evalua si tiene As
            if (asesU && cartasUser.length === 2) { // y si tiene solo dos cartas si se cumple el boot solo casa una carta
                repartirCarta(carta);
                cartasBoot.push(carta);
                asboot.push(carta);
                crearCarta();

            } else if (cartasUser.length > 2) { // si saco 21 pero con varias cartas el boot intentara igualarlo
                while (contadorBoot < contadorUser && contadorBoot <= 21) {
                    repartirCarta(carta);
                    cartasBoot.push(carta);
                    asboot.push(carta);
                    crearCarta();

                };
            }
        });
    }
    ases();
    quienGana();
};

function crearCarta() { // funcion para crear las cartas del boot, solo del boot

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
            for (let i = 1; i <= singleNumber; i++) { // dependiendo del valor de la carta se pone la cantidad de figuras
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
    ases();
    countBoot.style.visibility = 'visible';

    //imprimimos los valores de la carta en el DOM

    upNumber.innerHTML = `${singleNumber}`;
    upSimbol.innerHTML = `${singleCard}`;
    downNumber.innerHTML = `${singleNumber}`;
    downSimbol.innerHTML = `${singleCard}`;
    countBoot.textContent = contadorBoot;
}

function count() {
    if (contadorUser > 21) { // esta funcion evalua si el user pasa de 21 puntos para llamar ciertas funciones
        ases();
        turnoBoot();
    }
};

//'♥', '♣', '♦', '♠'
function ases() { // funcion podemos evaluar si tienemos ases 

    asuser.forEach(barajaUser => {
        let asesU = barajaUser.includes('A');

        if (asesU && contadorUser > 21) { //si tiene as y pasa de 21 el valor de as ahora vale 1, sino vale 11

            let unAs = barajaUser;
            contadorUser -= 10;
            text__count.textContent = contadorUser;
            asuser = asuser.filter(cartaU => cartaU != unAs);
        }
    });

    asboot.forEach(barajaBoot => {
        let asesB = barajaBoot.includes('A');

        if (asesB && contadorBoot > 21) { ////si tiene as y pasa de 21 el valor de as ahora vale 1, sino vale 11

            let unAs = barajaBoot;
            contadorBoot -= 10;
            countBoot.textContent = contadorBoot;
            asboot = asboot.filter(cartaB => cartaB != unAs);
        }
    });

}

function quienGana() { // dependiendo de los puntos determinamos quien gana la mano

    if (contadorUser > contadorBoot && contadorUser <= 21) {

        youWin.style.visibility = 'visible';
        youWin.textContent = 'GANASTE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;
        money += apuesta * 2;
        mymoney.textContent = money;

    } else if (contadorUser <= 21 && contadorBoot > 21) {

        youWin.style.visibility = 'visible';
        youWin.textContent = 'GANASTE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;
        money += apuesta * 2;
        mymoney.textContent = money;

    } else if (contadorUser < contadorBoot && contadorBoot <= 21) {

        youWin.style.visibility = 'visible';
        youWin.textContent = 'PERDISTE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;

    } else if (contadorUser > 21 && contadorBoot <= 21) {

        youWin.style.visibility = 'visible';
        youWin.textContent = 'PERDISTE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;
        mymoney.textContent = money;
        replay.classList.remove('hiden');
        play.classList.add('hiden');
    } else if (contadorUser === contadorBoot && contadorUser <= 21) {

        youWin.style.visibility = 'visible';
        youWin.textContent = 'EMPATE';
        play.disabled = false;
        perdirCarta.disabled = true;
        plantarse.disabled = true;
        money += apuesta;
        mymoney.textContent = money;
    };

    replay.classList.remove('hiden');
    blackJack();
};

function blackJack() { // evalua si se gana por black jack para mostrar una experiencia diferente


    if (cartasBoot.length === 2 && cartasUser.length > 2) {

        cartasBoot.forEach(As => {
            let existeAS = As.includes('A');
            if (existeAS && contadorBoot === 21) {
                console.log('primero');
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
    } else if (cartasBoot.length === 2 && cartasUser.length === 2 && contadorBoot > contadorUser) {
        cartasBoot.forEach(As => {
            let existeAS = As.includes('A');
            if (existeAS && contadorBoot === 21) {
                console.log('Ultimo')
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
    } else if (cartasUser.length === 2 && cartasBoot.length < 2) {
        cartasUser.forEach(As => {
            let existeAS = As.includes('A');
            if (existeAS && contadorUser === 21) {
                console.log('segundo');
                const jb = document.createElement('span');
                jb.classList.add('jb');
                container.appendChild(jb);
                youWin.style.visibility = 'visible';
                youWin.textContent = 'GANASTE';
                play.disabled = false;
                perdirCarta.disabled = true;
                plantarse.disabled = true;
                mymoney.textContent = money;
                replay.classList.remove('hiden');
                play.classList.add('hiden');
                money += 25;
                mymoney.textContent = money;
                turnoBoot();

                cartasBoot.forEach(As => {
                    let existeAS = As.includes('A');
                    if (existeAS && contadorBoot === 21) {
                        console.log('tercero');
                        const jb = document.createElement('span');
                        jb.classList.add('jb');
                        continerBoot.appendChild(jb);
                        play.disabled = false;
                        perdirCarta.disabled = true;
                        plantarse.disabled = true;
                        youWin.style.visibility = 'visible';
                        youWin.textContent = 'EMPATE';
                        money -= 25;
                        mymoney.textContent = money;
                    }
                });
            }
        });

    } else if (cartasUser.length === 2 && cartasBoot.length === 2) {
        cartasUser.forEach(As => {
            let existeAS = As.includes('A');
            if (existeAS && contadorUser === 21) {
                console.log('cuarto');
                const jb = document.createElement('span');
                jb.classList.add('jb');
                container.appendChild(jb);
                youWin.style.visibility = 'visible';
                youWin.textContent = 'GANASTE';
                play.disabled = false;
                perdirCarta.disabled = true;
                plantarse.disabled = true;
                mymoney.textContent = money;
                replay.classList.remove('hiden');
                play.classList.add('hiden');
                money += 25;
                mymoney.textContent = money;

                cartasBoot.forEach(As => {
                    let existeAS = As.includes('A');
                    if (existeAS && contadorBoot === 21) {
                        console.log('quinto');
                        const jb = document.createElement('span');
                        jb.classList.add('jb');
                        continerBoot.appendChild(jb);
                        play.disabled = false;
                        perdirCarta.disabled = true;
                        plantarse.disabled = true;
                        youWin.style.visibility = 'visible';
                        youWin.textContent = 'EMPATE';
                        money -= 25;
                        mymoney.textContent = money;
                    }
                });
            }
        });

    }


}

function recargarPlante() { // si el user pierde su capital puede reiniciarlo
    if (money === 0) {
        restaurarCapital.style.display = 'block';
        restaurarCapital.addEventListener('click', () => {
            money = 1000;
            mymoney.textContent = money;
            restaurarCapital.style.display = 'none';
        });
    }
};