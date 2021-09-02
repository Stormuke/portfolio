const handleScrollPageButton = document.querySelector('.page__button')
const handleAnchors = document.querySelectorAll('a[href*="#"]')
const modalPopupFeedback = document.querySelector('.popup_form_feedback')
const handleOpenPopupButton = document.querySelector('.footer__button')
const handleClosePopupButton = document.querySelector('.form__close')
const burgerMenuButton = document.querySelector('.header__button')
const burgerMenu = document.querySelector('.header__navigation')
const modalSubmitForm = document.querySelector('.form_opened')
const handleSubmitFormButton = modalSubmitForm.querySelector('.form__button_type_submit')

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

//smothing scroll for anchors
handleAnchors.forEach((anchor) => {
  anchor.addEventListener('click', function (evt) {
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

handleOpenPopupButton.addEventListener('click',() => {openPopup(modalPopupFeedback)});
handleClosePopupButton.addEventListener('click', () => {closePopup(modalPopupFeedback)});
modalSubmitForm.addEventListener('submit', submitFormFeedback)
window.onscroll = scrollUpButton;
burgerMenuButton.addEventListener('click', toggleBurgerMenu);
