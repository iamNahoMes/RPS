
function getComputerChoice(){
 let random = Math.floor(Math.random()*3+1);

   if(random==1){
    return "rock";
   }else if(random==2){
    return "paper";
   }else if(random ==3){
    return "scissors";
   }
}

function getPlayerChoice(){
    let userInput = prompt('CHOOSE YOUR WEAPON', 'ROCK, PAPER, SCISSORS' )
    return userInput;
}

let playerScore=0;
let computerScore=0;

function playRound(player, computer){
    player=player.toLowerCase();
// fix the return thing during ui setting
    if(player == "rock" && computer == "scissors"){
       playerScore+=1;
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`);
       return ('You win! Rock smashes Scissors');
    }else if(player == "rock" && computer == "paper"){
       computerScore +=1;
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`);
       return ('You lose! Paper covers Rock');
    }else if(player=="rock" && computer=="rock"){
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`);
       return ("TIE! YOU BOTH CHOSE ROCK");
    }else if(player == "paper" && computer == "rock"){
       playerScore+=1;
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`);
       return ('You win! Paper covers Rock');
    }else if(player == "paper" && computer== "scissors"){
       computerScore+=1;
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`);
       return ("You lose!Scissors cut Paper");
    }else if(player == "paper" && computer =="paper"){
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`);
       return ('TIE!YOU BOTH CHOSE PAPER')
    }else if(player == "scissors" && computer=="paper"){
       playerScore+=1;
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`);
       return ('You win!Scissors cut Paper');
    }else if(player == "scissors" && computer =="rock"){
       computerScore+=1;
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`);
       return ('You lose!Rock smashes Scissors');
    }else if(player =="scissors" && computer=="scissors"){
       console.log(`YOU:${player}: ${playerScore} | COMPUTER:${computer}: ${computerScore}`); 
       return ('TIE! YOU BOTH CHOSE SCISSORS');
    }
}


function playGame(){
    for(let i=0; i<5; i ++){

    const playerChoice = getPlayerChoice();
    const computerChoice= getComputerChoice();

    console.log(playRound(playerChoice, computerChoice))

    }
    if(playerScore == computerScore){
        console.log('YOU ARE BOTH TIED');
        console.log(`YOU:${playerScore} | COMPUTER:${computerScore}`)
    }else if(playerScore > computerScore){
        console.log("YOU BEAT COMPUTER");
        console.log(`YOU:${playerScore} | COMPUTER:${computerScore}`)
    }else if(playerScore < computerScore){
        console.log('COMPUTER BEAT YOU');
        console.log(`YOU:${playerScore} | COMPUTER:${computerScore}`)
    }
}
playGame();