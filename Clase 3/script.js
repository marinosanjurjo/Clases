'use strict'

console.log('Cargado clase 3');

let noDefinida; // UNDEFINED

console.log(noDefinida);


let nombre = 'Marino';

let edad = 10;

let permitido = false;

let sorteo = ['Pepe', 'Juan', 'María', 'Sara']

let persona = {
    nombre:'David',
    edad: 40
}


// COMPARACIÓN
if (nombre === 'Fran'){

}

// ASIGNACIÓN

// MATEMÁTICOS

let multiplicacion = 6 * 5;
let division = 10/3;

// RESTO
let resto = 15 % 2; // 1
let resto_2 = 10 % 4 // 2

// COMPARACIÓN
/* 
    >
    <
    >=
    <=
    ===
    !==

    SIEMPRE devuelven BOOLEAN
*/

// LÓGICOS
/*
    AND -> &&
    OR -> ||
    Negación -> !
*/




/*let edad_introducida = prompt ('Introduce la edad');
// PROMPT SIEMPRE devuelve un string
let estudia = true;
let trabaja = false;
console.log(edad_introducida);

if ( edad_introducida >= 18 && (estudia === true || trabaja === true )){
    console.log('Eres una persona de provecho');
}else{
    if ( edad_introducida < 18){
        console.log('No pasa nada ¡Espabila!')
    }else{
        // edad >= 18
        console.log ('Eres un despojo social!')
    }
}*/


/*Añadir y quitar clases de un elemento HTML*/

/**QUÉ
 * CUÁNDO
 * DÓNDE
 * 
 * Cuando clicke en el botón
 * 
 * Quiero añadir la clase rotando a
 * - Seleccionar el elemento
 * - Añadir clase 
 * elemento cuadrado
 */

function addClassSquare (){
    console.log('Click en el botón')

    const nodoCuadrado = document.querySelector('#miCuadrado')
    console.log(nodoCuadrado)

    // Añadir una clase a cualquier NODO HTML INDIVIDUAL

    // nodoCuadrado.classList.add('rotando')
    nodoCuadrado.classList.toggle ('rotando')


    // nodoCuadrado.classList.remove()


    // Además coger el valor del input y escribirlo en el cuadrado
    const nodoInputNombre = document.querySelector('#inputNombre');

    // input.value nos da el valor del input
    console.log(nodoInputNombre.value)

    const nombre = nodoInputNombre.value

    nodoCuadrado.innerHTML = nombre;
}
