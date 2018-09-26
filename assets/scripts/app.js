'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#log-in-form').on('submit', authEvents.onSignIn)
  $('#log-out-button').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onchangePassword)
})
