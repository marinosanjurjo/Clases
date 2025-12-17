'use strict'

/**
 * ******** REPASO ******** 
 * 
 * // Query selector
 * 
 * // Query selector All
 * - Añadir y quitar clases
 * - Correcciones
 * 
 * Listas:
 * - Push
 * - Pop
 * - Find 
 * 
 * -> Objetos
 * 
 * 
 * 
 * Leer 4.3, 4.4, 4.5, 4.6 y tema 5 -> DOM
 */


// Seleccionar elementos del DOM
console.log('Archivo cargado');
const nodoPrincipal = document.querySelector('#principal');
console.log(nodoPrincipal);

nodoPrincipal.innerHTML = '<h2> HOLA MUNDO JS! </h2>'

/*
Cuando CLICK -> EVENTO
    - Pongo todos los cuadrados azules
        - Seleccionar todos los elementos .cuadrado
        - Añadir una clase a todos los elementos cuadrados (A CADA UNO de los cuadrados)
*/

function cambioAzules(){

    const listaNodosCuadrados = document.querySelectorAll('.cuadrado');
    
    console.log(listaNodosCuadrados);

    for( const cadaNodo of listaNodosCuadrados ){
        console.log(cadaNodo);
        // listaNodosCuadrados[0].classList.add('azul')
        cadaNodo.classList.toggle('azul')
    }
    
}


let anchoCuadrados = 100;
function cambioAncho(){

    const listaNodosCuadrados = document.querySelectorAll('.cuadrado');
    
    console.log(listaNodosCuadrados);

    if ( anchoCuadrados < 200 ){
        anchoCuadrados = anchoCuadrados + 10;
    }else{
        anchoCuadrados = anchoCuadrados - 100;
    }

    for( const cadaNodo of listaNodosCuadrados ){
        cadaNodo.style.width = anchoCuadrados+'px';
    }
    
}

/**
 * Cuando definimos un tipo de dato
 * 
 * Va a tener sus HERRAMIENTAS -> Métodos
 * - Number
 *      - Fixed
 * 
 * - Listas
 *      - Push
 * 
 * 
 * 
 */



const frutas = ['Pera', 'Manzana', 'Fresa', 'Platano'];
// Añade elemento
frutas.push('Mandarina');
console.log(frutas);

// Eliminar el último
frutas.pop();
console.log(frutas);

// Da la vuelta al array
frutas.reverse();
console.log(frutas);

/**
 * Los de arriba
 * MUTAN el objeto ORIGINAL  
 */

// Includes -> No muta el original
const isManzana = frutas.includes('Manzana');
console.log(isManzana);

// OBJETO

// let pelicula = 'Jurassic Park';
// let director =  'Steven Spielberg';
// 
// let pelicula_2 = 'Avatar';
// let director_2 = 'James Cameron';

// VARIABLE -> Objeto
const pelicula ={
    // ATRIBUTO es lo mismo que PROPIEDAD
    // ATRIBUTO: VALOR
    titulo: 'Jurassic Park',
    director:{
        nombre: 'Steven',
        apellido: 'Spielberg',
    },
    reparto:[
        'Pepito',
        'Juan'
    ],

}

console.log(pelicula.titulo);
console.log(pelicula.director);
console.log(pelicula.director.nombre);
console.log(pelicula.reparto);

const pelicula_2 ={
    titulo: 'Avatar',
    director: 'Steven Spielberg',
}
console.log(pelicula);
console.log(pelicula_2);


const persona = {
    nombre: 'Marino',
    apellido: 'Sanjurjo',
    saludo: function(){
        // METODO
        // Cuando una función se define como valor de un atributo (dentro de un objeto -> METODO)

    }
}

persona.nombre = 'Pepe';
console.log(persona);

// const lista = {
//    push:
// }