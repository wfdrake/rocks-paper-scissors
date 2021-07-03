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

function test() {
    let testString = computerPlay();
    console.log(testString);
}