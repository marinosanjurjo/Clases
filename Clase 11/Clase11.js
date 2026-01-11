'use strict'

console.log('Cargado');

// Cuando clico en el botón
// -> Evento -> Seleccionar el botón

let nodoBoton = document.querySelector('#miBoton');

const nodoPopUp = document.querySelector('#popup');

nodoBoton.addEventListener('click', function(){
    console.log('Click en abrir pop up');
    // Añado una clase "activo"
    nodoPopUp.classList.add('activo', 'animacionAbrir');

    // Al elemento #popup
})


let nodoBtnClose = document.querySelector('#btnClose');

nodoBtnClose.addEventListener('click', function(){

    // Quitar la clase animacionAbrir

    // Poner la animación de Cerrar

    // Esperar un poco -> 1seg
    
    // Quitar la clase activa

    const refTime = setTimeout( function(){
        // Se ejecuta después de esperar 2 seg

        nodoPopUp.classList.remove('activo');
        // SE EJECUTA SOLO UNA VEZ  
    }, 2000); // El tiempo que tiene que pasar para ejecutarse en mseg

    
});


//const refInterval = setInterval(function(){
//   console.log('Ejecuto')
//}, 1000);

const refInterval = setInterval (saludar, 1000);

// clearInterval (refInterval)

function saludar (){
    console.log('Hola');
};

let persona = 'Luis';
saludar(persona, 'J');

for (let i=0; i<100; i++){
    console.log(i);
}