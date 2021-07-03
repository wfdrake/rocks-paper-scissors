function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {
    let randomInt = getRandomInt(3);
    if (randomInt === 0) {
        return "rock";
    }
    else if (randomInt === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("Round tied.");
        return 1;
    }
    
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("Computer wins this round! Paper beats rock.");
            return 2;
        }
        else {
            console.log("You win this round! Rock beats scissors.");
            return 0;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win this round! Paper beats rock.");
            return 0;
        }
        else {
            console.log("Computer wins this round! Scissors bears paper.");
            return 2;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("Computer wins this round! Rock beats scissors.");
            return 2;
        }
        else {
            console.log("You win this round! Scissors bears paper.");
            return 0;
        }
    }
    else {
        console.log("Bad input! Computer auto wins :)");
        return 2;
    }

}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let roundResult = playRound(playerSelection, computerPlay());
        if (roundResult == 0) {
            playerWins++;
        }
        else if (roundResult == 1) {
            ties++;
        }
        else {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log("Congrats! You are the winner.");
    }
    else if (playerWins === computerWins) {
        console.log("It's a tie!");
    }
    else {
        console.log("The computer takeover is real!");
    }

    console.log(`Final score:
    You       -  ${playerWins}
    Computer  -  ${computerWins}
    Ties      -  ${ties}`);
}