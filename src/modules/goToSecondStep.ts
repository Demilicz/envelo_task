const popup = document.querySelector('.popup') as HTMLDivElement;
const popup_area = document.querySelector('.popup_area') as HTMLAnchorElement;

const kod = document.querySelector('.kod') as HTMLInputElement;
const telefon = document.querySelector('.telefon') as HTMLInputElement;

export const goToSecondStep = () => {

  popup.classList.add("d-none");
  popup_area.classList.add("d-none");

  kod.value = "";
  telefon.value = "";


}