'use strict'

/*
we are requiring config.js and store.js files so we can use their
exported functions in this file.
*/
const config = require('../config.js')
const store = require('../store.js')

/*
The signup functions allows the user to create and store their game
account on the server using an ajax call with the game api.
*/
const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data: userData
  })
}

/*
The signin function allows the user to sign into the server using the information
provided when they created their game account using ajax requests with the
game api.
*/
const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + 'sign-in',
    method: 'POST',
    data: userData
  })
}

/*
The log out function signs the user out of the server with the ajax request
on the game api.
*/
const logOut = function () {
  return $.ajax({
    url: config.apiUrl + 'sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

/*
change password allows the user to change their password by calling and returning
the ajax call using the change-password api that connects to the game server.
*/
const changePassword = function (password) {
  return $.ajax({
    url: config.apiUrl + 'change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: password
  })
}

/*
create game allows a user to clear the gameboard and start a new game
communicating with the game server by calling and returning the ajax call
on the game api.
*/
const createGame = function () {
  return $.ajax({
    url: config.apiUrl + 'games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}

/*
The get stats function returns all the games played/recorded by the server
that was stored in their account using the ajax call on the game api.
*/
const getStats = function (gameData) {
  return $.ajax({
    url: config.apiUrl + 'games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: gameData
  })
}

/*
the clicked function will return the ajax request to update the gameboard
on the server side.
*/
const clicked = function (index, value) {
  return $.ajax({
    url: config.apiUrl + `games/${store.game.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': `${index}`,
          'value': `${value}`
        },
        'over': `${store.game.over}`
      }
    }
  })
}

// exporting the functions on this file so they can be used in other files.
module.exports = {
  signUp,
  signIn,
  logOut,
  changePassword,
  createGame,
  getStats,
  clicked
}
