const TABLET_MAX_WIDTH = 1023;

const mainNavElement = document.querySelector(`.page_header__main_nav`);
const mainNavCloseButton = mainNavElement.querySelector(`.control`);
const pageHeaderTopClone = document.querySelector(`.page_header__top`).cloneNode(true);

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
  mainNavElement.classList.remove(`main_nav--closed`);
};

const closeMenu = () => {
  if (pageHeaderTopClone) {
    pageHeaderTopClone.remove();
  }
  mainNavElement.classList.add(`main_nav--closed`);

};

export {openMenu, pageHeaderTopClone};
