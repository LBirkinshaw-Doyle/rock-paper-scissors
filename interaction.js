/*
playGame();
function computerSelection () {
    let randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        return 'rock';
    } else if (randomChoice <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function playerSelection () {
    let playerChoice;
    let keepGoing = true;

    while (keepGoing) {
        playerChoice = prompt("Please choose from: Rock, paper or scissors").toLowerCase();
        if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
            alert("ERROR! Your entry was not recognised.");
        } else {
            keepGoing = false;
        }
    }
    return playerChoice;
}
function determineWinner (player, computer) {
    let message;
    let score

    switch (player) {
        case 'rock':
            if (computer == 'rock') {
                message = "It's a draw! Try again!";
                score = 0;
                return [message, score];
            } else if (computer == 'paper') {
                message = 'You lose this round! Their paper beats your rock!';
                score = -1;
                return [message, score];
            } else {
                message = 'You win this round! Your rock beats their scissors!';
                score = 1;
                return [message, score];
            }
            break;
        case 'paper':
            if (computer == 'rock') {
                message = 'You win this round! Your paper beats their rock!';
                score = 1;
                return [message, score];
            } else if (computer == 'paper') {
                message = "It's a draw! Try again!";
                score = 0;
                return [message, score];
            } else {
                message = 'You lose this round! Their scissors beats your paper!';
                score = -1;
                return [message, score]
            }
            break;
        case 'scissors':
            if (computer == 'rock') {
                message = 'You lose this round! Their rock beats your scissors!';
                score = -1;
                return [message, score]
            } else if (computer == 'paper') {
                message = 'You win this round! Your scissors beats their paper!';
                score = 1;
                return [message, score]
            } else {
                message = "It's a draw! Try again!";
                score = 0;
                return [message, score]
            }
            break;
        default:
            console.log("Error Something Went Wrong")

    }
}
function playRound () {
    let player;
    let computer;
    let message; 
    let score;

    player = playerSelection();
    computer = computerSelection();

    [message, score] = determineWinner(player, computer);
    console.log(message);
    return score;
}
function playGame () {
    let roundNumber = 1;
    let score = 0;
    let scoreCard = [];
    let overallWinner = 0;

    const summation = (accumulator, currentValue) => accumulator + currentValue;

    console.log("Game On! Best of five, draws don't count!");

    while (roundNumber <= 5) {
        score = playRound()
        if (score != 0) {
            roundNumber++
            scoreCard.push(score);
        }
    }
    overallWinner = scoreCard.reduce(summation);
    if (overallWinner > 0) {
        console.log("You won! Congratulations!")
    } else {
        console.log("You lost! Better luck next time!")
    }
    console.log("Refresh the page to try again.")
}
*/

let playerScore = 0;
let compScore = 0;
let playerChoice = "";
let compChoice = "";



function playGame () {
    playBtn.classList.add('hide');
    let roundNumber = 0;

    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('v-flex')
    grandContainer.appendChild(scoreContainer)
    
    const scoreText = document.createElement('div');
    scoreText.textContent = "Score";
    scoreText.classList.add('score');
    scoreContainer.appendChild(scoreText);

    const dispScores = document.createElement('div');
    dispScores.textContent = playerScore + " : " + compScore;
    dispScores.classList.add('score');
    scoreContainer.appendChild(dispScores);

    if (roundNumber == 5) {
        endGame();
        return;
    }
    else {
        playerSelection();
    }

    
}

function playerSelection () {
    const playerPromt = document.createElement('div');
    playerPromt.textContent = "CHOOSE YOUR WEAPON!";
    playerPromt.classList.add('score');
    grandContainer.appendChild(playerPromt);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('h-flex');
    grandContainer.appendChild(buttonContainer);

    const rockButton = document.createElement('div');
    rockButton.classList.add('button');
    rockButton.textContent = 'Rock'
    buttonContainer.appendChild(rockButton);

    const paperButton = document.createElement('div');
    paperButton.classList.add('button');
    paperButton.textContent = 'Paper'
    buttonContainer.appendChild(paperButton);

    const scissorsButton = document.createElement('div');
    scissorsButton.classList.add('button');
    scissorsButton.textContent = 'Scissors'
    buttonContainer.appendChild(scissorsButton);

    rockButton.addEventListener('click', () => {playerChoice = 'rock'; rockButton.classList.add('clicked');});
    paperButton.addEventListener('click', () => {playerChoice = 'paper'; paperButton.classList.add('clicked');});
    scissorsButton.addEventListener('click', () => {playerChoice = 'scissors'; scissorsButton.classList.add('clicked');});

    compChoice = computerSelection();

    window.addEventListener('transitionend', countdown);
}

function computerSelection () {
    let randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        return 'rock';
    } else if (randomChoice <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function countdown (e) {
    if (e.propertyName != 'transform') return;
    console.log(playerChoice);
    console.log(compChoice);
}

const grandContainer = document.querySelector('#grand-container')
const playBtn = document.getElementById('playButton');
playBtn.addEventListener('click', playGame);

