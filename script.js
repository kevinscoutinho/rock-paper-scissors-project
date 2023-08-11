
//function that return the computer choice, it choses randomly between rock, paper and scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;   //create a random number between and equal to 1 and 3
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

//function that compare the user's choice to the computer choice to return the winner
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();        //turn both into lower case
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "A tie!";
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection == "paper") {
            return "A tie!";
        } else {
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "A tie!";
        }
    } else {
        return "Unvalid choice. Chose between Rock, Paper or Scissors."
    }
}