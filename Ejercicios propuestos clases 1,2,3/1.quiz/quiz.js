'use strict'

function inicioQuiz(){
    console.log('Quiz Start');
    console.time('Quiz Time')
    const nombre = prompt ('Introduce tu nombre');
    console.log('nombre');
    console.log(nombre);

    const pregunta1 = prompt (nombre + ' ' + '¿Cuál es la capital de España?');
    console.log('pregunta1');
    console.log(pregunta1);

    // Selecciono y lo dejo preparado - Variable GLOBAL
    const nodoRespuesta = document.querySelector('#respuesta');

    if (pregunta1 === 'madrid' || pregunta1 === 'Madrid'){
        const pregunta2 = prompt (nombre + ' ' + '¿Cuál es la capital de Francia?');
        console.log('pregunta2');
        console.log(pregunta2);
        if (pregunta2 === 'paris' || pregunta2 === 'Paris'){
            const pregunta3 = prompt (nombre + ' ' + '¿Cuál es la capital de Portugal?');
            console.log('pregunta3')
            console.log(pregunta3);
            if (pregunta3 === 'lisboa' || pregunta3 === 'Lisboa'){
            console.log(respuesta);
            nodoRespuesta.innerHTML = 'Felicidades' + ' ' + nombre + ',' + ' ' + 'todas las respuestas son correctas.'
            console.timeEnd('Quiz Time')
            }else{
                console.log(respuesta);
                nodoRespuesta.innerHTML = nombre + ' ' + 'fallaste, ¡vuelve a intentarlo!';
                console.timeEnd('Quiz Time')
            }
        }else{
            console.log(respuesta);
            nodoRespuesta.innerHTML = nombre + ' ' + 'fallaste, ¡vuelve a intentarlo!';
            console.timeEnd('Quiz Time')
        }
    }else{
        console.log(respuesta);
        nodoRespuesta.innerHTML = nombre + ',' + ' ' + 'tienes que estudiar más.';
        console.timeEnd('Quiz Time')
    }
}

