export const languages = {
  ru: {
    owner: {
      name: "Алексей Казаков",
      job: "Front - end разработчик",
      age: "лет",
      city: "Москва"
    },
    startPage: "Начальная Страница",
    sliderPage: "Мои Проекты",
    mainPage: "Главная Страница",
    mesto: {
      title: "Место",
      subtitle: "Одностраничное приложение"
    },
    howToLearn: {
      title: "Научится учиться",
      subtitle: "Мой первый одностраничный сайт карточка"
    },
    russianTravel: {
      title: "Путешествия по России",
      subtitle: "Одностраничный сайт карточка, полностью адаптированный под мобильные устройства"
    },
    nav: {
      about: "Обо мне",
      skills: {
        title: "Мои навыки",
        subtitle: "Я использую в своей работе."},
      contacts: {
        title: "Контакты",
        subtitle: "Хотите узнать больше или просто пообщаться? Напишите мне!",
        social: "Мои социальные сети"
      }
    },
    description: {
      me: "Привет, меня зовут Алексей – я Front-end разработчик из Москвы. Мне интересна разработка и все что связано с ней.",
      study: "Я учусь на курсах \"Веб разработчик\" в Яндекс Практикум.",
      projects: "Готов реализовывать интересные проекты с замечательными людьми."
    },
    button: {
      feedback: "Отправить сообщение",
      send: "Отправить"
    },
    form: {
      title: "Форма обратной связи",
      name: "Введите ваше имя",
      messages: "Введите ваше сообщение"
    }
  },
  eng: {
    owner: {
      name: "Alexey Kazakov",
      job: "Front - end developer",
      age: "years old",
      city: "Moscow"
    },
    startPage: "Start Page",
    sliderPage: "My Project",
    mainPage: "Main Site",
    mesto: {
      title: "Mesto",
      subtitle: "Single page application"
    },
    howToLearn: {
      title: "How to learn",
      subtitle: "My first simple landing page"
    },
    russianTravel: {
      title: "Russian travel",
      subtitle: "Landing page with full mobile adaptivity"
    },
    nav: {
      about: "About me",
      skills: {
        title: "Skills",
        subtitle: "I use in my work"
      },
      contacts: {
        title: "Contacts",
        subtitle: "Want to know more or just chat? You are welcome!",
        social: "My social links"
      }
    },
    description: {
      me: "Hi, I'm Alexey – Front-end developer from Moscow. I'm interested in develop and everything connected with it.",
      study: "I'm studying at courses \"Web developer\" in Yandex.Praktikum.",
      projects: "Ready to implement excellent projects with wonderful people."
    },
    button: {
      feedback: "Send message",
      send: "Send"
    },
    form: {
      title: "Form for your feedback",
      name: "Enter your name",
      messages: "Enter your message"
    }
  }
}

export function switchLanguage(language) {
  //first page
  document.querySelector('.fullscreen__title').textContent = language.owner.name
  document.querySelector('.fullscreen__subtitle').textContent = language.owner.job
  document.querySelector('.fullscreen__footer').textContent = `${language.owner.name} 2021`
  document.querySelector('.page__swap-button_up').textContent = language.startPage
  document.querySelector('.page__swap-button_center').textContent = language.sliderPage
  document.querySelector('.page__swap-button_down').textContent = language.mainPage

  //project page
  document.querySelector('.title_name_mesto').textContent = language.mesto.title
  document.querySelector('.title_name_how-to-learn').textContent = language.howToLearn.title
  document.querySelector('.title_name_russian-travel').textContent = language.russianTravel.title
  document.querySelector('.subtitle_name_mesto').textContent = language.mesto.subtitle
  document.querySelector('.subtitle_name_how-to-learn').textContent = language.howToLearn.subtitle
  document.querySelector('.subtitle_name_russian-travel').textContent = language.russianTravel.subtitle

  //main page
  document.querySelector('.header__title').textContent = language.owner.name
  document.querySelector('.subtitle_place_header').textContent = `${language.owner.name} 28 ${language.owner.age}, ${language.owner.city}`
  document.querySelectorAll('.head__text_type_about').forEach(item => item.textContent = language.nav.about)
  document.querySelectorAll('.head__text_type_skills').forEach(item => item.textContent = language.nav.skills.title)
  document.querySelectorAll('.head__text_type_contacts').forEach(item => item.textContent = language.nav.contacts.title)
  document.querySelector('.description__text_type_me').textContent = language.description.me
  document.querySelector('.description__text_type_study').textContent = language.description.study
  document.querySelector('.description__text_type_projects').textContent = language.description.projects
  document.querySelector('.subtitle_type_use').textContent = language.nav.skills.subtitle
  document.querySelector('.subtitle_type_feedback').textContent = language.nav.contacts.subtitle
  document.querySelector('.footer__text').textContent = language.nav.contacts.social

  //feedback
  document.querySelector('.footer__button_form_feedback').textContent = language.button.feedback
  document.querySelector('.form__button_type_submit').textContent = language.button.send
  document.querySelector('.form_type_feedback').textContent = language.form.title
}
