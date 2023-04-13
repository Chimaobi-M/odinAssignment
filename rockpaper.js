/* function to get computer's choice */
function getComputerChoice(){
    let list= ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * list.length);
    return choice;
}

/* global variables for scores of the computer and player*/
let computer= 0;
let player= 0;


/* function to play a round of the game and record the wins or losses */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection== 0){
        return "It's a draw! Rock can't beat rock";}

    else if (playerSelection=== "rock" && computerSelection== 1){
        computer++;
        return "You lose! Paper beats rock";}

    else if (playerSelection=== "rock" && computerSelection== 2){
        player++;
        return "You win! Rock beats scissors";}

    else if (playerSelection=== "paper" && computerSelection== 0){
        player++;
        return "You win! Paper beats rock";}

    else if (playerSelection=== "paper" && computerSelection== 1){
        return "It's a draw! Paper can't beat paper";}

    else if (playerSelection=== "paper" && computerSelection== 2){
        computer++;
        return "You lose! Paper can't beat scissors";}

    else if (playerSelection=== "scissors" && computerSelection== 0){
        computer++;
        return "You lose! rock beats scissors";}

    else if (playerSelection=== "scissors" && computerSelection== 1){
        player++;
        return "You win! scissors beats paper";}

    else if (playerSelection=== "scissors" && computerSelection== 2){
        return "It's a draw! Scissors can't beat scissors";}

    else return "Incorrect input! Enter rock or paper or scissors";
        
}
/*event listener for the buttons*/
let button= document.querySelectorAll('button');
button.forEach(button => {
    button.addEventListener('click', playGame,)});

/*function to remove the event listener and end the game when
 the player or computer reaches 5 points*/
function endGame(){if (computer>=5 || player>= 5){button.forEach(button =>
        {button.removeEventListener('click', playGame)});
        if (computer> player){alert( "You lost!")}
        else alert( "You won!");
        alert("game over");}
};


/*function to display the points*/
function showPoints(){
    return "<br> computer:" +" "+ computer +" " + "player: " + player;
}


/* function to play the game and show the results*/
function playGame(){
    
      let computerSelection= getComputerChoice();
      document.getElementById("result").innerHTML= (playRound(this.id, computerSelection) + showPoints());
      endGame();

      
    
    }
