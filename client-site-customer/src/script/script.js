export const ScriptNavbar = () => {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const sidebar = body.querySelector('nav');
    const toggle = header.querySelector('.fa-bars');
    
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('close');
    });
}