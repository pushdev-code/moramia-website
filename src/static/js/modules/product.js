
//import './static/js/modules/gallery';
//import './static/js/modules/product-card';

const active = document.querySelector('.active');
const pathname = window.location.pathname;

if(pathname.includes('/product') && active) {
    active.classList.remove('active');
}