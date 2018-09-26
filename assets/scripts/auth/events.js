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

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.targt)
  console.log(formData)
  api.signIn(formData)
    .then(console.log)
     .catch(console.log)
}

const onSignOut = function (event) {
  api.signOut()
    .then(console.log)
     .catch(console.log)
}

const changePassword = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.targt)
  console.log(formData)
  api.changePassword(formData)
    .then(console.log)
     .cath(console.log)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  changePassword
}
