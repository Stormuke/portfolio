const handleEditClick = () => {
  document.querySelector(".form__area").classList.remove("form__area_hide");
}

document.querySelector(".footer__button").addEventListener("click", handleEditClick);

const formEditClick = () => {
  document.querySelector(".form__area").classList.add("form__area_hide");
}

document.querySelector(".form__close").addEventListener("click", formEditClick);

const headerEditClick = () => {
  document.querySelector(".header__navigation").classList.toggle("header__navigation_hide");
  document.querySelector('.header__button').classList.toggle('header__button_active');
}

document.querySelector(".header__button").addEventListener("click", headerEditClick);
