'use strict'

// An empty array that stores our game board
const board = ['', '', '', '', '', '', '', '', '']

// the current player
let currentPlayer = 'X'

// A function that switches current player between 'X' and 'O'
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

/*
A function that adds the current player to a position on the board if
the position is empty, the current player will then switch when we call back
and use the switchPlayer function. Else The player will be alerted if the
position is occupied.
*/
const addPlayer = function (post) {
  if (board[post] === '') {
    board[post] = currentPlayer
    switchPlayer()
  } else {
    console.log('choose another spot')
  }
}

console.log(addPlayer(6))

console.log(addPlayer(5))

module.exports = {
  board,
  addPlayer,
  switchPlayer

}
