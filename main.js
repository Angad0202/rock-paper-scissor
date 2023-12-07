function playGround(playerchoice,computerchoice){
    playerchoice = playerchoice.toUpperCase();
    if(playerchoice=="ROCK"){
        if(computerchoice=="ROCK"){
            return "It's a draw!"
        }
        if(computerchoice=="PAPER"){
            return "You LOSE! Computer chose "+computerchoice
        }
        else{
            return "You WIN! Computer chose "+computerchoice
        }
    }
    if(playerchoice=="PAPER"){
        if(computerchoice=="PAPER"){
            return "It's a draw!"
        }
        if(computerchoice=="SCISSOR"){
            return "You LOSE! Computer chose "+computerchoice
        }
        else{
            return "You WIN! Computer chose "+computerchoice
        }
    }
    if(playerchoice=="SCISSOR"){
        if(computerchoice=="SCISSOR"){
            return "It's a draw!"
        }
        if(computerchoice=="ROCK"){
            return "You LOSE! Computer chose "+computerchoice
        }
        else{
            return "You WIN! Computer chose "+computerchoice
        }
    }
}

let choices = ["ROCK", "PAPER", "SCISSOR"];

while (true) {
    let computerchoice = choices[Math.floor(Math.random() * 3)];
    let playerchoice = prompt("What do you choose? Type 'exit' to end the game.");

    // Check if the player wants to exit
    if (playerchoice.toLowerCase() === 'exit') {
        break; // Exit the loop
    }

    console.log(playGround(playerchoice, computerchoice));
}