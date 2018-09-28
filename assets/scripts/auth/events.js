'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const engine = require('../engine.js')

const onSignUp = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()
  const userData = getFormFields(event.target)
  console.log(userData)
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()
  const userData = getFormFields(event.target)
  console.log(userData)
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onLogOut = function (event) {
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const onChangePassword = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()
  const password = getFormFields(event.target)
  console.log(password)
  api.changePassword(password)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onCreateGame = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()
  const userData = getFormFields(event.target)
  console.log(userData)
  api.createGame(userData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetStats = function (event) {
  // stops the page from refreshing when action is called
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.getStats(formData)
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
}
// a function that takes the click event and adds 'X s text to what was clicked.'
const onClicked = function (event) {
  event.preventDefault()
  const eventTarget = $(event.target)[0]['id']
  $(event.target).text(engine.addPlayer(eventTarget))
}

module.exports = {
  onSignUp,
  onSignIn,
  onLogOut,
  onChangePassword,
  onCreateGame,
  onGetStats,
  onClicked
}
