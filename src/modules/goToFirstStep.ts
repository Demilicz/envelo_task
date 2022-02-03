const popup = document.querySelector('.popup') as HTMLDivElement;
const popup_area = document.querySelector('.popup_area') as HTMLAnchorElement;

const buttonChecker = document.querySelector('.btn-checker') as HTMLInputElement;
const inputsContainer = document.querySelector('.inputs_container') as HTMLDivElement;
const buttonOpener = document.querySelector('.btn-opener') as HTMLButtonElement;

const kod = document.querySelector('.kod') as HTMLInputElement;
const telefon = document.querySelector('.telefon') as HTMLInputElement;


export const goToFirstStep = () => {

  popup.classList.add("d-none");
  popup_area.classList.add("d-none");

  buttonChecker.classList.add('d-none');
  inputsContainer.classList.add('d-none');
  buttonOpener.classList.remove('d-none');

  kod.value = "";
  telefon.value = "";

}