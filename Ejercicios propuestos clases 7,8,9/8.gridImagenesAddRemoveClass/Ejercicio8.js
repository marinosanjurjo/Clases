'use strict'

const earthImages = document.querySelector('#earth');
const allImages = document.querySelector('#all');
const waterImages = document.querySelector('#water');
const fireImages = document.querySelector('#fire');
const imagesList = document.querySelectorAll('.imagen');

earthImages.addEventListener('click', function (){
    for (const images of imagesList) {
        images.classList.add('hidden');
    }

    for (const images of imagesList) {
        if (images.classList.contains('tierra')) {
            images.classList.remove('hidden');
        }
    }

    console.log('Imágenes tierra');
});

waterImages.addEventListener('click', function (){
    for (const images of imagesList) {
        images.classList.add('hidden');
    }

    for (const images of imagesList) {
        if (images.classList.contains('agua')) {
            images.classList.remove('hidden');
        }
    }

    console.log('Imágenes agua');
})

fireImages.addEventListener('click', function (){
    for (const images of imagesList) {
        images.classList.add('hidden');
    }

    for (const images of imagesList) {
        if (images.classList.contains('fuego')) {
            images.classList.remove('hidden');
        }
    }

    console.log('Imágenes fuego');
})

allImages.addEventListener('click', function (){
    for (const images of imagesList) {
        images.classList.remove('hidden');
    }

    console.log('Todas las imágenes');
})

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#closeModal');

for (const image of imagesList){
    image.addEventListener('click', function (){
        const imgSrc = image.querySelector('img').src; //obtenemos la src de la imagen clicada//
        modal.querySelector('img').src = imgSrc; //cambiamos la src del modal
        modal.classList.remove('modal--hidden'); //mostramos el modal
        console.log('Abrir imagen', imgSrc);
    })
}

closeBtn.addEventListener('click', function (){
    modal.classList.add('modal--hidden');
    console.log('Cerrar imagen');
})

