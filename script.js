let btn = document.querySelector('.page__button');
const anchors = document.querySelectorAll('a[href*="#"]');
let popup = document.querySelector('.popup');
let messageButton = document.querySelector('.footer__button');
let closePopupButton = document.querySelector('.form__close');

function togglePopup() {
  popup.classList.toggle('popup__opened');
}

function buttonOpen() {
  if (window.pageYOffset > 150) {
    btn.style.opacity = '.6'
  } else { btn.style.opacity = '0' }
}

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

messageButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
window.onscroll = buttonOpen;
