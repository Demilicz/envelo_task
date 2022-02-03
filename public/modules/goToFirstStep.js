const popup = document.querySelector('.popup');
const popup_area = document.querySelector('.popup_area');
const buttonChecker = document.querySelector('.btn-checker');
const inputsContainer = document.querySelector('.inputs_container');
const buttonOpener = document.querySelector('.btn-opener');
const kod = document.querySelector('.kod');
const telefon = document.querySelector('.telefon');
export const goToFirstStep = () => {
    popup.classList.add("d-none");
    popup_area.classList.add("d-none");
    buttonChecker.classList.add('d-none');
    inputsContainer.classList.add('d-none');
    buttonOpener.classList.remove('d-none');
    kod.value = "";
    telefon.value = "";
};
