function playGround(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    } 
    if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        return "You WIN! Computer chose " + computerChoice ;
    } 
    else {
        return "You LOSE! Computer chose "+ computerChoice ;
    }
}

let choices = ["ROCK", "PAPER", "SCISSOR"];

while (true) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let playerChoice = prompt("What do you choose? Type 'exit' to end the game.");

    // Check if the player wants to exit
    if (playerChoice.toLowerCase() === 'exit') {
        break;
    }

    console.log(playGround(playerChoice, computerChoice));
}