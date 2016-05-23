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


function getPlayerMove(playerMove) {
    return getInput(playerMove);
}

function getComputerMove(computerMove) {
    return randomPlay(computerMove);
}
    


var playerWins = 0;
var computerWins = 0;
function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove)    {
        return "Tie. Score: " + [playerWins, computerWins];
    }     
    else if ((playerMove === "rock") && (computerMove === "paper"))   {
        return (computerWins = computerWins + 1) && "Computer Wins. Score: " + [playerWins, computerWins];
    }
    else if ((playerMove === "rock") && (computerMove === "scissors"))    {
        return (playerWins = playerWins + 1) && "Player Wins. Score: " + [playerWins, computerWins];
    }
    else if ((playerMove === "scissors") && (computerMove === "rock"))    {
        return (computerWins = computerWins + 1) && "Computer Wins. Score: " + [playerWins, computerWins];
    }
    else if ((playerMove === "scissors") && (computerMove === "paper"))   {
        return (playerWins = playerWins + 1) && "Player Wins. Score: " + [playerWins, computerWins];
    }
    else if ((playerMove === "paper") && (computerMove === "rock"))   {
        return (playerWins = playerWins + 1) && "Player Wins. Score: " + [playerWins, computerWins];
    }
    else if ((playerMove === "paper") && (computerMove === "scissors"))   {
        return (computerWins = computerWins + 1) && "Computer Wins. Score: " + [playerWins, computerWins];
    }
}

function playHand() {
        return getWinner(getPlayerMove(),getComputerMove());
}

function playToFive()   {
    console.log("Let's play Rock, Paper, Scissors");
    for (;playerWins < 5 && computerWins < 5;)  {
        playHand();
    }
    return "Final score: " + [playerWins, computerWins];
}