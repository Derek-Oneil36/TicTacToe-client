'use strict'

// The game board
const board = ['', '', '', '', '', '', '', '', '']

// the current player
let currentPlayer = 'x'

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
    return 'The Winner is ' + board[0]
  } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    return 'The Winner is ' + board[3]
  } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    return 'The Winner is ' + board[6]
  } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    return 'The Winner is ' + board[0]
  } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    return 'The Winner is ' + board[1]
  } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    return 'The Winner is ' + board[2]
  } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    return 'The Winner is ' + board[0]
  } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    return 'The Winner is ' + board[3]
  } else if (board.every(element => element !== '')) {
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
const addPlayer = function (post) {
  console.log(post)
  // checking to see if the spot on the board is empty
  if (board[post] === '' && outcome(board) === 'Keep Playing') {
    // adding the current player to the spot
    board[post] = currentPlayer
    // checking for a winner
    outcome(board)
    // switches the player
    switchPlayer(currentPlayer)
    // returns the currentPlayer
    return currentPlayer
  }
  // return outcome(board)
}

// We're exporting the functions so they can be used in other files.
module.exports = {
  addPlayer,
  switchPlayer,
  outcome,
  currentPlayer

}
