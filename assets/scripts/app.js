'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#log-out-button').on('click', authEvents.onLogOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#create-game').on('submit', authEvents.onCreateGame)
  $('#game-stats').on('submit', authEvents.onGetStats)
  $('#0').on('click', authEvents.onClicked)
  $('#1').on('click', authEvents.onClicked)
  $('#2').on('click', authEvents.onClicked)
  $('#3').on('click', authEvents.onClicked)
  $('#4').on('click', authEvents.onClicked)
  $('#5').on('click', authEvents.onClicked)
  $('#6').on('click', authEvents.onClicked)
  $('#7').on('click', authEvents.onClicked)
  $('#8').on('click', authEvents.onClicked)
})
