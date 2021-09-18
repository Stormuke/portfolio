const enableSubmitButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass)
  submitButton.removeAttribute('disabled')
}

const disableSubmitButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass)
  submitButton.setAttribute('disabled', true)
}

const addTextError = (inputElement, inputErrorClass, errorMessage, errorClass) => {
  inputElement.classList.add(inputErrorClass)
  errorMessage.classList.add(errorClass)
  errorMessage.textContent = inputElement.validationMessage
}

const removeTextError = (inputElement, inputErrorClass, errorMessage, errorClass) => {
  inputElement.classList.remove(inputErrorClass)
  errorMessage.classList.remove(errorClass)
  errorMessage.textContent = ''
}

const checkValidity = (formElement,inputElement, inputErrorClass, errorClass) => {
  const errorMessage = formElement.querySelector(`#${inputElement.id}-error`)
  if(!inputElement.validity.valid) {
    addTextError(inputElement, inputErrorClass, errorMessage, errorClass)
  } else {
    removeTextError(inputElement, inputErrorClass, errorMessage, errorClass)
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (submitButton, inactiveButtonClass, inputList) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(submitButton, inactiveButtonClass)
  } else {
    enableSubmitButton(submitButton, inactiveButtonClass)
  }
}

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
  formElement.addEventListener('submit',(evt) => {
    evt.preventDefault()
  })

  const inputList = Array.from(formElement.querySelectorAll(inputSelector))
  const submitButton = formElement.querySelector(submitButtonSelector)
  inputList.forEach((inputElement)=> {
    inputElement.addEventListener('input',() => {
      toggleButtonState(submitButton, inactiveButtonClass, inputList)
      checkValidity(formElement,inputElement, inputErrorClass, errorClass)
    })
  })
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement)=> {
    setEventListeners(formElement,
      config.inputSelector,
      config.submitButtonSelector,
      config.inactiveButtonClass,
      config.inputErrorClass,
      config.errorClass)
  })
}

