
playGame();

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    } 
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors? ");
    return humanChoice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore>computerScore){console.log("You are the winner!");}
    else if (humanScore<computerScore){ console.log("Computer is the winner");} 
    else console.log("Draw");


    function playRound(humanChoice, computerChoice){
        if(humanChoice.toLowerCase()===computerChoice){
            console.log(`This is a draw! You both chose ${computerChoice}.`);
    
        } else if ((humanChoice.toLowerCase()==="rock"&&computerChoice==="scissors")||(humanChoice.toLowerCase()==="paper"&&computerChoice==="rock")||(humanChoice.toLowerCase()==="scissors"&&computerChoice==="paper")){
            console.log(`You win! ${humanChoice.toLowerCase()} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
    }
    }
}