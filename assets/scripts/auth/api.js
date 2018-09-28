'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + 'sign-in',
    method: 'POST',
    data: userData
  })
}

const logOut = function () {
  return $.ajax({
    url: config.apiUrl + 'sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

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

const createGame = function (gameData) {
  return $.ajax({
    url: config.apiUrl + 'games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}

const getStats = function (gameData) {
  return $.ajax({
    url: config.apiUrl + 'games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const clicked = function (gameData) {
  return $.ajax({
    url: config.apiUrl + 'games/:id',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: gameData
  })
}

module.exports = {
  signUp,
  signIn,
  logOut,
  changePassword,
  createGame,
  getStats,
  clicked
}
