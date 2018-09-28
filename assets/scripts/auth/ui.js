'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const logInSuccess = function (response) {
  $('#display-message').html('Logged in')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#log-in-form').addClass('hidden')
  $('#log-in-form').removeClass('hidden')
  $('#log-out-button').removeClass('hidden')
}

const logInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const logOutSuccess = function (response) {
  $('#display-message').html('You are now logged out')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#log-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#log-out-button').addClass('hidden')
}

const logOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('#display-message').html('Your password has changed')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const createGameSuccess = function () {
  $('#display-message').html('Game Created!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const createGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const getStatsSuccess = function () {
  $('#display-message').html('Your password has changed')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const getStatsFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  logOutSuccess,
  logOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  getStatsSuccess,
  getStatsFailure
}
