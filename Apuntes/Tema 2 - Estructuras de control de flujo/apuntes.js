'use strict'

// 2.2. Estructuras de control condicional: if/if-else

// Suponiendo la variable temperatura como temperatura actual
let temperatura = -30;
let mensaje = temperatura + "º";
// Si la temperatura es menor que 0, se añaden unos caracteres haciendo de copo de nieve
if (temperatura < 0) {
mensaje = "***" + mensaje + "***";
}
console.log(mensaje);

// Suponiendo la variable edad declarada con un número que representa la edad de una persona
let edad = 18;
if (edad >= 18) {
console.log("mayor de edad");
} else {
console.log("menor de edad");
}

// Operador ternario

// Todos los bloques siguientes imprimen por pantalla lo mismo
// Utilizando estructura if-else
if (edad >= 18) {
console.log("mayor de edad");
} else {
console.log("menor de edad");
}
// Utilizando operador ternario
(edad >=18) ? console.log("mayor de edad") : console.log("menor de edad");
// Utilizando el operador ternario en una asignación
const mensaje1 = (edad >=18) ? "mayor de edad" : "menor de edad";
console.log(mensaje1);
// Utilizando el operador ternario directamente como parámetro de función
console.log((edad >=18) ? "mayor de edad" : "menor de edad");

// 2.3. Estructura de control condicional: switch

// Convierte una variable donde está el día de la semana en número en la palabra en castellano para ese día
let dia = "";
let diaNumero = 1;
switch (diaNumero) {
    case 0:
        dia = "Lunes";
        break;
    case 1:
        dia = "Martes";
        break;
    case 2:
        dia = "Miércoles";
        break;
    case 3:
        dia = "Jueves";
        break;
    default:
        dia = "Error";
}
console.log(dia);

// 2.4. Estructuras de control iterativas: for/for in/for of

/** For
 * Forma más sencilla de manejar un bucle
 * Funciona utilizando un índice como control, se establece:
 * Punto de inicio - Indice que se va a utilizar.
 * Manera en la que ese indice va a cambiar - Condición para la que el bucle seguirá repitiéndose.
 * Punto de final - Transformación se hace del índice a cada iteración (vuelta del bucle).
 */

// En el siguiente bucle el índice empieza en el 0
// Seguirá repitiéndose mientras el índice sea menor que 10
// A cada vuelta, se sumará 1 al índice (i++ es lo mismo que i = i + 1)
//For para rellenar lista
let i;
for (i = 0; i < 10; i++) {
console.log(i);
}
// Esto mostrará por consola:
// 0123456789
