var active = document.querySelector('.active');
var pathname = window.location.pathname;

if(pathname == '/product') {
    active.classList.remove('active');
}

