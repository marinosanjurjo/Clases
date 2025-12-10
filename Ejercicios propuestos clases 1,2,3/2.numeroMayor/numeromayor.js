'use strict'

function calculanumero(){
    const numero1 = document.querySelector('#numero1');
    console.log('numero1');
    console.log(numero1.value);
    const numero2 = document.querySelector('#numero2');
    console.log('numero2');
    console.log(numero2.value); /*opcional*/

if(numero1.value > numero2.value){
    console.log(resultado);
    resultado.innerHTML = 'El número 1 (' + numero1.value + ') es MAYOR que el número 2 (' + numero2.value + ')';
}else{
    if(numero1.value === numero2.value){
        console.log(resultado);
        resultado.innerHTML = 'El número 1 (' + numero1.value + ') es IGUAL que el número 2 (' + numero2.value + ')';
    }else{
        console.log(resultado);
        resultado.innerHTML = 'El número 1 (' + numero1.value + ') es MENOR que el número 2 (' + numero2.value + ')';
    }
}
}