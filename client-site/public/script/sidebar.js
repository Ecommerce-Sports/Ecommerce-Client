//sidebar
const body = document.querySelector('body');
const header = document.querySelector('header');
const sidebar = body.querySelector('nav');
const toggle = header.querySelector('.fa-bars');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

//uploadImage
const loadFile = (event) => {
    const image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};