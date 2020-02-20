import {openPopup, closePopup} from './modal';

const PHONE_NUMBER_MIN_LENGTH = 24;

const popupSuccess = document.querySelector(`.success_modal`);

const checkPhoneNumberValidity = (phoneInput) => {
  if (phoneInput.value.length < PHONE_NUMBER_MIN_LENGTH) {
    phoneInput.setCustomValidity(`Пожалуйста, введите номер телефона полностью`);
  } else {
    phoneInput.setCustomValidity(``);
  }
};

const createPhoneMask = (input) => {
  const matrix = `+7 ( ___ ) ___ - __ - __`;
  let i = 0;
  const def = matrix.replace(/\D/g, ``);
  let val = input.value.replace(/\D/g, ``);
  if (def.length >= val.length) {
    val = def;
  }
  input.value = matrix.replace(/./g, (a) => {
    let newLocal;
    if (/[_\d]/.test(a) && i < val.length) {
      newLocal = val.charAt(i++);
    } else if (i >= val.length) {
      newLocal = ``;
    } else {
      newLocal = a;
    }
    return newLocal;
  });
};

const addFormListeners = (form, isPopup = false) => {
  const allInputs = form.querySelectorAll(`input`);
  const phoneNumberInput = form.querySelector(`input[type="tel"]`);
  const formInvalidElement = form.querySelector(`.modal__invalid`);

  phoneNumberInput.addEventListener(`focus`, () => {
    if (phoneNumberInput.value === `+7 ` || phoneNumberInput.value === ``) {
      phoneNumberInput.value = `+7 `;
    }
  });

  phoneNumberInput.addEventListener(`input`, () => {
    createPhoneMask(phoneNumberInput);
    checkPhoneNumberValidity(phoneNumberInput);
  });

  if (isPopup) {
    allInputs.forEach((input) => {
      input.addEventListener(`input`, () => {
        if (input.checkValidity()) {
          input.parentElement.classList.remove(`modal__label--invalid`);
          formInvalidElement.style.display = `none`;
        }
      });
      input.addEventListener(`invalid`, (evt) => {
        evt.preventDefault();
        input.parentElement.classList.add(`modal__label--invalid`);
        formInvalidElement.style.display = `block`;
      });
    });
  }

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    checkPhoneNumberValidity(phoneNumberInput);
    if (isPopup) {
      closePopup(isPopup);
    }
    openPopup(popupSuccess);
  });
};

export {addFormListeners, checkPhoneNumberValidity};
