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

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
