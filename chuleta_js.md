# JAVASCRIPT


HTML -> Lenguaje de marcado

JS -> Lenguaje de programación. Hacer que el código vaya por un lugar u otro, dependiendo de lo que se indique.

JS -> Lenguaje de tipo blando

Programa es un conjunto de sentencias que realizan tareas en un ordenador.

Las sentencias se ejecutan en el orden en el que han sido definidas.

Su ejecución provocan cambios en el estado interno o externo del ordenador.

Realizados mediante un lenguaje que expresa un algoritmo con precisión.

Es un elemento bloqueante, la carga y ejecución de JavaScript para la construcción de la web. Hay opciones para ver como funciona la carga:

    <script async src="script.js"></script> -> el tiempo de espera es solo la ejecución del JavaScript

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

## Pintar en la web

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

## For
Un trozo de código que se repite un número **DETERMINADO** de veces
1. Primera versión de for

````js
for(let i = 0; i<10; i++){
    console.log('Hola', i);
}
````