export const initialFeedback = [
  {
    name: 'Alexey Kazakov',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.'
  }]

export const initialSkills = [
  {name: 'HTML 5', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/file_type_html_icon_130541.svg', href: 'https://ru.wikipedia.org/wiki/HTML5'},
  {name: 'CSS', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/file_type_css_icon_130661.svg', href: 'https://ru.wikipedia.org/wiki/CSS'},
  {name: 'JavaScript', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/javascript_icon_130900.svg', href: 'https://ru.wikipedia.org/wiki/JavaScript'},
  {name: 'Webpack', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/webpack_original_logo_icon_146300.svg', href: 'https://ru.wikipedia.org/wiki/webpack'},
  {name: 'Figma', image: 'https://raw.githubusercontent.com/Stormuke/portfolio/e53f0411e92f89977253598a86a34e8635d96001/src/images/figma_logo_icon_170157.svg', href: 'https://ru.wikipedia.org/wiki/Figma'}
]


export const validationFormConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_visible'
}
export const pages = Array.from(document.querySelectorAll('.page'))
export const handleRuButton = document.querySelector('.page__languages_type_ru')
export const handleEngButton = document.querySelector('.page__languages_type_eng')
export const handleScrollPageButton = document.querySelector('.page__button')
export const handleAnchors = document.querySelectorAll('a[href*="#"]')
export const modalPopupFeedback = document.querySelector('.popup_form_feedback')
export const handleOpenPopupButton = document.querySelector('.footer__button')
export const burgerMenuButton = document.querySelector('.header__button')
export const burgerMenu = document.querySelector('.header__navigation')
export const modalSubmitForm = document.querySelector('.form_opened')
export const popups = Array.from(document.querySelectorAll('.popup'))
export const slides = document.querySelectorAll('.header__main-illustration')
export const feedbackForm = document.forms["form_message"]
export const skillsCellTemplate = document.querySelector('.skills__description-cell-template').content.querySelector('.skills__description-cell')
export const skillsContainer = document.querySelector('.skills__description')
export const fullScreenPage = document.querySelector('.fullscreen')
export const sliderPage = document.querySelector('.slider')
export const mainPage = document.querySelector('.head')
export const handleScrollUpButton = document.querySelector('.page__swap-button_up')
export const handleScrollDownButton = document.querySelector('.page__swap-button_down')
export const handleScrollCenterButton = document.querySelector('.page__swap-button_center')
export const upButton = document.querySelector('.controls__button_up')
export const downButton = document.querySelector('.controls__button_down')
export const container = document.querySelector('.slider')
export const sideBar = document.querySelector('.slider__container')
export const mainSlide = document.querySelector('.main-slide')
export const slidesCount = mainSlide.querySelectorAll('div').length
export const handleAddFeedbackName = document.form_message['form_name']
export const handleAddFeedbackText = document.form_message['form_message']
export const elementTemplate = document.querySelector('.footer__template').content
export const cardsContainer = document.querySelector('.footer__container')
