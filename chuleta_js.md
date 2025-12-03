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