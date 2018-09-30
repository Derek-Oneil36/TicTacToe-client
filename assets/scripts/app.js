'use strict'

// We are requiring the events.js file so we can use the exported functions.
const authEvents = require('./auth/events.js')

$(() => {
  /* We are using a jQuery call on the sign-up-form class
  to trigger the onSignUp function once submit is heard by the event listener.
  */
  $('#sign-up-form').on('submit', authEvents.onSignUp)

  /* We are using a jQuery call on the sign-in-form class
  to trigger the onSignIn function once submit is heard by the event listener.
  */
  $('#sign-in-form').on('submit', authEvents.onSignIn)

  /* We are using a jQuery call on the log-out-button class
  to trigger the onLogOut function once click is heard by the event listener.
  */
  $('#log-out-button').on('click', authEvents.onLogOut)

  /* We are using a jQuery call on the change-password-form class
  to trigger the onChangePassword function once submit is heard by the
  event listener.
  */
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  /* We are using a jQuery call on the create-game class
  to trigger the onCreateGame function once submit is heard by the event listener.
  */
  $('#create-game').on('submit', authEvents.onCreateGame)

  /* We are using a jQuery call on the game-stats class
  to trigger the onGetStats function once submit is heard by the event listener.
  */
  $('#game-stats').on('submit', authEvents.onGetStats)

  /* We are using a jQuery call on the classes 0 - 9
  to trigger the onClicked function once click is heard by the event listener.
  */
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
