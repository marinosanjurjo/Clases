'use strict'

const modal = document.querySelector('.modal');
const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const saveBtn = document.querySelector('#saveChangesModal');

openBtn.addEventListener('click', function (){
    modal.classList.remove('modal--hidden');
    console.log('Abrir pop up');
})



closeBtn.addEventListener('click', function (){
    modal.classList.add('modal--hidden');
    console.log('Cerrar pop up');
})



saveBtn.addEventListener('click', function (){
    modal.classList.add('modal--hidden');
    console.log('Guardar cambios');
})

