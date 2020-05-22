import {Product} from './modules/product.js';
import './assets/css/main.scss'

const hamburgerMenu = document.querySelector('.mobile');
const close = document.querySelector('.close');
var header = document.querySelector('.desktop');

console.log(new Product('almond',4150));

hamburgerMenu.addEventListener('click',()=>{
    header.style.left = "0px";
});

close.addEventListener('click',()=>{
    //header.style.left = "-320px";
});

