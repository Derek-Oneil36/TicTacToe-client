'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onLogIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.targt)
  console.log(formData)
  api.logIn(formData)
    .then(ui.logInSuccess)
    .catch(ui.logInFailure)
}

const onLogOut = function (event) {
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.targt)
  console.log(formData)
  api.changePassword(formData)
    .then(console.log)
    .cath(console.log)
}

module.exports = {
  onSignUp,
  onLogIn,
  onLogOut,
  onChangePassword
}
