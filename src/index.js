import {Product} from './modules/product.js';
import './assets/css/main.scss'

const hamburgerMenu = document.querySelector('.mor-menu-container');
const close = document.querySelector('.close');
var header = document.querySelector('.mor-links-container');

console.log(new Product('almond',4150));

hamburgerMenu.addEventListener('click', ()=>{
    if(header.classList.value.toString() === 'mor-links-container open'){
        header.classList.remove('open');
        header.classList.add('close');
    }
    else {
        header.classList.add('open');
        header.classList.remove('close');
    }
});

close.addEventListener('click', ()=>{
    header.classList.remove('open');
    header.classList.add('close');
});

