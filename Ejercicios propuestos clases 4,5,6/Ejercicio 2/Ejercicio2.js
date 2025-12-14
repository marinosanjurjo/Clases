'use strict'

function calcula(){
    let valorRadio = Number(document.querySelector('#radio').value);
    console.log('Valor Radio', valorRadio);
    const pi = Math.PI
    console.log('Número pi', pi);

    function calculaDiametro(){
        let valorDiametro = 2 * valorRadio;
        let liDiametro = document.querySelector('#diametro');
        console.log('Valor Diametro', valorDiametro);
        
        liDiametro.innerHTML = 'El diametro del círculo introducido es: ' + valorDiametro + ' cm.';
    }

    function calculaPerimetro(){
        let valorPerimetro = 2 * pi * valorRadio;
        valorPerimetro = valorPerimetro.toFixed(2);
        let liPerimetro = document.querySelector('#perimetro');
        console.log('Valor Perímetro', valorPerimetro);

        liPerimetro.innerHTML = 'El perímetro del círculo introducido es: ' + valorPerimetro + ' cm.';
    }

    function calculaArea(){
        let valorArea = pi * valorRadio * valorRadio;
        valorArea = valorArea.toFixed(2);
        let liArea = document.querySelector('#area');
        console.log('Valor Área', valorArea);

        liArea.innerHTML = 'El área del círculo introducido es: ' + valorArea + ' cm².';
    }

calculaDiametro();
calculaPerimetro();
calculaArea();
}