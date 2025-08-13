const trigger = document.querySelector('.trigger');
const menu = document.querySelector('.menu-header');
const btn = document.querySelector('.btn-header');

trigger.addEventListener('click', () => {
    menu.classList.toggle('show');
    btn.classList.toggle('show');
});
