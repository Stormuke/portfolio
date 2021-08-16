let btn = document.querySelector('.page__button');
const anchors = document.querySelectorAll('a[href*="#"]');
let popup = document.querySelector('.popup');
let messageButton = document.querySelector('.footer__button');
let closePopupButton = document.querySelector('.form__close');
let burgerMenuButton = document.querySelector('.header__button');
let burgerMenu = document.querySelector('.header__navigation');


//toggle feedback form
function togglePopup() {
  popup.classList.toggle('popup__opened');
}

//hide button scroll up
function scrollUpButton() {
  if (window.pageYOffset > 150) {
    btn.style.opacity = '.8'
  } else { btn.style.opacity = '0' }
}

//smothing scroll for anchors
for (let anchor of anchors) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//toggle burger menu
function toggleBurgerMenu() {
  burgerMenu.classList.toggle('header__navigation_hide');
  burgerMenuButton.classList.toggle('header__button_active');
}

messageButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
window.onscroll = scrollUpButton;
burgerMenuButton.addEventListener('click', toggleBurgerMenu);
