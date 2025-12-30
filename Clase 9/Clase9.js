'use strict'

/**
 * 
 * REPASO
 * 
 * TIPO DE DATOS
 * - String
 * - Number
 * - Boolean
 * - Array
 * - Object
 * 
 * 
 */

let nombre = 'JavaScript';
// Cadenas de texto -> "Listas de caracteres"

console.log(nombre[0]);
console.log(nombre[1]);
console.log(nombre[2]);
console.log(nombre.length);

let numeroDecimal = 19.80128312576;

let numeroSoloDosDecimales = numeroDecimal.toFixed(2);

console.log(numeroDecimal);
console.log(numeroSoloDosDecimales);


const calculaElArea = function(){

}

function otraFuncion(){

}

const frutas = ['melón'];
console.log(frutas);



const persona_2 = {
    nombre: 'Julia',
    apellido: 'Gomez',
    nacimiento: 1991,
    saludo: function(){
        // Método
        // This -> Yo mismo
        // console.log('Hola ' + persona.nombre);
        console.log('Hola ' + this.nombre);
    }
}

console.log(persona_2);


//JSON
console.log(JSON.stringify(persona_2));

const persona = {
    // ATRIBUTO / PROPIEDADES
    nombre: 'Marino',
    apellido: 'Sanjurjo',
    nacimiento: 1997,
    hermanos:[
        {}
    ],
    saludo: function(){
        // Método
        // This -> Yo mismo
        // console.log('Hola ' + persona.nombre);
        console.log('Hola ' + this.nombre);
        console.log(this);
    }
}


console.log(persona['nombre']);
console.log(persona.nombre);

console.log("------------");
persona.saludo();
persona_2.saludo();

const unaCopiaPersona = persona;


console.log(this);

// Estamos buscando en document -> NODO Principal
const nodoPrincipal = document.querySelector('#principal')

console.log(nodoPrincipal);
console.log(nodoPrincipal.id);
nodoPrincipal.style.color = 'red';

// Si sustituyo DOCUMENT por CUALQUIER NODO HTML para hacer la búsqueda
// const listaNodosCuadrados = document.querySelectorAll('.cuadrado');
const listaNodosCuadrados = nodoPrincipal.querySelectorAll('.cuadrado');

console.log(listaNodosCuadrados);

for (const cadaCuadrado of listaNodosCuadrados){
    cadaCuadrado.classList.add('verde');
}

const nodoMiBoton = document.querySelector('#miBoton');

nodoMiBoton.addEventListener('click', function(){
    alert('Se ha clicado');
});

// Cuando clicke en cada cuadrado
// Cambie de color SOLO EL MISMO -> Estrategia -> Añadir y quitar;

const lista_nodos_cuadrados = document.querySelectorAll('.cuadrado');
console.log(lista_nodos_cuadrados);

for (const cadaCuadrado of lista_nodos_cuadrados){
    cadaCuadrado.addEventListener('click', function(){

        console.log('Click');
        console.log(cadaCuadrado);
        console.log('this');
        console.log(this);
        // cadaCuadrado.classList.toggle('rojo');
        this.classList.toggle('rojo');
    
    })

}

