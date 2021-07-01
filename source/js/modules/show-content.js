import { addModifier } from './add-modifier';

const TABLET_BREAKPOINT = 768;
const loader = document.querySelector('.loader');
const introTitle = document.querySelector('.intro__title');
const introContent = document.querySelector('.intro__content');
const headerLogo = document.querySelector('.header__logo');
const pageWidth = document.documentElement.clientWidth;

const showContent = () => {

  const hideLoader = () => {
    addModifier([loader], 'hide');
  };

  const showElementsUnderLoader = (arrayElements) => {
    hideLoader();
    loader.addEventListener('animationend', () => {
      addModifier(arrayElements, 'show');
    });
  };

  const toggleIntroContent = () => {
    document.documentElement.addEventListener('click', (evt) => {
      const target = evt.target;
      if (!target.closest('.header__logo')) {
        introContent.classList.toggle('intro__content--show');
      }
    });
  };

  if (pageWidth > TABLET_BREAKPOINT) {
    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 13) {
        showElementsUnderLoader([introTitle, introContent, headerLogo]);
      }
    });
  } else {
    loader.addEventListener('click', () => {
      showElementsUnderLoader([introTitle, headerLogo]);
      loader.addEventListener('animationend', toggleIntroContent);
    });
  }
};

export { showContent };