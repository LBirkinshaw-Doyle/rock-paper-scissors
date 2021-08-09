// ALGORITHM

// run the function playGame()
playGame();

// function computerSelection
//create number variable randomChoice
//assign randomChoice a random number between 0 & 1
//if randomChoice <= 0.33
//return 'rock'
//else if randomChoice <= 0.66
//return 'paper'
//else
//return 'scissors'
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

//function playerSelection
//create string variable playerChoice
//create boolean variable keepGoing = True
//while keepGoing is true
//ask the player what choice they make "Please choose from: Rock, paper, or scissors"
//assign playerChoice a string entered by the user
//make playerChoice lowercase
//if playerChoice is not  'rock', 'paper' or 'scissors'
//display an error message
//else
//assign keepGoing False
//end
//return playerChoice
    
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

//function determineWinner(player, computer)
//create a string variable called message
//create a number variable called score
//create a switch statement on input variable player
//in the case that player = 'rock'
//if computer is 'rock'
//assign message: 'It's a draw! Try again!'
//assign score: 0
//return the message and score
//else if computer is 'paper'
//assign message: 'You lose this round! Their paper beats your rock!'
//assign score: -1
//return the message and score
//else
//assign message: 'You win this round! Your rock beats their scissors!'
//assign score: 1
//return the message and score
//in the case that player = 'paper'
//if computer is 'rock'
//assign message: 'You win this round! Your paper beats their rock!'
//assign score: 1
//return the message and score
//else if computer is 'paper'
//assign message: 'It's a draw! Try again!'
//assign score: 0
//return the message and score
//else
//assign message: 'You lose this round! Their scissors beats your paper!'
//assign score: -1
//return the message and score
//in the case that player = 'scissors'
//if computer is 'rock'
//assign message: 'You lose this round! Their rock beats your scissors!'
//assign score: -1
//return the message and score
//else if computer is 'paper'
//assign message: 'You win this round! Your scissors beats their paper!'
//assign score: 1
//return the message and score
//else
//assign message: 'It's a draw! Try again!'
//assign score: 0
//return the message and score
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

//function playRound()
//create string variable player
//create string variable computer
//create string variable message
//create string variable score

//assign player the output of playerSelection()
//assign computer the output of computerSelection()

//assign message and score the output of determineWinner(player, computer)

//display the message
//return the score
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

//function playGame()
//create int variable roundNumber with value 1
//create number variable score
//create array variable scoreCard
//create number variable overallWinner

//display message: "Game on! Best of five, draws don't count!"

//while roundNumber <= 5
//assign score the output of playRound()
//if score is not 0
//increment roundNumber 1
//assign score to scoreCard (append?)
//end

//assign overallWinner the summation of scoreCard
//if overallWinner is > 0
//display the message: "You won! Congratulations!"
//else
//display the message: "You lost! Better luck next time!" 
        
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

