import {overlay, getScrollbarWidth} from './modal';

const TABLET_MAX_WIDTH = 1023;

const mainNavElement = document.querySelector(`.page_header__main_nav`);
const mainNavCloseButton = mainNavElement.querySelector(`.control`);
const pageHeaderTopClone = document.querySelector(`.page_header__top`).cloneNode(true);

let isMenuOpened = false;

const openMenu = () => {
  if (document.body.offsetWidth <= TABLET_MAX_WIDTH) {
    const siteListElement = mainNavElement.querySelector(`.site_list`);
    mainNavElement.append(pageHeaderTopClone);
    siteListElement.after(pageHeaderTopClone);
    pageHeaderTopClone.style.display = `block`;
  }
  mainNavCloseButton.addEventListener(`click`, () => {
    closeMenu();
  });
  document.body.paddingRight = `${getScrollbarWidth()}px`;
  document.body.classList.add(`body_hidden`);
  overlay.classList.add(`overlay--show`);
  overlay.addEventListener('click', function () {
    closeMenu();
  });
  isMenuOpened = true;
  mainNavElement.classList.remove(`main_nav--closed`);
};

const closeMenu = () => {
  if (pageHeaderTopClone) {
    pageHeaderTopClone.remove();
  }
  isMenuOpened = false;
  document.body.style.paddingRight = ``;
  document.body.classList.remove(`body_hidden`);
  overlay.classList.remove(`overlay--show`);
  mainNavElement.classList.add(`main_nav--closed`);
};

export {openMenu, pageHeaderTopClone, isMenuOpened};
