let btnClose = document.querySelector('.btn-close');
let modalWindow = document.querySelector('.backdrop');
let btnOpenModal = document.querySelector('.open-modal');

btnClose.addEventListener('click', () => {
    modalWindow.classList.remove('is-open');
})
btnOpenModal.addEventListener('click', () => {
    modalWindow.classList.add('is-open');
})
