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


let roundsPlayed = 0;
const totalRounds = 5;
let playerWins = 0;
let computerWins = 0;
let ties = 0;
function playRound(playerSelection, computerSelection) {
    const container = document.querySelector(".container");
    let result = document.createElement("p");

    if (roundsPlayed >= totalRounds) {
        result.textContent = `${roundsPlayed} rounds have already been played.
                Refresh to play again!`
        container.appendChild(result);
        return;
    }
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result.textContent = "Round tied.";
        ties++;
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result.textContent = "Computer wins this round! Paper beats rock.";
            computerWins++;
        }
        else {
            result.textContent = "You win this round! Rock beats scissors.";
            playerWins++;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result.textContent = "You win this round! Paper beats rock.";
            playerWins++;
        }
        else {
            result.textContent = "Computer wins this round! Scissors bears paper.";
            computerWins++;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result.textContent = "Computer wins this round! Rock beats scissors.";
            computerWins++;
        }
        else {
            result.textContent = "You win this round! Scissors bears paper.";
            playerWins++;
        }
    }
    else {
        result.textContent = "Bad input! Computer auto wins :)";
        computerWins++;
    }

    roundsPlayed++;
    container.appendChild(result);

    checkIfOver();
}

function checkIfOver() {
    const container = document.querySelector(".container");
    let ending = document.createElement("p");

    if (roundsPlayed >= totalRounds) {
        if (playerWins > computerWins) {
            ending.textContent = "Congrats! You are the winner.";
        }
        else if (playerWins === computerWins) {
            ending.textContent = "It's a tie!";
        }
        else {
            ending.textContent = "The computer takeover is real!";
        }
        container.appendChild(ending);

        let finalScore = document.createElement("p");
        finalScore.textContent = `Final score:
                You       -  ${playerWins}
                Computer  -  ${computerWins}
                Ties      -  ${ties}`;
        container.appendChild(finalScore);
    }
}

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener('click', () => {
    playRound("rock", computerPlay());
});

paperButton.addEventListener('click', () => {
    playRound("paper", computerPlay());
});

scissorsButton.addEventListener('click', () => {
    playRound("scissors", computerPlay());
});