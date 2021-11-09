import '../pages/index.css'
import FormValidator from "../components/FormValidator.js";
import {switchLanguage} from "../components/multiLanguages.js";
import {languages} from "../components/multiLanguages.js";
import {
  initialFeedback,
  initialSkills,
  handleRuButton,
  handleEngButton,
  handleScrollPageButton,
  handleAnchors,
  modalPopupFeedback,
  handleOpenPopupButton,
  burgerMenuButton,
  burgerMenu,
  modalSubmitForm,
  popups,
  slides,
  feedbackForm,
  skillsCellTemplate,
  skillsContainer,
  fullScreenPage,
  sliderPage,
  mainPage,
  handleScrollUpButton,
  handleScrollDownButton,
  handleScrollCenterButton,
  upButton,
  downButton,
  container,
  sideBar,
  mainSlide,
  slidesCount,
  handleAddFeedbackName,
  handleAddFeedbackText,
  elementTemplate,
  cardsContainer,
  validationFormConfig,
  pages
} from "../utils/constants.js"

//create new instance of form validator
const feedbackFormValidation = new FormValidator(validationFormConfig, feedbackForm)

let activeSlideIndex = 0

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

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

const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscapeClick)
}

const closePopup = (element) => {
  element.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEscapeClick)
}

const deleteFeedbackCard = (evt) => {
  evt.target.closest('.feedback').remove()
}

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

function removeUnderline(item) {
  item.classList.remove('page__languages_type_underline')
}

function switchRuLanguage() {
  switchLanguage(languages.eng)
  removeUnderline(handleRuButton)
  handleEngButton.classList.add('page__languages_type_underline')
}

function switchEngLanguage() {
  switchLanguage(languages.ru)
  removeUnderline(handleEngButton)
  handleRuButton.classList.add('page__languages_type_underline')
}

window.onscroll = scrollUpButton;
handleOpenPopupButton.addEventListener('click', openModalWindow);
modalSubmitForm.addEventListener('submit', submitFormFeedback)
burgerMenuButton.addEventListener('click', toggleBurgerMenu);
handleRuButton.addEventListener('click', switchEngLanguage)
handleEngButton.addEventListener('click', switchRuLanguage)
handleScrollUpButton.addEventListener('click', handleUpPage)
handleScrollDownButton.addEventListener('click', handleDownPage)
handleScrollCenterButton.addEventListener('click', handleCenterPage)
upButton.addEventListener('click', () => {
  changeSlide('up')
})
downButton.addEventListener('click', () => {
  changeSlide('down')
})
fullScreenPage.addEventListener('wheel', (evt) => {
  if(evt.deltaY > 0) {
    handleCenterPage()
  }
})
sliderPage.addEventListener('wheel', (evt) => {
  if (evt.deltaY < 0) {
    handleUpPage()
  } else {
    handleDownPage()
  }
})
mainPage.addEventListener('wheel', (evt) => {
  if (window.pageYOffset === 0 && evt.deltaY < 0 ) {
    handleCenterPage()
  }
})

feedbackFormValidation.enableValidation()
