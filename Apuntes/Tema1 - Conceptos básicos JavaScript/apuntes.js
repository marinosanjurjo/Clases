'use strict'

// 1.3. Funciones de salida

// console.log

console.log(2+3);

// innerHTML

document.querySelector('#salida').innerHTML = 'Hola mundo';

// document.write()

document.write(2+3);

// window.alert()

// window.alert(2+3);

// 1.5. Tipo de datos

/**
 * Cadenas de texto (string)
 * Números
 * Booleano
 * Array
 * Objetos
 * Indefinido (undefined)
 */

const string = "Hola mundo!";
console.log('String', string);
const number = 3;
console.log('Número', number);
const boolean = true;
console.log('Boolean', boolean);
const array = [1, 2, 3];
console.log('Array', array);
const object = {
    name: "Gerardo",
    lastname: "Fernández"
};
console.log('Object', object);
let indefinido;
console.log('Undefined', indefinido);

typeof "Hola mundo!"; // Devuelve 'string'

// 1.6. Variables

let a; // Declaración de variable
a = 3; // Asignación de valor en variable
console.log(a); // la consola mostrará: 3
a = 2; // Reasignación de valor en variable
console.log(a); // la consola mostrará: 2

const pi = 3.14;
// pi = 33; // Esta sentencia dará un error ya que no puede reasignarse una variable declarada utilizando

// 1.7. Operadores

/** Operadores aritméticos:
 * Suma: +
 * Resta: -
 * Multiplicación: *
 * División: /
 * Resto: %
 */

const d = 3;
const e = 2;
let result;
result = d + e;
console.log(result); // 5
result = result - d;
console.log(result); // 2
result = result * e;
console.log(result); // 4
result = result / e;
console.log(result); // 2

/** Operadores de comparación
 * == igual.
 * === igual estricto (compara tipo de la variable).
 * != distinto.
 * !== distinto estricto (compara tipo de la variable).
 * > mayor que.
 * < menor que.
 * >= mayor o igual.
 * <= menor o igual.
 */

const a1 = 3;
const b1 = 100;
console.log(a1 == b1); // false
console.log(a1 != b1); // true
console.log(a1 > b1); // false
console.log(a1 < b1); // true
const c1 = 3;
const d1 = "3"; // Tipo cadena de texto, no número
console.log(a1 == c1); // true
console.log(a1 === c1); // true
console.log(a1 == d1); // true
console.log(a1 === d1); // false

/** Operadores lógicos
 * Operador lógico and: &&
 * Operador lógico or: ||
 * Operador lógico not: !
 */

console.clear()

const a2 = true;
const b2 = false;
const c2 = true;
console.log(a2 && b2); // false
console.log(a2 || b2); // true
console.log(!c2); // false

/** Operadores de asignación
 * =: Asignación simple: x = 3.
 * +=: Asignación de suma: x += 3 es lo mismo que: x = x + 3.
 * -=: Asignación de resta: x -=3 es lo mismo que: x = x - 3.
 */

/** Operadores de cadena
 * 
 */

const hello = "Hola";
const world = "Mundo";
const greeting = hello + " " + world + "!";
console.log(greeting); // "Hola Mundo!"
const anumber = 3;
const helloNanumber = hello + anumber;
console.log(helloNanumber); // "Hola3
