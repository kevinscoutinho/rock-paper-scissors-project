
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
function playRound (e) {
    const computerChoiceImage = document.querySelector('div.computer-choice-image');
    const playerChoiceImage = document.querySelector('div.player-choice-image');
    let playerSelection = e.target.id.toLowerCase();
    let computerSelection = getComputerChoice();
    
    if (document.querySelector('div.computer-choice-image img')) {
        computerChoiceImage.firstElementChild.remove();
    }

    if (document.querySelector('div.player-choice-image img')) {
        playerChoiceImage.firstElementChild.remove();
    }

    if (computerSelection == "rock") {
        computerChoiceImage.appendChild(imgRock);
    } else if (computerSelection == "paper") {
        computerChoiceImage.appendChild(imgPaper);
    } else {
        computerChoiceImage.appendChild(imgScissors);
    }

    if (playerSelection == "rock") {
        playerChoiceImage.appendChild(imgRock2);
    } else if (playerSelection == "paper") {
        playerChoiceImage.appendChild(imgPaper2);
    } else {
        playerChoiceImage.appendChild(imgScissors2);
    }

    if (Number(computerScore.textContent) === 5 || Number(playerScore.textContent) === 5) {
        computerScore.textContent = 0;
        playerScore.textContent = 0;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            partialResult.textContent = "A tie!";
        } else if (computerSelection == "paper") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            partialResult.textContent = "You lose! Paper beats Rock";
            verifyWinner();
        } else {
            partialResult.textContent = "You win! Rock beats Scissors";
            playerScore.textContent = Number(playerScore.textContent) + 1;
            verifyWinner();
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            partialResult.textContent = "You win! Paper beats Rock";
            playerScore.textContent = Number(playerScore.textContent) + 1;
            verifyWinner();
        } else if (computerSelection == "paper") {
            partialResult.textContent = "A tie!";
        } else {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            partialResult.textContent = "You lose! Scissors beats Paper";
            verifyWinner();
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            partialResult.textContent = "You lose! Rock beats Scissors";
            verifyWinner();
        } else if (computerSelection == "paper") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            partialResult.textContent = "You win! Scissors beats Paper";
            verifyWinner();
        } else {
            partialResult.textContent = "A tie!";
        }
    }
}

//function that verify if there is a winner
function verifyWinner() {
    if (Number(computerScore.textContent) === 5) {
        partialResult.textContent = "You lose! Better luck next time."
    } else if (Number(playerScore.textContent) === 5){
        partialResult.textContent = "Congratulations. You Win!"
    }
}

//targeting buttons and divs to receive the player choice and show the result//
const buttons = document.querySelectorAll('button');
const partialResult = document.querySelector('p.partial-result');
const playerScore = document.querySelector('p.player-score');
const computerScore = document.querySelector('p.computer-score');

computerScore.textContent = 0;
playerScore.textContent = 0;

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

const imgRock = new Image();
const imgPaper = new Image();
const imgScissors = new Image();
const imgRock2 = new Image();
const imgPaper2 = new Image();
const imgScissors2 = new Image();


imgRock.src = "./images/rock.jpg";
imgPaper.src = "./images/paper.jpg";
imgScissors.src = "./images/scissors.jpg";
imgRock2.src = "./images/rock.jpg";
imgPaper2.src = "./images/paper.jpg";
imgScissors2.src = "./images/scissors.jpg";
