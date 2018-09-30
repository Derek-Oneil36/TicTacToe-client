'use strict'

/*
we are requiring store.js file so we can use the
exported functions in this file.
*/
const store = require('../store.js')

// Will display a green message informing the user the action was successful.
const signUpSuccess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const signInSuccess = function (response) {
  $('#display-message').html('Logged in')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#log-in-form').addClass('hidden')
  $('#log-in-form').removeClass('hidden')
  $('#log-out-button').removeClass('hidden')
}

// Will display a red message informing the user the action failed.
const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const logOutSuccess = function (response) {
  $('#display-message').html('You are now logged out')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#log-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#log-out-button').addClass('hidden')
}

// Will display a red message informing the user the action failed.
const logOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
}

// Will display a green message informing the user the action was successful.
const changePasswordSuccess = function () {
  $('#display-message').html('Your password has changed')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const changePasswordFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const createGameSuccess = function () {
  $('#display-message').html('Game Created!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const createGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const getStatsSuccess = function () {
  $('#display-message').html('Your password has changed')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const getStatsFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

// Will display a green message informing the user the action was successful.
const clickedSuccess = function () {
  $('#display-message').html('Clicked worked')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

// Will display a red message informing the user the action failed.
const clickedFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
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
