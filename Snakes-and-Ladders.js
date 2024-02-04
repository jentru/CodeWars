// Description
// Introduction
// Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

// Task
// Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
// The Board

// Rules
// 1.  There are two players and both start off the board on square 0.

// 2.  Player 1 starts and alternates with player 2.

// 3.  You follow the numbers up the board in order 1=>100

// 4.  If the value of both die are the same then that player will have another go.

// 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

// 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

// 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

// 8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.
// Returns
// Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

// Return Game over! if a player has won and another player tries to play.

// Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

function SnakesLadders() {
    //   players start at 0
      this.player1 = 0
      this.player2 = 0
    //   player 1 starts game
      this.turn = 1
      this.res = ''
    //   based on the board, the snakes or ladders brings players to different location
      this.snakesOrLadders = {
        2 : 38,
        7: 14,
        8: 31,
        15: 26,
        16: 6,
        21: 42,
        28: 84,
        36: 44,
        46: 25,
        49: 11,
        51: 67,
        62: 19,
        64: 60,
        71: 91,
        74: 53,
        78: 98,
        87: 94,
        89: 68,
        92: 88,
        95: 75,
        99: 80
      }
}
    
SnakesLadders.prototype.play = function(die1, die2) {
    // if there was a previous winner, game is over
      if (this.res.includes('Wins!')){
        return 'Game over!'
      }
      let sum = die1+die2
      let player 
      
    //   Assign which player's turn at the beginning of die roll and get previous location
      if (this.turn == 1){
        player = this.player1
      } else {
        player = this.player2
      }
    
    // use previous location and add dice rolls
      player +=sum
    // see if location has snakes or ladder and assign location accordingly
      player = this.snakesOrLadders[player] || player
    //   check location and reassign if sum is greater than 100
      if (player == 100){
        this.res = `Player ${this.turn} Wins!`
      } else if (player < 100){
        this.res = `Player ${this.turn} is on square ${player}`
      } else if (player > 100){
        player = 100-(player%100)
    //   check new location for snakes or ladder
        player = this.snakesOrLadders[player] || player
        this.res = `Player ${this.turn} is on square ${player}`
      }
    
    // store location information for player's next turn
      if (this.turn ==1){
        this.player1 = player
      } else {
        this.player2 = player
      }
    // check if player can roll again, otherwise it's next players turn
      if (die1 == die2 && player !==100){
        this.turn == this.turn
      } else {
        this.turn == 1? this.turn = 2 : this.turn = 1
      }
      return this.res
}