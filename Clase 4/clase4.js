'use strict'

// IF ELSE IF ELSE

let edad_usuario = 10;

if(edad_usuario <2){
    console.log('Eres un bebé');
}else{
    // >=2

    if (edad_usuario < 12){
        // >=2 y <12
        console.log('Eres un niño');
    }else{
        // >=2 y >=12
        if (edad_usuario < 16){
            console.log('Eres un adolescente');
        }else{
            console.log('Eres un adulto');
        }
    }
}

/**
 * 
 * Cuando tenemos una variable de rango con varias interacciones
 * Cuando tengo muchas condiciones complejas con varias interacciones
 * 
 */

if (edad_usuario < 2){

}else if(edad_usuario < 12){

}else if (edad_usuario < 16){

}else{

}

/**
 * VARIABLES que son DISCRETAS (valores fijos)
 */