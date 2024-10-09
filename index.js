
const buttons = document.querySelector(".buttons");
const pScore = document.querySelector(".playerScore");
const cScore = document.querySelector(".computerScore");
const message = document.querySelector(".message");
const winner = document.querySelector(".winner");
const newRound = document.querySelector(".startOver");

let playerScore = 0;
let computerScore = 0;

buttons.addEventListener("click", e => playRound(e));
newRound.addEventListener("click", e => startOver());


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    } 
}

function getPlayerSelection(e){
    return e.target.textContent.toLowerCase();
}

function playRound(e){ 
    const playerSelection = getPlayerSelection(e);
    const computerSelection = getComputerChoice();

    if(playerSelection===computerSelection){
        message.textContent= `You both chose ${computerSelection}.`;
        } else if ((playerSelection==="rock"&&computerSelection==="scissors")||(playerSelection==="paper"&&computerSelection==="rock")||(playerSelection==="scissors"&&computerSelection==="paper")){
            message.textContent = `${playerSelection} beats ${computerSelection}.`;
            playerScore++;
            pScore.textContent = playerScore.toString();
        } else {
            message.textContent =`${computerSelection} beats ${playerSelection}.`;
            computerScore++;
            cScore.textContent = computerScore.toString();
        }
    if(playerScore>=5 || computerScore>=5){
        if(playerScore>computerScore){winner.textContent = "You!"}
        else if (playerScore<computerScore){ winner.textContent = "Computer!";} 
        else winner.textContent = "Draw";
        }
    }

function startOver(){
    playerScore = 0;
    pScore.textContent = playerScore.toString();
    computerScore = 0;
    cScore.textContent = computerScore.toString();
    winner.textContent = "";
    message.textContent = "Player make a selection";
}    

