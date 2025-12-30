'use strict' //Nos permite detectar errores más fácil
/**
 * JAVA -> Lenguaje de back
 * JAVA != JavaScript
 * JavaScript
 * 
 * 
 * 
 * 
 * 
 */


console.log('Archivo cargado desde fuera');


/**ALMACEN PARA CUALQUIER COSA */

let cajasAlmacen;

cajasAlmacen = 190;
cajasAlmacen = 200; // NUMBER

console.log('cajasAlmacen');
console.log(cajasAlmacen);

//STRING
let nombre = 'Marino';

console.log('nombre');
console.log( nombre );

let otroNumero = '900';

console.log('otroNumero')
console.log(otroNumero);

// BOOLEAN

let puedePasar = false;

console.log('puedePasar', puedePasar);

// ARRAYS

const frutas = ['Tomate', 'Pera','Platano','Fresa',9];

console.log(frutas);

// OBJETO

const persona = {
    nombre:'Marino', // atributo
    apellido:'Sanjurjo',
    edad:28
}

console.log('persona') //se pone dos veces el console.log porque este muestra el nombre de la variable y el de abajo el valor
console.log(persona)

// LET

let dinero = 0;

dinero = 100;

dinero = dinero + 2000;

//debugger; //PUNTO DE RUPTURA

dinero = dinero - 60;


const pi = 3.141592;

//pi = 4; dará error porque no se puede variar

//var noRecomendado = 'No lo usamos'; //se utilizaba como let

//trozo de código al que ponemos un nombre

function escribePorConsola(){
    console.log('Boton clicado');
}


// EJECUTAR

escribePorConsola();


const apellido = 'Sanjurjo';

const nombreTotal = nombre + ' ' + apellido;

console.log(nombreTotal);

//console.clear(); //Limpiar código en consola


let edad = 21;

let esMayorDeEdad = edad>=18; //operadores lógicos (BOOLEAN)

console.log('esMayorDeEdad');
console.log(esMayorDeEdad);

if( edad >= 18 ){
    console.log('ERES MAYOR DE EDAD');
}else{
    console.log('Eres un niño');
}

console.log('tipo de dato', typeof (cajasAlmacen));
console.log('tipo de dato', typeof (nombre));
console.log('tipo de dato', typeof (esMayorDeEdad));
console.log('tipo de dato', typeof (persona));

