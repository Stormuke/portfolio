const enableSubmitButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass)
  submitButton.removeAttribute('disabled')
}

const disableSubmitButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass)
  submitButton.setAttribute('disabled', true)
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

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass) => {
  formElement.addEventListener('submit',(evt) => {
    evt.preventDefault()
  })

  const inputList = Array.from(formElement.querySelectorAll(inputSelector))
  const submitButton = formElement.querySelector(submitButtonSelector)
  inputList.forEach((inputElement)=> {
    inputElement.addEventListener('input',() => {
      toggleButtonState(submitButton, inactiveButtonClass, inputList)
    })
  })
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement)=> {
    setEventListeners(formElement,
      config.inputSelector,
      config.submitButtonSelector,
      config.inactiveButtonClass)
  })
}

