function playGround(playerchoice,computerchoice){
    playerchoice.toUpperCase();
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
        if(computerchoice=="ROCK"){
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
        if(computerchoice=="PAPER"){
            return "You LOSE! Computer chose "+computerchoice
        }
        else{
            return "You WIN! Computer chose "+computerchoice
        }
    }
}

let choices = ["ROCK","PAPER","SCISSOR"];
let computerchoice = choices[(Math.floor(Math.random(1, 5))) - 1];

let playerchoice = prompt("What do you choose?")

console.log(playGround(playerchoice,computerchoice));