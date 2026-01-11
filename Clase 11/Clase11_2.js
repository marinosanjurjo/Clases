'use strict'


/*

Repaso
- Pop up con animaciones

- Document query Selector / all

- Problemas de innerHTML

*/

// Numero creciendo

let miNumero = 0;
let nodoNumero = document.querySelector('#numero');

const ref_interval = setInterval( function(){
    miNumero = miNumero + 1;
    nodoNumero.innerHTML = miNumero;
} , 1000);

// Botón voy a parar el interval

let nodoBotonStop = document.querySelector('#btnStop');

nodoBotonStop.addEventListener('click', function(){
    clearInterval(ref_interval);
})


/**
 * Cuando clico en btnAlumno
 * 
 * Acceder al input
 * 
 * Pintar un elemento "alumno" dentro de #gridAlumnos
 */

const nodoBtnAlumno = document.querySelector('#btnAlumno');

nodoBtnAlumno.addEventListener('click', function(){
    
    const nodoInput = document.querySelector('#entradaNombre');
    const nombre = nodoInput.value;
    console.log(nombre);

    // pintarAlumno(nombre);
    pintarAlumnoAppend(nombre);
});

function pintarAlumno(nombreAlumno){
    const html_alumno = `<div class="alumno">
                            <h2> ${nombreAlumno}</h2>
                            <button> Seleccionar </button>
                        </div>`

    const nodoGridAlumnos = document.querySelector('#gridAlumnos');
    // Reasignación
    nodoGridAlumnos.innerHTML += html_alumno;

    // Los elementos nuevos no tienen eventos. y estoy repintando -> Borro los eventos que había
    let listaBotones = document.querySelectorAll('.alumno button');
    for (let cadaBoton of listaBotones){
        cadaBoton.addEventListener('click', function(){
            cadaBoton.classList.add('verde');
        });
    }
};


// Seleccionar todos los botones
// Añadir un evento

// [ , , , ]
// Para los elementos que ya están maquetados por HTML
let listaBotones = document.querySelectorAll('.alumno button');
for (let cadaBoton of listaBotones){
    cadaBoton.addEventListener('click', function(){
        cadaBoton.classList.add('verde');
    });
}

// Manera de pintar recomendada

function pintarAlumnoAppend(nombre){
    // Crear nodos HTML

    const nodoAlumno = document.createElement('div');
    nodoAlumno.classList.add('alumno');

    const nodoH2 = document.createElement('h2');
    nodoH2.innerHTML = nombre;

    const nodoBoton = document.createElement('button');
    nodoBoton.innerHTML = 'Seleccionar';

    nodoBoton.addEventListener('click', function(){
        nodoBoton.classList.add('verde');
    })

    nodoAlumno.appendChild(nodoH2);
    nodoAlumno.appendChild(nodoBoton);


    // Pintado
    const nodoGridAlumnos = document.querySelector('#gridAlumnos');
    nodoGridAlumnos.appendChild(nodoAlumno);

    console.log(nodoAlumno);
    console.log(nodoH2);
    console.log(nodoBoton);
}