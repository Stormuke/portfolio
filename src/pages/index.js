import '../pages/index.css'
import FormValidator from "../components/FormValidator.js";

//array
const initialFeedback = [
  {
    name: 'Alexey Kazakov',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.'
  }]

const initialSkills = [
  {name: 'HTML 5', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/file_type_html_icon_130541.svg', href: 'https://ru.wikipedia.org/wiki/HTML5'},
  {name: 'CSS', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/file_type_css_icon_130661.svg', href: 'https://ru.wikipedia.org/wiki/CSS'},
  {name: 'JavaScript', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/javascript_icon_130900.svg', href: 'https://ru.wikipedia.org/wiki/JavaScript'},
  {name: 'Webpack', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/webpack_original_logo_icon_146300.svg', href: 'https://ru.wikipedia.org/wiki/webpack'},
  {name: 'Figma', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/figma_logo_icon_170157.svg', href: 'https://ru.wikipedia.org/wiki/Figma'}]

const handleScrollPageButton = document.querySelector('.page__button')
const handleAnchors = document.querySelectorAll('a[href*="#"]')
const modalPopupFeedback = document.querySelector('.popup_form_feedback')
const handleOpenPopupButton = document.querySelector('.footer__button')
const burgerMenuButton = document.querySelector('.header__button')
const burgerMenu = document.querySelector('.header__navigation')
const modalSubmitForm = document.querySelector('.form_opened')
const popups = Array.from(document.querySelectorAll('.popup'))
const slides = document.querySelectorAll('.header__main-illustration')
const feedbackForm = document.forms["form_message"]
const skillsCellTemplate = document.querySelector('.skills__description-cell-template').content.querySelector('.skills__description-cell')
const skillsContainer = document.querySelector('.skills__description')
//validation config
const validationFormConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_visible'
}

//create new instance of form validator
const feedbackFormValidation = new FormValidator(validationFormConfig, feedbackForm)
const pages = Array.from(document.querySelectorAll('.page'))


const handleScrollUpButton = document.querySelector('.page__swap-button_up')
const handleScrollDownButton = document.querySelector('.page__swap-button_down')
const handleScrollCenterButton = document.querySelector('.page__swap-button_center')

const handleUpPage = () => {
  pages[0].classList.remove('hidden')
  pages[1].classList.add('hidden')
  pages[2].classList.add('hidden')
}
const handleCenterPage = () => {
  pages[0].classList.add('hidden')
  pages[1].classList.remove('hidden')
  pages[2].classList.add('hidden')
}
const handleDownPage = () => {
  pages[0].classList.add('hidden')
  pages[1].classList.add('hidden')
  pages[2].classList.remove('hidden')
}

handleScrollUpButton.addEventListener('click', handleUpPage)
handleScrollDownButton.addEventListener('click', handleDownPage)
handleScrollCenterButton.addEventListener('click', handleCenterPage)

const upButton = document.querySelector('.controls__button_up')
const downButton = document.querySelector('.controls__button_down')
const container = document.querySelector('.slider')
const sideBar = document.querySelector('.slider__container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

upButton.addEventListener('click', () => {
  changeSlide('up')
})

downButton.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

const createSkillCard = (item) => {
  const skillsElement = skillsCellTemplate.cloneNode(true)
  const skillImage = skillsElement.querySelector('.skills__description-illustration')
  skillsElement.querySelector('.skills__description-text').textContent = item.name
  skillImage.src = item.image
  skillImage.alt = item.name
  skillsElement.querySelector('.skills__link').href = item.href
  return skillsElement
}

const insertSkillCard = (item) => {
  skillsContainer.append(createSkillCard(item))
}

initialSkills.forEach((item) => {
    insertSkillCard(item)
})

const setDefaultSlide = (defaultSlide) => {
  slides[defaultSlide].classList.add('header__main-illustration_active')

  const clearActiveSlide = () => {
    slides.forEach(item => item.classList.remove('header__main-illustration_active'))
  }

  const slider = (evt) => {
    clearActiveSlide()
    evt.target.classList.add('header__main-illustration_active')
  }

  slides.forEach((item) => {
    item.addEventListener('click', slider)
  })
}

setDefaultSlide(2)

//open popups
const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscapeClick)
}


//close popups
const closePopup = (element) => {
  element.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEscapeClick)
}

const deleteFeedbackCard = (evt) => {
  evt.target.closest('.feedback').remove()
}

const handleAddFeedbackName = document.form_message['form_name']
const handleAddFeedbackText = document.form_message['form_message']

function submitFormFeedback() {
  createFeedbackCard({
    name: handleAddFeedbackName.value[0].toUpperCase() + handleAddFeedbackName.value.slice(1),
    text: handleAddFeedbackText.value[0].toUpperCase() + handleAddFeedbackText.value.slice(1)
  })

  modalSubmitForm.reset()
  closePopup(modalPopupFeedback)
}

//hide button scroll up
let scrollUpButton = () => {
  if (window.pageYOffset < 150) {
    handleScrollPageButton.style.visibility = 'hidden'
  } else {
    handleScrollPageButton.style.visibility = 'visible'
  }
}

const elementTemplate = document.querySelector('.footer__template').content
const cardsContainer = document.querySelector('.footer__container')

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

const closePopupEscapeClick = (evt) => {
  const popupOpened = document.querySelector('.popup_opened')
  if (evt.key === 'Escape') {
    closePopup(popupOpened)
  }
}

//close popups for X button and overlay
popups.forEach((element) => {
  element.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('form__close') || evt.target.classList.contains('popup_opened'))
      closePopup(element)
  })
})

const openModalWindow = () => {
  feedbackFormValidation.disableSubmitButton()
  openPopup(modalPopupFeedback)
}

handleOpenPopupButton.addEventListener('click', openModalWindow);
modalSubmitForm.addEventListener('submit', submitFormFeedback)
window.onscroll = scrollUpButton;
burgerMenuButton.addEventListener('click', toggleBurgerMenu);


feedbackFormValidation.enableValidation()
