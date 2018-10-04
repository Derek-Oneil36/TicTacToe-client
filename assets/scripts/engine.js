'use strict'
const store = require('./store.js')
// The game board
const board = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'x'
// the current player
// let currentPlayer = store.currentPlayer

// A function that switches current player between 'X' and 'O'
const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

/*
 A function that will check the outcome of the game and return winner, draw,
 or see if the game should keep going.
*/
const outcome = function () {
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    store.game.over = true
    return store.currentPlayer
  } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    store.game.over = true
    return store.currentPlayer
  } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    store.game.over = true
    return store.currentPlayer
  } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    store.game.over = true
    return store.currentPlayer
  } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    store.game.over = true
    return store.currentPlayer
  } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    store.game.over = true
    return store.currentPlayer
  } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    store.game.over = true
    return store.currentPlayer
  } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    store.game.over = true
    return store.currentPlayer
  } else if (board.every(element => element !== '')) {
    store.game.over = true
    return 'Draw!'
  }
  return 'Keep Playing'
}

/*
A function that adds the current player to a position on the board if
the position is empty, the current player will then switch when we call back
and use the switchPlayer function. Else nothing will happen if theposition is
occupied.
*/
const addPlayer = function (index) {
  // console.log('the index is ', index)
  // checking to see if the spot on the board is empty
  if (board[index] === '' && outcome() === 'Keep Playing') {
    // adding the current player to the spot
    board[index] = currentPlayer
    console.log(board)
    // checking for a winner
    outcome()
    // switches the player
    switchPlayer(currentPlayer)
    // An if that returns the value needed for the board when clicked.
    if (currentPlayer === 'o') {
      store.currentPlayer = 'x'
      return 'x'
    } else {
      store.currentPlayer = 'o'
      return 'o'
    }
  }
}

// resets the local game board array and html grid
const resetGame = function () {
  currentPlayer = 'x'
  store.currentPlayer = 'x'

  // resets the local board array
  for (let i = 0; i < board.length; i++) {
    board[i] = ''
  }
  // resests game borad html
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).text('')
  }
}

// We're exporting the functions so they can be used in other files.
module.exports = {
  addPlayer,
  switchPlayer,
  outcome,
  board,
  resetGame

}
