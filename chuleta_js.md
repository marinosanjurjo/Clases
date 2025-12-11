# JAVASCRIPT


HTML -> Lenguaje de marcado

JS -> Lenguaje de programación. Hacer que el código vaya por un lugar u otro, dependiendo de lo que se indique.

JS -> Lenguaje de tipo blando


Variables JS:
- Sensibles a mayúsculas.
- Deben empezar por letra, _ o $
- Definición con let (cuando varía la variable) o const (cuando la variable no varía)
- Inicialización de variables

Tipos de datos:
- Número
- String
- Boolean
- Arrays
- Objeto

Botón ejemplo clase 1:
function (escribe una funcion) + nombre que le quiera dar (){
    
}


```js
console.log("Hola mundo")
````

ctrl + click + flechas arriba abajo, escribir en varias líneas

## Operadores lógicos

### NEGACION (!)

| variable | !variable1 |
|----------|------------|
| TRUE | FALSE |
| FALSE | TRUE |

### AND ( && )

| condicion1 | condicion2 | condicion1 AND condicion2
|----------|------------|-------------|
| TRUE | TRUE | TRUE
| TRUE | FALSE | FALSE
| FALSE | TRUE | FALSE
| FALSE | FALSE | FALSE 

### OR ( || )

| condicion1 | condicion2 | condicion1 OR condicion2
|----------|------------|-------------|
| TRUE | TRUE | TRUE
| TRUE | FALSE | TRUE
| FALSE | TRUE | TRUE 
| FALSE | FALSE | FALSE 

## Seleccionar NODOS HTML
### 1. Usar un identificador
Todos los identificadores UNICOS generan una variable en JS con el mismo nombre.

````html
<div id="contenedor_main">
        <h2> Hola cabecera </h2>
    </div>
````

````js
console.log(contenedor_main);
````

### 2. Usar querySelector y querySelectorAll ( RECOMENDADO )

````js
// La MEJOR opción para seleccionar SOLO un elemento
let nodoContenidoMain = document.querySelector('#contenedor_main');

//Cuando queremos seleccionar más de uno
let nodoVerde =  document.querySelectorAll('.verde');
````

## Pintar en la web

Primero seleccionar un nodo

SUSTITUYE todo lo que hay
````js
contenedor_main.innerHTML = 'Nuevo código añadido por JS';
````

Para mantener contenido
````js
contenedor_main.innerHTML = contenedor_main.innerHTML + '<h1 class="destacado">Nuevo código añadido por JS</h1>'
````

## Eventos

### 1. Atributo dentro de HTML

Uso un atributo de evento y tengo el nombre de la función con ()

````html
<button onclick="escribePorConsola()"> !Click me! </button>
````

````js
function escribePorConsola(){
    console.log('Boton clicado');
}
````

## Añadir y quitar clases

````js
    const nodoCuadrado = document.querySelector('#miCuadrado')
    console.log(nodoCuadrado)

    // Añadir una clase a cualquier NODO HTML INDIVIDUAL

    nodoCuadrado.classList.add('rotando')
````
## IF

````js
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
````

## For
Un trozo de código que se repite un número **DETERMINADO** de veces
1. Primera versión de for

````js
for(let i = 0; i<10; i++){
    console.log('Hola', i);
}
````

## Acceder a valores de input

````js
    const number1 = document.querySelector('#number');
    const n = number1.value; // STRING
    // const n = Number(number1.value); // Convertir en NUMERO
    // console.log(number1.valueAsNumber); // Convertir en NUMERO
    console.log('Número');
    console.log(n);
````


## Funciones

Trozo de código que tiene un 

Aislar funcionalidad y dar "responsabilidad" a cada trozo de módulo

Sólo hagan una cosa

Una función DEBE verse en menos de una pantalla

CREAN un contexto nuevo -> Lo veremos más adelante

````js

//Pintar en la web
// Modifica el sistema
function saluda(nombre, apellido){
    nodoPrincipal.innerHTML = 'Hola ' + nombre + ' ' + apellido + '!!';
}

//Parámetros
saluda('Luis', 'J');
saluda('María', 'G');

// Devolver TRUE o FALSE
function isPar(numero_parametro){
    const resto = numero_parametro % 2;
    console.log ('entrada', numero_parametro);
    if (resto === 0){
        console.log('TRUE');
        return true; // la salida de la función
    }else{
        console.log('FALSE');
        return false; // la salida de la función
    }
}
````

### Arrow functions

Necesitan SER DEFINIDAS ANTES de ejecutarse

No crean nuevos contextos, acceden al contexto SUPERIOR

````js
// ARROW FUNCTION

const otroSaludo = (nombre, apellido) => {
    console.log('Saludo otra vez a ' + nombre + ' ' + apellido);
}

````