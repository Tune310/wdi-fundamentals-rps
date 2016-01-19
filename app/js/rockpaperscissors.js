////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove;
    if(playerMove === "rock") {
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove === "rock";
  }else if(playerMove === "paper"){
    return "paper"
  }else if (playerMove === "scissors") {
    return "scissors"
  }
}

function getComputerMove(move) {
    var computerMove;
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner= function();
    if(playerMove === "rock"; computerMove === "scissors") {
      return winner('playerWins');
    }else if (playerMove === "paper"; computerMove === "Rock") {
      return winner('playerWins');
    }else if (playerMove === "scissors"; computerMove === "paper") {
     return winner('playerWins');
    }else if (playerMove === "scissors"; computerMove === "scissors") {
          return winner('tie');
        }else if (playerMove === "rock": computerMove === "rock") {
          return winner('tie');
        }else if (playerMove === "paper"; computerMove === "paper") {
          return winner('tie');
        }else {
          return winner('computerWins');
        }
      }
      // git add again

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (i = playerWins, computerWins; i < 5; i += 1) {
      return getWinner();
      return [playerWins, computerWins];
}
