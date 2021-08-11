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



function createScores () {
    playBtn.classList.add('hide');

    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('v-flex')
    grandContainer.appendChild(scoreContainer)
    
    const scoreText = document.createElement('div');
    scoreText.textContent = "Score";
    scoreText.classList.add('score');
    scoreText.id = 'scoreText'
    scoreContainer.appendChild(scoreText);

    const dispScores = document.createElement('div');
    dispScores.textContent = playerScore + " : " + compScore;
    dispScores.classList.add('score');
    dispScores.id = 'dispScores'
    scoreContainer.appendChild(dispScores);

    playerSelection();    
}

function playerSelection () {
    const playerPromt = document.createElement('div');
    playerPromt.textContent = "CHOOSE YOUR WEAPON!";
    playerPromt.classList.add('score');
    playerPromt.id = 'playerPromt';
    grandContainer.appendChild(playerPromt);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('h-flex');
    buttonContainer.id = 'buttonContainer'
    grandContainer.appendChild(buttonContainer);

    const rockButton = document.createElement('div');
    rockButton.classList.add('choice');
    rockButton.textContent = 'Rock';
    buttonContainer.appendChild(rockButton);

    const paperButton = document.createElement('div');
    paperButton.classList.add('choice');
    paperButton.textContent = 'Paper'
    buttonContainer.appendChild(paperButton);

    const scissorsButton = document.createElement('div');
    scissorsButton.classList.add('choice');
    scissorsButton.textContent = 'Scissors'
    buttonContainer.appendChild(scissorsButton);

    rockButton.addEventListener('click', () => {playerChoice = 'rock'; rockButton.classList.add('clicked');});
    paperButton.addEventListener('click', () => {playerChoice = 'paper'; paperButton.classList.add('clicked');});
    scissorsButton.addEventListener('click', () => {playerChoice = 'scissors'; scissorsButton.classList.add('clicked');});

    compChoice = computerSelection();

    rockButton.addEventListener('transitionend', countdown);
    paperButton.addEventListener('transitionend', countdown);
    scissorsButton.addEventListener('transitionend', countdown);
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

function removeClass (e) {
    if (e.propertyName != 'transform') return;
    e.target.classList.remove('pulse')
}

function countdown (e) {
    if (e.propertyName != 'transform') return;

    grandContainer.removeChild(document.getElementById('playerPromt'));
    const buttonContainer = document.getElementById('buttonContainer');
    while (buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild)
    }

    const countdownButton = document.createElement('div');
    countdownButton.classList.add('button');
    countdownButton.id = 'countdownButton'
    countdownButton.textContent = 3
    buttonContainer.appendChild(countdownButton);

    let counter = 3;
    let interval = setInterval(function() {
        if (counter == 0) {
            clearInterval(interval);
            displayWinner();
            return;
        }
        document.getElementById('countdownButton').textContent = counter;
        document.getElementById('countdownButton').classList.add('pulse');
        counter--;
    }, 1000, counter);

    countdownButton.addEventListener('transitionend', removeClass)
}

function determineWhoWon (playerChoice, compChoice) {
    switch (playerChoice) {
        case 'rock':
            if (compChoice == 'rock') return 'draw';
            else if (compChoice == 'paper') return 'computer';
            else return 'player';
        case 'paper':
            if (compChoice == 'rock') return 'player';
            else if (compChoice == 'paper') return 'draw';
            else return 'computer';
        case 'scissors':
            if (compChoice == 'rock') return 'computer';
            else if (compChoice == 'paper') return 'player';
            else return 'draw';
        default:
        break
    }

}

function displayWinner () {
    const buttonContainer = document.getElementById('buttonContainer');
    while (buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild)
    }

    const player = document.createElement('div');
    player.classList.add('button');
    player.textContent = playerChoice;
    buttonContainer.appendChild(player);

    const computer = document.createElement('div');
    computer.classList.add('button');
    computer.textContent = compChoice;
    buttonContainer.appendChild(computer);

    let whoWon = determineWhoWon(playerChoice, compChoice);
    switch (whoWon) {
        case 'player':
            player.classList.add('clicked');
            playerScore++;
            document.getElementById('dispScores').textContent = playerScore + " : " + compScore;
        break;
        case 'computer':
            computer.classList.add('clicked');
            compScore++;
            document.getElementById('dispScores').textContent = playerScore + " : " + compScore;
        break;
        case 'draw':
            player.classList.add('clicked');
            computer.classList.add('clicked');
        break;
        default:
        break;
    }

    const nextRound = document.createElement('div');
    nextRound.classList.add('next');
    nextRound.textContent = 'Next'
    nextRound.id = 'nextRound';
    grandContainer.appendChild(nextRound);

    nextRound.addEventListener('click', continueGame)
}

function continueGame () {
    clearScreen()
    if (playerScore == 3) winScreen();
    else if (compScore == 3) lossScreen();
    else playerSelection();
}

function winScreen () {
    const winMessage = document.createElement('div');
    winMessage.classList.add('score');
    winMessage.textContent = 'You Win! Congratualations!'
    winMessage.id = 'winMessage';
    grandContainer.appendChild(winMessage);
    playAgain();
}

function lossScreen () {
    const lossMessage = document.createElement('div');
    lossMessage.classList.add('score');
    lossMessage.textContent = 'You Lose! Comiserations!'
    lossMessage.id = 'lossMessage';
    grandContainer.appendChild(lossMessage);
    playAgain();
}

function playAgain () {
    const playAgainButton = document.createElement('div');
    playAgainButton.classList.add('next');
    playAgainButton.textContent = 'Play Again?';
    grandContainer.appendChild(playAgainButton);

    playAgainButton.addEventListener('click', () => {
        while (!grandContainer.lastChild.classList.contains('start')) {
            grandContainer.removeChild(grandContainer.lastChild)
        }
        playBtn.classList.remove('hide');
        playerScore = 0;
        compScore = 0;
        playerChoice = "";
        compChoice = "";
    })
    
}

function clearScreen () {
    while (!grandContainer.lastChild.classList.contains('v-flex')) {
        grandContainer.removeChild(grandContainer.lastChild)
    }
}

const grandContainer = document.querySelector('#grand-container')
const playBtn = document.getElementById('playButton');
playBtn.addEventListener('click', createScores);

