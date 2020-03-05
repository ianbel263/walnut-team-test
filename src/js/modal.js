import {checkPhoneNumberValidity} from './form';
import {isMenuOpened} from './main_nav';

const ESC_KEY_CODE = 27;
const TIMEOUT_HIDE_POPUP = 590;
const MOBILE_MAX_WIDTH = 767;

const overlay = document.querySelector(`.overlay`);
const popupsAll = document.querySelectorAll('.modal');

let scrollY;

const onEscPress = (evt) => {
  if (evt.keyCode === ESC_KEY_CODE) {
    closePopup();
  }
};

const getScrollbarWidth = () => {
  const div = document.createElement(`div`);

  div.style.overflowY = `scroll`;
  div.style.width = `50px`;
  div.style.height = `50px`;

  document.body.appendChild(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);
  return scrollWidth;
};

const openPopup = (popup) => {
  if (!popup || !overlay) {
    return;
  }
  const popupCloseButton = popup.querySelector(`.modal__control`);
  const phoneNumberInput = popup.querySelector(`input[type="tel"]`);
  if (phoneNumberInput) {
    checkPhoneNumberValidity(phoneNumberInput);
  }

  if (document.body.offsetWidth > MOBILE_MAX_WIDTH) {
    document.body.paddingRight = `${getScrollbarWidth()}px`;
  } else {
    scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
  }
  document.body.classList.add(`body_hidden`);
  overlay.classList.add(`overlay--show`);
  overlay.addEventListener('click', function () {
    closePopup();
  });
  popupCloseButton.addEventListener(`click`, () => {
    closePopup();
  })
  document.addEventListener(`keydown`, onEscPress);
  popup.classList.remove(`modal--hidden`);
  popup.classList.remove(`modal--closed`);
  popup.classList.add(`modal--opened`);
};

const closePopup = () => {
  if (popupsAll.length < 1 || !overlay) {
    return;
  }
  popupsAll.forEach((popup) => {
    if (!isMenuOpened) {
      overlay.classList.remove(`overlay--show`);
    }
    popup.classList.remove(`modal--opened`);
    popup.classList.add(`modal--closed`);
    setTimeout(hidePopups, TIMEOUT_HIDE_POPUP);
  });

  document.removeEventListener(`keydown`, onEscPress);
};

const hidePopups = () => {
  popupsAll.forEach((popup) => {
    popup.classList.add(`modal--hidden`);
  });
  if (!isMenuOpened) {
    document.body.style.paddingRight = ``;
    document.body.classList.remove(`body_hidden`);
  }
  if (document.body.offsetWidth <= MOBILE_MAX_WIDTH) {
    window.scrollTo(0, parseInt(scrollY || `0`, 10));
  }
};

export {openPopup, closePopup, overlay, getScrollbarWidth};
