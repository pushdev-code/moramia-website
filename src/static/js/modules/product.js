const active = document.querySelector('.active');
const pathname = window.location.pathname;

if(pathname.includes('/product') && active) {
    active.classList.remove('active');
}