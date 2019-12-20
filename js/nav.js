const nav_toggle = document.querySelector(".menu_button");
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container_all');

nav_toggle.addEventListener('click', ()=> {
    containerAll.style.transition = 'transform 500ms ease-in-out';
    document.body.classList.toggle("nav_is_open");
});

nav.addEventListener('click', ()=> {
    containerAll.style.transition = '0ms';
    document.body.classList.remove('nav_is_open');
});