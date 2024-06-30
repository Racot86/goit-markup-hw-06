let btnClose = document.querySelector('.btn-close');
let modalWindow = document.querySelector('.backdrop');
let btnOpenModal = document.querySelector('.open-modal');
let btnSandwich = document.querySelector('.btn-sandwich');
let menu = document.querySelector('.header-menu');
let btnCloseMenu = document.querySelector('.menu-close');

btnClose.addEventListener('click', () => {
    modalWindow.classList.remove('is-open');
})
btnOpenModal.addEventListener('click', () => {
    modalWindow.classList.add('is-open');
})

btnSandwich.addEventListener('click', () => {
    menu.classList.add('is-open');
})
menu.addEventListener('click', (e) => {
    menu.classList.remove('is-open');
})