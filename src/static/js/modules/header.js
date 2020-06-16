const hamburgerMenu = document.querySelector('.burger-menu');
const close = document.querySelector('.button-close');
const logos = document.querySelectorAll('.mor-logo');

var header = document.querySelector('.mor-links-container');

hamburgerMenu.addEventListener('click', () => {
    if (header.classList.value.toString() === 'mor-links-container open') {
        header.classList.remove('open');
        header.classList.add('close');
    }
    else {
        header.classList.add('open');
        header.classList.remove('close');
    }
});

logos.forEach((logo) => {
    logo.addEventListener('click', () => {
        window.location.href = '/';
    });
});

close.addEventListener('click', () => {
    header.classList.remove('open');
    header.classList.add('close');
});