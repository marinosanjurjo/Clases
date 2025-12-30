'use strict'

function calcular(){
    const nodoRadio = document.querySelector('#entradaRadio');
    // const radio = nodoRadio.value; // STRING
    const radio = nodoRadio.valueAsNumber;
    console.log(radio);

    // CALCULOS
    const perimetro = perimetroCirculo(radio);

    // PINTAR
    const nodoPerimetro = document.querySelector('#divPerimetro');
    nodoPerimetro.innerHTML = perimetro + " m";
}

function perimetroCirculo(parametroRadio){
    // Redondea al entero más cercano
    // return Math.round(2 * Math.PI * parametroRadio);

    let resultado = 2 * Math.PI * parametroRadio; //NUMBER
    return resultado.toFixed(4);
}