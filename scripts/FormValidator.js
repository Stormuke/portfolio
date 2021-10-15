export default class FormValidator {
  constructor(config, formSelector) {
    this._config = config
    this._formElement = formSelector
    this._inputsList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector))
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector)
  }

  _hasInvalidInput() {
    return this._inputsList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  _hasEmptyInput() {
    return this._inputsList.every((inputElement) => {
      return inputElement.value.length === 0
    })
  }
  _addTextError(input) {
    this._errorMessage = this._formElement.querySelector(`#${input.id}-error`)
    input.classList.add(this._config.inputErrorClass)
    this._errorMessage.classList.add(this._config.errorClass)
    this._errorMessage.textContent = input.validationMessage
  }

  _removeTextError(input) {
    this._errorMessage = this._formElement.querySelector(`#${input.id}-error`)
    input.classList.remove(this._config.inputErrorClass)
    this._errorMessage.classList.remove(this._config.errorClass)
    this._errorMessage.textContent = ''
  }

  _enableSubmitButton() {
    this._submitButton.removeAttribute('disabled')
    this._submitButton.classList.remove('form__button_disabled')
  }

  disableSubmitButton() {
    this._submitButton.setAttribute('disabled', true)
    this._submitButton.classList.add('form__button_disabled')
  }

  _checkInputValidity(input) {
    if(!input.validity.valid) {
      this._addTextError(input)
    } else {
      this._removeTextError(input)
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput() || this._hasEmptyInput()) {
      this.disableSubmitButton()
    } else {
      this._enableSubmitButton()
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })

    this._inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input)
        this._toggleButtonState()
      })
    })
  }

  enableValidation() {
    this._setEventListeners()
  }
}
