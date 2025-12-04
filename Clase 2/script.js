'use strict'

console.log('archivo cargado');

//STRING
let curso = 'JavaScript';

curso = curso + '!!!!';

console.log(curso)


//NUMBER
let edad = 19;

// BOOLEAN
let esMayor = true;

//Definición de la función
function escribePorConsola (){
    console.log('Hola mundo!');
}

//Ejecutar la función
escribePorConsola();


// IF ELSE

if(edad > 18){
    console.log('Eres mayor de edad');
}else{
    console.log('Eres un niño');
}

// === => ¿Es igual? SIEMPRE -> BOOLEAN
// if (BOOLEAN SIEMPRE)

if(curso === 'HTML'){
    
}else{
    // NO curso === 'HTML'
    // curso != 'HTML
}

// BOOLEAN
const esMayorEdad = false;

if(esMayorEdad){
    // (TRUE)
}

if(!esMayorEdad){

}


// BUCLE: Un trozo de código que se repite un número DETERMINADO de veces
// for (inicialización; condición de salida; actualización)

for(let i = 0; i<10; i++){
    console.log('Hola', i);
}

// Operador++
// variable = variable + 1;
let likes = 0;

likes = likes + 1;

likes++;

let frutas = ['Tomate','Platano','Fresa']


let asteriscos = '';

for(let c = 0; c<10; c++){
    asteriscos = asteriscos + '* ';
}

console.log(asteriscos)

//let entradaDeDatos = prompt('Introduce tu nombre');

//console.log('entradaDeDatos');
//console.log(entradaDeDatos);

//let aceptacion = confirm('¿Quieres salir de la página?')


// STRING
//let years = prompt ('¿Cuántos años tienes?');

//console.log('años', typeof(years));

// STRING + NUMBER -> STRING
// "10" + "1" -> "101"
//years = years + 1;

//console.log(years);

// SELECCIONAR contenedor_main
// identificador -> VARIABLE con ese nombre

console.log(contenedor_main);

// La MEJOR opción para seleccionar SOLO un elemento
let nodoContenidoMain = document.querySelector('#contenedor_main');

let nodoVerde =  document.querySelector('.verde');
console.log(nodoVerde)

// PINTO en la web

//contenedor_main.innerHTML = '<h1 class="destacado">Nuevo código añadido por JS</h1>';
contenedor_main.innerHTML = contenedor_main.innerHTML + '<h1 class="destacado">Nuevo código añadido por JS</h1>'

let muchoTexto = 'AAA';


// Estas dos líneas son EQUIVALENTES
muchoTexto = muchoTexto + 'BBBB';
muchoTexto += 'BBBB';


// Quiero Click en el botón

// - Seleccionar el contenedor emojis -> es único
// Quiero pintar en emojis // nodo para seleccionar algo en la web //innerHTML para pintar en la web

function pintarEnEmojis(){
    console.log('Evento creado');
    const nodoEmojis = document.querySelector('#emojis');
    console.log(nodoEmojis);
    nodoEmojis.innerHTML += '😍';
}


// VARIABLES

// El tipo de dato es definido por el valor
let miEdad = 17;

let cumple = "1";

/* OPERADORES
- Asignación =

- Comparación
    - Devuelve un BOOLEAN
    >=
    <=
    ==  -> NO USAR
    === -> RECOMENDADO
    !=
    !== -> RECOMENDADO

- Lógicos:
    AND -> &&
    OR  -> ||
    NO  -> !

    DEVUELVEN SIEMPRE BOOLEAN

*/

if(miEdad === 18){
    console.log("Edad dentro del if");
    console.log(miEdad);
}

let proyectoPresentado = false;
let notaAlumno = 6;

if ( notaAlumno<5 || proyectoPresentado === false){
    //SUSPENDE
    console.log("Recuperación");
}else{
    console.log("Graduado");
}
