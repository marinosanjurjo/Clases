'use strict'


function botonpulsado(){
    const number1 = document.querySelector('#number');
    const n = Number(number1.value);
    console.log('Número');
    console.log(n);

    const nodoResultado = document.querySelector('#resultado');

    resultado.classList.remove ('verde', 'amarillo', 'rojo', 'azul');

    const resto = n % 2;
    console.log('resto');
    console.log(resto);

    const m3 = n % 3;
    console.log('multiplo');
    console.log(m3);

    if(number1.value === ""){
        resultado.innerHTML = 'No hay número introducido';
        resultado.classList.add ('rojo');
        return;
    }

    if(resto === 1){
        console.log('Impar')
        resultado.innerHTML = 'El ' + number1.value + ' es IMPAR';
        resultado.classList.add ('azul');
    }else{
        if(n === 0){
            console.log('Es cero')
            resultado.innerHTML = '¡¡ES CERO!!';
            resultado.classList.add ('amarillo');
            return;
        }else{
            console.log('Par');
            resultado.innerHTML = 'El ' + number1.value + ' es PAR';
            resultado.classList.add ('verde');
        }
    }

    if(m3 === 0){
        console.log('Múltiplo 3');
        multiplo.innerHTML = resultado.innerHTML + 'y múltiplo de 3';
    }else{
        console.log('No multiplo 3');
        multiplo.innerHTML = resultado.innerHTML + 'y no es múltiplo de 3';
    }
}

/**
 * Le pase un número
 * y me diga es par o impar
 * DEVUELVE: TRUE / FALSE
 */

function isPar (numero_parametro){
    const resto = numero_parametro % 2;
    if ( resto === 0){
        console.log('TRUE');
        return true; // La salida de la función
    }else{
        console.log('FALSE');
        return false; // La salida de la función
    }
}

function isMultiplo3 (numero_parametro){
    const resto = numero_parametro % 3;
    if ( resto === 0){
        console.log('TRUE');
        return true; // La salida de la función
    }else{
        console.log('FALSE');
        return false; // La salida de la función
    }
}

function saluda (persona){
    console.log('Hola ' + persona);
}

saluda ('Marino');
saluda ('Silvia');
saluda ('Marta');