const buttonChecker = document.querySelector('.btn-checker') as HTMLInputElement;
const inputsContainer = document.querySelector('.inputs_container') as HTMLDivElement;
const buttonOpener = document.querySelector('.btn-opener') as HTMLButtonElement;


export const inputsHandler = () => {

  buttonChecker.classList.remove('d-none');
  inputsContainer.classList.remove('d-none');
  buttonOpener.classList.add('d-none');

}