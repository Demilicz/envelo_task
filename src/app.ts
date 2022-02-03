import { checkInputs } from "./modules/validatorHandler.js";
import { inputsHandler } from "./modules/inputsHandler.js";
import { goToFirstStep } from "./modules/goToFirstStep.js"
import { goToSecondStep } from "./modules/goToSecondStep.js"


const buttonChecker = document.querySelector('.btn-checker') as HTMLButtonElement;
const buttonOpener = document.querySelector('.btn-opener') as HTMLButtonElement;

const btn1stStep = document.querySelector('.btn_1st_step') as HTMLButtonElement;
const btn2ndStep = document.querySelector('.btn_2nd_step') as HTMLButtonElement;


buttonChecker.addEventListener('click', checkInputs);
buttonOpener.addEventListener('click', inputsHandler);

btn1stStep.addEventListener('click', goToFirstStep);
btn2ndStep.addEventListener('click', goToSecondStep);




