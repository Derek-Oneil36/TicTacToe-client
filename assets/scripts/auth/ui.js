'use strict'

/*
we are requiring store.js file so we can use the
exported functions in this file.
*/
// const events = require('./events.js')
const store = require('../store.js')
const engine = require('../engine.js')
// const data = require('./api.js')

// Will display a green message informing the user the action was successful.
const signUpSuccess = function () {
  $('#display-message').html('Account Created, Please Sign In.')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const signUpFailure = function () {
  $('#display-message').html('Passwords Do Not Match! Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const signInSuccess = function (response) {
  $('#display-message').html('Logged in.')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#log-out-button').removeClass('hidden')
  $('#create-game').removeClass('hidden')
  $('#game-stats').removeClass('hidden')
}

// Will display a red message informing the user the action failed.
const signInFailure = function () {
  $('#display-message').html('Username and Password Do Not Match! Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const logOutSuccess = function () {
  $('#display-message').html('You Are Now Logged Out.')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#log-out-button').addClass('hidden')
  $('#game-board').addClass('hidden')
  $('#create-game').addClass('hidden')
  $('#game-stats').addClass('hidden')
  delete store.game
}

// Will display a red message informing the user the action failed.
const logOutFailure = function () {
  $('#display-message').html('Failed to Logout, Please Try Again.')
  $('#display-message').css('color', 'red')
}

// Will display a green message informing the user the action was successful.
const changePasswordSuccess = function () {
  $('#display-message').html('Your Password Has Changed.')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const changePasswordFailure = function () {
  $('#display-message').html('Failed to Change Password, Please Try Again.')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const createGameSuccess = function (response) {
  $('#display-message').html('New Game!')
  $('#display-message').css('color', 'green')
  $('#game-board').removeClass('hidden')
  engine.resetGame()
  store.game = response.game
}

// Will display a red message informing the user the action failed.
const createGameFailure = function () {
  $('#display-message').html('New Game Not Created, Please Try Again.')
  $('#display-message').css('color', 'red')
}

// Will display a green message informing the user the action was successful.
const getStatsSuccess = function (data) {
  $('#display-message').html(`You Played: ${data.games.length} Games`)
  $('#display-message').css('color', 'green')
}

// Will display a red message informing the user the action failed.
const getStatsFailure = function () {
  $('#display-message').html('You Are Not Logged In!')
  $('#display-message').css('color', 'red')
}

// Will display a certain game message if the requirements are met.
const clickedSuccess = function () {
  // console.log(store.currentPlayer)
  if (engine.outcome(store.index) === 'Keep Playing') {
    if (store.currentPlayer === 'o') {
      $('#display-message').html("X You're next!")
      $('#display-message').css('color', 'green')
    } else if (store.currentPlayer === 'x') {
      $('#display-message').html('O Your Move!')
      $('#display-message').css('color', 'green')
    }
  }
}

// Will display a red message informing the user the action failed.
const clickedFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
}

// We're exporting functions so they can be used in other files
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  logOutSuccess,
  logOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  getStatsSuccess,
  getStatsFailure,
  clickedSuccess,
  clickedFailure
}
