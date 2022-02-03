const buttonChecker = document.querySelector('.btn-checker');
const inputsContainer = document.querySelector('.inputs_container');
const buttonOpener = document.querySelector('.btn-opener');
export const inputsHandler = () => {
    buttonChecker.classList.remove('d-none');
    inputsContainer.classList.remove('d-none');
    buttonOpener.classList.add('d-none');
};
