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

let todas_tablas = ''

for ( let cadaTabla = 0; cadaTabla < 11; cadaTabla++ ){
    todas_tablas += get_tabla (cadaTabla);
}

// todas_tablas += get_tabla(6);
// todas_tablas += get_tabla(4);

// Pintamos con el elemento COMPLETO
nodoGridTablas.innerHTML= todas_tablas;

// for (let i = 0; i<10; i++){
//    console.log("vuelta", i);
//}