'use strict'

// Cuando clico en el botón
// -> Evento -> Seleccionar el botón

let nodoBoton = document.querySelector('#miBoton');

nodoBoton.addEventListener('click', function(){
    
    // Añado una clase "activo"
    let nodoPopUp = document.querySelector('#popup');
    nodoPopUp.classList.add('activo');

    // Al elemento #popup
})

