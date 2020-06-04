import {Product} from './modules/product.js';
import './assets/css/main.scss'

console.log(new Product('almond',4150));

const footerList = document.querySelector('.footer-ulist');
const footerLinks = footerList.querySelectorAll('a');
for(let i = 0; i < footerLinks.length; i++){
    footerLinks[i].addEventListener('click',()=>{
        let current = document.querySelector('.active');
        current.className = "footer-a";
       footerLinks[i].className = "active";
    });
}
