'use strict'



// 1. ¿CUANDO? - Cuando se carga (Ejecución directa)
// 2. ¿DONDE? - En el elemento #gridTablas
let nodoGridTablas = document.querySelector('#gridTablas');
console.log(nodoGridTablas);
// 3. Crear tablas de multiplicar por JS:
// ¿QUE? - Pintar en la web

/**
 * Devolver la cadena de texto del HTML de la tabla
 */

function get_tabla(numero_tabla){ // variable que el valor lo tienen que "dar" desde fuera
        let tabla_html = `
            <div class="tabla">
                <h2> Tabla del ${numero_tabla} </h2>
                <div>`

        // Quiero repetir esto:
        for (let i = 0; i<11; i++){
            tabla_html += `<div> ${numero_tabla} x ${i} = ${i * numero_tabla} </div>`
        }

        tabla_html = tabla_html + `</div>
            </div>`

        return tabla_html;
}

function get_multiple_tablas(limiteTablas){
    let todas_tablas = ''

    for ( let cadaTabla = 0; cadaTabla <= limiteTablas; cadaTabla++ ){
    todas_tablas += get_tabla (cadaTabla);
    }

    return todas_tablas;
}

// todas_tablas += get_tabla(6);
// todas_tablas += get_tabla(4);

// EVENTO
// Acceder al input

let nodoBotonPintar = document.querySelector('#botonPintar');

nodoBotonPintar.addEventListener('click', function(){
    console.log("click en el boton");

    let nodoInput = document.querySelector('#entradaTablas');
    console.log(nodoInput.value); // string
    console.log(nodoInput.valueAsNumber);

    // Pintamos con el elemento COMPLETO
    nodoGridTablas.innerHTML= get_multiple_tablas(nodoInput.valueAsNumber);
})