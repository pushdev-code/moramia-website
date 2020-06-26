var active = document.querySelector('.active');
var pathname = window.location.pathname;

if(pathname.includes('/product')) {
    active.classList.remove('active');
}