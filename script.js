const menuActive = document.querySelector('.right_menu');
const iconMenu = document.querySelector('#menu');
const nameActive = document.querySelector('.name_on');

function toglMenu() {
    menuActive.classList.toggle('hidden');
    nameActive.classList.toggle('name_on');
}

iconMenu.addEventListener('click', toglMenu);