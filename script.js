
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
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt();
        while (playerSelection.toLowerCase() != "rock" &&  
        playerSelection.toLowerCase() != "paper" &&
        playerSelection.toLowerCase() != "scissors") {
            console.log("Invalid choice. Chose between Rock, Paper or Scissors.");
            playerSelection = prompt();
            if (playerSelection == "break") {
                break;
            } 
        }
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult == "You win! Rock beats Scissors" || 
        roundResult == "You win! Paper beats Rock" || 
        roundResult == "You win! Scissors beats Paper") {
            playerScore++;
        } else if (roundResult == "You lose! Paper beats Rock" ||
        roundResult == "You lose! Scissors beats Paper" ||
        roundResult == "You lose! Rock beats Scissors") {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }
    
    if (playerScore == computerScore) {
        console.log("A tie! Try again.");
    } else if (playerScore > computerScore) {
        console.log("Congratulations. You Win!");
    } else {
        console.log("You lose! Better luck next time.")
    }
}