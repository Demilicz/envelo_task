const popup = document.querySelector('.popup');
const popup_area = document.querySelector('.popup_area');
const kod = document.querySelector('.kod');
const telefon = document.querySelector('.telefon');
export const goToSecondStep = () => {
    popup.classList.add("d-none");
    popup_area.classList.add("d-none");
    kod.value = "";
    telefon.value = "";
};
