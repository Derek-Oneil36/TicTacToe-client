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

const outcome = function () {
  const draw = 'Draw Play Again!'

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
  }

  return draw
}
// Write a function that checks if someone wins the game
// const checkForWinner = function() {
// check for top row winner by seeing if all match and are not empty string
// if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
// return 'Winner is ' + board[0]
//  }
// check for all other combos
// middle row
// bottom row
// left column
// middle column
// right column
// right to let diagonal
// left to right diagonal
// check for tie
// else no winner yet
// }

console.log(addPlayer(6))
console.log(addPlayer(5))

module.exports = {
  board,
  addPlayer,
  switchPlayer,
  outcome

}
