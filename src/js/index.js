import {addFormListeners, checkPhoneNumberValidity} from './form';
import {openPopup} from './modal';
import {openMenu, pageHeaderTopClone} from './main_nav';

const formRequest = document.querySelector(`.main_screen__form_request`);
const popupFeedback = document.querySelector(`.feedback_modal`);

const addPopupFeedbackButtonHandler = (parent = document) => {
  const popupFeedbackOpenButton = parent.querySelector(`.page_header__link--feedback`);
  popupFeedbackOpenButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    openPopup(popupFeedback);
  });
};

checkPhoneNumberValidity(formRequest.querySelector(`input[type="tel"]`));
addFormListeners(formRequest);
addFormListeners(popupFeedback, true);
addPopupFeedbackButtonHandler();

const menuControlButton = document.querySelector(`.page_header__control`);
menuControlButton.addEventListener(`click`, () => {
  addPopupFeedbackButtonHandler(pageHeaderTopClone);
  openMenu();
});
