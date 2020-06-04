import {Product} from './modules/product.js';
import './assets/css/main.scss'

const hamburgerMenu = document.querySelector('.mor-mobile');
const close = document.querySelector('.close');
var header = document.querySelector('.mor-desktop');

console.log(new Product('almond',4150));

hamburgerMenu.addEventListener('click', ()=>{
    if(header.classList.value.toString() === 'mor-desktop desktop-open'){
        header.classList.remove('desktop-open');
        header.classList.add('desktop-close');
    }
    else {
        header.classList.add('desktop-open');
        header.classList.remove('desktop-close');
    }
});

close.addEventListener('click', ()=>{
    header.classList.remove('desktop-open');
    header.classList.add('desktop-close');
});

