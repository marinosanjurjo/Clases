'use strict'

let nodoResultado = document.querySelector('#sumaImpares');

// Primera parte ejercicio:

//for (let i=0; i<=100; i++){
//    let suma = 0;
//    let resto = i % 2;
//    if (resto === 1){
//        suma += i;
//        console.log('La suma de los números impares es:', suma);
//    }else{
//        console.log('Par', i);
//    }
//}

//function sumaImpar(){
//    nodoResultado.innerHTML = suma;
//}

// Segunda parte ejercicio:

//function sumaImpar(max){
//    let suma = 0;
//
//    for (let i=0; i<=max; i++){
//        if (i % 2 !== 0){
//            suma += i;
//        }
//    }
//
//    return suma;
//
//}
//
//console.log(sumaImpar(100));
//console.log(sumaImpar(50));

// Mejoras 1 y 2:

function sumaImpar(){
    let suma = 0;

    let min = Number(document.querySelector('#numeroMin').value);
    console.log('Numero mínimo', min);

    let max = Number(document.querySelector('#numeroMax').value);
    console.log('Número máximo', max);

    for (let i=min; i<=max; i++){
        let resto = i % 2;
        if (resto === 1){
            suma += i;
            console.log('La suma de los números impares es:', suma);
        }else{
            console.log('Par', i);
        }
    }

    nodoResultado.innerHTML = 'La suma de los números impares entre ' + min + ' y ' + max + ' es: ' + suma;
}