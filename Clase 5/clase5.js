'use strict'


let emailsEnviados = 0;


function enviarEmail(destinatario, asunto, mensaje){
    emailsEnviados++;
    /**
     * 
     * 
     * 
     * 
     */
}

enviarEmail()

let edad_usuario = 10;
/**
 * 
 * Cuando tenemos una variable de rango con varias interacciones
 * Cuando tengo muchas condiciones complejas con varias interacciones
 * 
 */

if (edad_usuario < 2){

}else if(edad_usuario < 12){

}else if (edad_usuario < 16){

}else{

}


// DIA de hoy

const hoy = new Date();
const dia = hoy.getDay(); // Día de la semana
/**
 * 0 -> Domingo
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 */
console.log(hoy);
console.log(dia);

/**
 * VARIABLES que son DISCRETAS (valores fijos)
 * Y estamos preguntado por IGUALDAD
 * 1 sola variable DISCRETA
 */

let nombreDia = '';

/*if(dia === 0){
    nombreDia = 'Domingo';
}else if (dia === 1){
    nombreDia = 'Lunes';
}else if (dia === 2){
    nombreDia = 'Martes';
}*/

switch( dia ){
    case 0:
        nombreDia = 'Domingo';
        break;
    case 1:
        nombreDia = 'Lunes';
        break;
    case 2:
        nombreDia = 'Martes';
        break;
    case 3:
        nombreDia = 'Miércoles';
        break;
    case 4:
        nombreDia = 'Jueves';
        break;

    
    
    default:
        nombreDia = 'Error';
}

console.log(nombreDia)

let color = 'Rojo' // azul, verde, marron, negro, blanco


/**
 * Da a cada persona un equipo dado
 * @param {string} color 
 * @returns {string}
 */
function getTeam(color){
    let equipo = '';
    switch (color){
        case 'rojo':
        case 'marron':
            equipo = 'aguilas';
            break;

        case 'azul':
        case 'blanco':
            equipo = 'delfines';
            break;

        default:
            equipo = 'tigres';
    }

    return equipo;
}

function saluda (persona, apellido1, apellido2){
    console.log('Hola ' + persona + ' ' + apellido1);
    return 'Hola';

}

// equivalente a función de arriba
const otraFuncion = function(){

}

let primerNino = getTeam( 'azul');

console.log('Equipos');
console.log(primerNino);

let segundoNino = getTeam('verde');

console.log('Equipos');
console.log(segundoNino);

// ARROW FUNCTION

/**
 * 
 * @param {*} nombre 
 * @param {*} apellido 
 */
const otroSaludo = (nombre, apellido) => {
    console.log('Saludo otra vez a ' + nombre + ' ' + apellido);
}

otroSaludo('Pepe' , 'Gomez');


// FOR -> Listas

// NUMERO DETERMINADO DE VECES
for ( let i = 0; i<10 ; i++ ){
    //i=0;
    console.log('Hola: ', i);
    otroSaludo('Pepe', 'Gómez');
}

console.clear();

//console.log(listaCompra);

//console.warn('Warning!');

//console.error('Se ha roto');

//console.log('%c Texto en rojo', 'color:red');

// Listas
let listaCompra = ['Tomates', 'Platanos', 'Yogures', 'Papel', 'Salmón'];
console.log(listaCompra);
console.log(typeof(listaCompra));

// PRIMER elemento
console.log(listaCompra[0]);
console.log(listaCompra[1]);
console.log(listaCompra[2]);

// TAMAÑO -> length
const sizeListaCompra = listaCompra.length;
console.log('Número de elementos: ', sizeListaCompra);


listaCompra[1] = 'Mandarinas';

// Todos los arrays tienen HERRAMIENTAS por ser arrays.
// Van a modificar el objeto o me van a permitir "hacer algo"
listaCompra.push('Lentejas');

console.log(listaCompra);

console.log(listaCompra.includes('Papel'));


// RECORRER UNA LISTA

for(let x=0; x< listaCompra.length; x++){
    console.log(listaCompra[x]);
}

const nodoMiListaCompra = document.querySelector('#miListaCompra');

// nodoMiListaCompra.innerHTML = '<li class="item" > Fruta1 </li>;


for(let x=0; x< listaCompra.length; x++){
    console.log(listaCompra[x]);
    nodoMiListaCompra.innerHTML = nodoMiListaCompra.innerHTML + '<li class="item">' + listaCompra[x] + '</li>';
}