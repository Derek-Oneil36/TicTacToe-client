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

  /* We are using a jQuery call on the change-password-form class
  to trigger the onChangePassword function once submit is heard by the
  event listener.
  */
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  /* We are using a jQuery call on the create-game class
  to trigger the onCreateGame function once click is heard by the event listener.
  */
  $('#create-game').on('click', authEvents.onCreateGame)

  /* We are using a jQuery call on the log-out-button class
  to trigger the onLogOut function once click is heard by the event listener.
  */
  $('#log-out-button').on('click', authEvents.onLogOut)

  /* We are using a jQuery call on the game-stats class
  to trigger the onGetStats function once click is heard by the event listener.
  */
  $('#game-stats').on('click', authEvents.onGetStats)

  /* We are using a jQuery call on the classes 0 - 9
  to trigger the onClicked function once click is heard by the event listener.
  */
  $('#0').on('click', authEvents.onClicked)// .data(0)
  $('#1').on('click', authEvents.onClicked)// .data(1)
  $('#2').on('click', authEvents.onClicked)// .data(2)
  $('#3').on('click', authEvents.onClicked)// .data(3)
  $('#4').on('click', authEvents.onClicked)// .data(4)
  $('#5').on('click', authEvents.onClicked)// .data(5)
  $('#6').on('click', authEvents.onClicked)// .data(6)
  $('#7').on('click', authEvents.onClicked)// .data(7)
  $('#8').on('click', authEvents.onClicked)// .data(8)
})
