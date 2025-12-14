'use strict'

let nodoTablas = document.querySelector('#tablas');

function calculaMultiplicacion(){
    let n = Number(document.querySelector('#numero').value);
    console.log('Número de tablas', n);

    nodoTablas.innerHTML = ''; //limpiar antes de pintar

    for (let i=1; i<=n; i++){
        let tablaDeMultiplicar = `
        <div class="tabla">
            <h3>Tabla del ${i}</h3>
            <table>
                <tr><td>${i} x 1 = ${i * 1}</td></tr>
                <tr><td>${i} x 2 = ${i * 2}</td></tr>
                <tr><td>${i} x 3 = ${i * 3}</td></tr>
                <tr><td>${i} x 4 = ${i * 4}</td></tr>
                <tr><td>${i} x 5 = ${i * 5}</td></tr>
                <tr><td>${i} x 6 = ${i * 6}</td></tr>
                <tr><td>${i} x 7 = ${i * 7}</td></tr>
                <tr><td>${i} x 8 = ${i * 8}</td></tr>
                <tr><td>${i} x 9 = ${i * 9}</td></tr>
                <tr><td>${i} x 10 = ${i * 10}</td></tr>
            </table>
        </div>
        `;
        
        nodoTablas.innerHTML += tablaDeMultiplicar
    
    }
}
