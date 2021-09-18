const handleScrollPageButton = document.querySelector('.page__button')
const handleAnchors = document.querySelectorAll('a[href*="#"]')
const modalPopupFeedback = document.querySelector('.popup_form_feedback')
const handleOpenPopupButton = document.querySelector('.footer__button')
const handleClosePopupButton = document.querySelector('.form__close')
const burgerMenuButton = document.querySelector('.header__button')
const burgerMenu = document.querySelector('.header__navigation')
const modalSubmitForm = document.querySelector('.form_opened')
const handleSubmitFormButton = modalSubmitForm.querySelector('.form__button_type_submit')
const popups = Array.from(document.querySelectorAll('.popup'))
//validation config
const validationFormConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_visible'
}

//open popups
const openPopup = (element) => {
  element.classList.add('popup__opened');
}

//close popups
const closePopup = (element) => {
  element.classList.remove('popup__opened');
}

const deleteFeedbackCard = (evt) => {
  evt.target.closest('.feedback').remove()
}

const handleAddFeedbackName = document.form_message['form_name']
const handleAddFeedbackText = document.form_message['form_message']

function submitFormFeedback(evt) {
  evt.preventDefault();
  createFeedbackCard({
    name: handleAddFeedbackName.value,
    text: handleAddFeedbackText.value
})

  modalSubmitForm.reset()
  closePopup(modalPopupFeedback)
}

//hide button scroll up
let scrollUpButton = () => {
  if (window.pageYOffset > 150) {
    handleScrollPageButton.style.visibility = 'visible'
  } else {
    handleScrollPageButton.style.visibility = 'hidden'
  }
}

const elementTemplate = document.querySelector('.footer__template').content
const cardsContainer = document.querySelector('.footer__container')

//array
const initialFeedback = [
  {
    name: 'Alexey Kazakov',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.'
  }]

//return card
const createCard = (element) => {
  const cardElement = elementTemplate.cloneNode(true)

  cardElement.querySelector('.feedback__title').textContent = element.name
  cardElement.querySelector('.feedback__text').textContent = element.text
  cardElement.querySelector('.feedback__delete').addEventListener('click', deleteFeedbackCard)
  return cardElement
}

//create cards
const createFeedbackCard = (element) => {
  cardsContainer.prepend(createCard(element))
}

//create card
initialFeedback.forEach((element) => {
  createFeedbackCard(element)
})

//smoothing scroll for anchors
handleAnchors.forEach((anchor) => {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})

//toggle burger menu
const toggleBurgerMenu = () => {
  burgerMenu.classList.toggle('header__navigation_hide');
  burgerMenuButton.classList.toggle('header__button_active');
}

//close popups for X button and overlay
popups.forEach((element) => {
  element.addEventListener('mousedown',(evt) => {
  if (evt.target.classList.contains('form__close') || evt.target.classList.contains('popup_opened'))
    closePopup(element)
  })
})

const openModalWindow = () => {
  handleSubmitFormButton.classList.add('form__button_disabled')
  handleSubmitFormButton.setAttribute('disabled', true)
  openPopup(modalPopupFeedback)
}

handleOpenPopupButton.addEventListener('click',openModalWindow);
modalSubmitForm.addEventListener('submit', submitFormFeedback)
window.onscroll = scrollUpButton;
burgerMenuButton.addEventListener('click', toggleBurgerMenu);

enableValidation(validationFormConfig)
