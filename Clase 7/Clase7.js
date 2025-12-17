'use strict'

/**
 * 
 * *******REPASO*******
 * 
 * 
 * - Variables y tipos de variables
 * - Operadores
 *      + Asignación
 *      + Aritméticos / Matemáticos / Cadena
 *      + Comparadores --> BOOLEAN
 *      + Lógicos --> BOOLEAN
 * -IF / ELSE IF / ELSE
 * 
 * 
 * - FOR
 * 
 *
 * FUNCIONES
 *      + Individual
 *      + Return / No return
 * 
 * 
 * EVENTOS
 *      + Como atributo 
 * 
 * 
 * 
 * 
 * 
 * FINAL DE LA CLASE
 * Leer 4.3, 4.4, 4.5, 4.6 y Tema 5
 */

let edad = 10;

const edad_limite = 18;

let mismaEdad = edad;

console.log(edad);
console.log(mismaEdad);

edad = 17;

console.log(edad);
console.log(mismaEdad);

let nombre = 'Pedro';

let mayorEdad = true;

if (mayorEdad === true || nombre !== "Pedro"){
    // Solo si la condicion se cumple
}else{
    // Si la condicion del if NO SE CUMPLE
}

// Para hacer cualquier cosa de forma repetitiva y de manera determinada
let cadenaTexto = '';

for(let i = 0; i < 100; i++){
    cadenaTexto = cadenaTexto + '*';
}

console.log(cadenaTexto);

// 1 + 2 + 3 + 4 .... + 10

let suma = 0;
for (let i = 0; i < 10; i++){
    suma = suma + i;
}

function calculoDeAreaComplejo( circulos, cuadrados, triangulos){



    let resultado = 900;
    return resultado;
}

const area = calculoDeAreaComplejo(19, 3, 7);

/**
 * 
 * @param {*} genero 
 * @param {*} nombre 
 * @param {*} apellidos 
 * @returns 
 */
function getSaludo (genero, nombre, apellidos){
    // let miVariableLocal = nombre + ' ' + apellidos;
    // let miVariableLocal = `Hola ${nombre} ${apellidos}`;

    let cadenaResultado = 'Hola ';

    if(genero === 'Hombre'){
        cadenaResultado = cadenaResultado + ' señor'
    }else if (gnero === 'Mujer'){
        cadenaResultado = `${cadenaResultado} señora`;
    }else{
        cadenaResultado = `${cadenaResultado} señore`;
    }

    cadenaResultado = `¡¡${cadenaResultado} ${nombre} ${apellidos}!!`;

    return cadenaResultado; // IMPORTANTE, sino no devuelve nada
}

const miSaludo = getSaludo('Hombre', 'Marino', 'Sanjurjo');
console.log('Resultado de MI SALUDO');
console.log(miSaludo);


// LISTA -> propiedad length
let numeros = [19, 7, 1, 5, 120, 21, 9, 7, 2];
console.log(numeros);

let primerElementoLista = numeros [0];
let segundoElementoLista = numeros [1];

for ( let i=0; i < numeros.length; i++){
    console.log('Indice: ' + i + ':', numeros [i])
}

// For in para objetos
for (let cadIndice in numeros){
    console.log("cadIndice", cadIndice);
}

// NECESITO SABER -> Si hay un número mayor que 100;
// NECESITO UN BOOLEAN


// FUNCION PURA
// 
/**
 * 
 * @param {Array<number>} listaNumeros
 * @param {number} limiteMaxArray - Número máximo a buscar
 * @returns {boolean} - Si hay dentro al menos un número mayor
 */
function hayNumeroMayor(listaNumeros, limiteMaxArray){
    // const LIMITE = 100; // Cuando se metan números aleatorios, ponerle un nombre para que un desarrollador futuro entienda el código
    let respuesta = false;

    for (let cadaNumero of listaNumeros){
        console.log(cadaNumero);
        if (cadaNumero > limiteMaxArray){
        respuesta = true;
        // break,¡; // rompe la ejecución y deja de ejecutar la función una vez encuentra el valor, se usa en casos muy concretos y sirve para optimizar
        return respuesta // también rompe la ejecución
        console.log("NO SE EJECUTA NUNCA");
        }
    }
    return respuesta;
}

const hayNumeroMayor_100 = hayNumeroMayor(numeros, 100);
const hayNumeroMayor_300 = hayNumeroMayor([10, 90, -1, 40, 2, 5, 99], 300);

const hoy = new Date();
console.log(hoy);



/**
 * 
 * 
 * @returns number
 */

let numeros_2 = [19, 7, 1, 5, 40, 300, 120, 21, 9, 7, 2];

function numeroMayorDelArray(listaNumeros){
    let maximo = listaNumeros [0];

    for (let cadaNumero of listaNumeros){
        if (cadaNumero > maximo){
            maximo = cadaNumero;
        }
    }
    return maximo;
}

function escribeEnLaWeb(){

    // SELECCIONAR UN NODO HTML
    // const nodoPrincipal = document.querySelector('#principal');
    // nodoPrincipal.innerHTML += '<div> Hola! </div>'

    // SELECCIONAR UN GRUPO -> LISTA
    const listaNodosEscribe = document.querySelectorAll('.escribeAqui');
    console.log(listaNodosEscribe);

    for(let cadaNodoSeleccionado of listaNodosEscribe){
        cadaNodoSeleccionado.innerHTML += `<div> Hola! </div>`
    }
    // listaNodosEscribe[0].innerHTML = `<div> Hola! </div>`
    // listaNodosEscribe[1].innerHTML = `<div> Hola! </div>`
    // nodoEscribe.innerHTML += '<div> Hola! </div>'
}