import { patterns } from "./patterns.js";
const kod = document.querySelector('.kod');
const telefon = document.querySelector('.telefon');
const telError = document.querySelector('.telError');
const kodError = document.querySelector('.kodError');
const popup = document.querySelector('.popup');
const popup_area = document.querySelector('.popup_area');
export const checkInputs = () => {
    let isValidTelefon = patterns.telefon.test(telefon.value);
    let isValidKod = patterns.kod.test(kod.value);
    if (!isValidTelefon) {
        telError.classList.remove("d-none");
        setTimeout(() => {
            telError.classList.add("d-none");
        }, 3000);
    }
    if (!isValidKod) {
        kodError.classList.remove("d-none");
        setTimeout(() => {
            kodError.classList.add("d-none");
        }, 3000);
    }
    if (isValidTelefon && isValidKod) {
        popup.classList.remove("d-none");
        popup_area.classList.remove("d-none");
    }
};
