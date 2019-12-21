const nav_toggle = document.querySelector(".menu_button");
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container_all');

nav_toggle.addEventListener('click', ()=> {
    document.body.classList.toggle("nav_is_open");
});

nav.addEventListener('click', ()=> {
    document.body.classList.remove('nav_is_open');
});