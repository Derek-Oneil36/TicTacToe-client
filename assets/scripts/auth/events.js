'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onLogIn = function (event) {
  // stops the page from refreshing when action is called
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
  // stops the page from refreshing when action is called
  event.preventDefault()
  const formData = getFormFields(event.targt)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .cath(ui.changePasswordFailure)
}

const onCreateGame = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()
  const formData = getFormFields(event.targt)
  console.log(formData)
  api.createGame(formData)
    .then(ui.createGameSuccess)
    .cath(ui.createGameFailure)
}

const onGetStats = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()
  const formData = getFormFields(event.targt)
  console.log(formData)
  api.getStats(formData)
    .then(ui.getStatsSuccess)
    .cath(ui.getStatsFailure)
}
/* a function that takes the click event and adds 'X s text to what was clicked.'
const onClicked = function (event) {
  event.preventDefault()

  $(event.target).text('X')
}
*/
module.exports = {
  onSignUp,
  onLogIn,
  onLogOut,
  onChangePassword,
  onCreateGame,
  onGetStats
}
