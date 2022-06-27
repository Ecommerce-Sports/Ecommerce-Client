var body = document.querySelector('body');
var header = document.querySelector('header');
var sidebar = body.querySelector('nav');
var toggle = header.querySelector('.fa-bars');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});