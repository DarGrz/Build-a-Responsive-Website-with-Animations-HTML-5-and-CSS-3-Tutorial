/* Select element */
const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

/* Scroll reveal */
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    delay: 300,
    origin: 'left',
    duration: 1000,
    distance: '25rem',

});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600,
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600,
});