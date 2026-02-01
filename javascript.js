
//Declaring the players score variables

let humanScore = 0
let computerScore = 0

//Write a function that takes both choices, 
// plays a single round and declares it's result with increasing winner's score

function playRound(humanChoice, computerChoice){
    
    switch(humanChoice){
        
        case "rock":
        if(computerChoice === "scissors")
        {
            humanScore++;
           return console.log(`You win! Rock beats Scissors!\n Your score: ${humanScore}\n Computer's score: ${computerScore}`);
        }
        else if (computerChoice === "paper")
        {
            computerScore++;
        return console.log(`You lose! Paper beats Rock!\n Your score: ${humanScore}\n Computer's score: ${computerScore}`);
        }
        else
            return console.log(`It's a tie!\n Your score: ${humanScore}\n Computer's score: ${computerScore} `)
            

        case "paper":
            if(computerChoice === "rock")
            {
            humanScore++;
            return console.log(`You win! Paper beats Rock!\n Your score: ${humanScore}\n Computer's score: ${computerScore}`);
            }
        else if (computerChoice === "scissors")
        {
            computerScore++;
            return console.log(`You lose! Scissors beat Paper\n Your score: ${humanScore}\n Computer's score: ${computerScore}`);
        }
        else
            return console.log(`It's a tie!\n Your score: ${humanScore}\n Computer's score: ${computerScore} `)
            

        case "scissors":
        if(computerChoice === "paper")
        {
            humanScore++;
            return console.log(`You win! Scissors beat Paper\n Your score: ${humanScore}\n Computer's score: ${computerScore}`);
        }
        else if (computerChoice === "rock")
        {
            computerScore++;
            return console.log(`You lose! Rock beats Scissors\n Your score: ${humanScore}\n Computer's score: ${computerScore}`);
        }
        else
            return console.log(`It's a tie!\n Your score: ${humanScore}\n Computer's score: ${computerScore} `)

        }
}

//Computer chooses a random value between 0 and 2
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    //Each value gets assigned one of the following: Rock, Paper, Scissors
    switch(choice){
    case 0:
        return "rock";

    case 1:
        return "paper";

    case 2:
        return "scissors";
    }
}

//Player enters their own value, 
// for this project, we assume that player always enters the right value
function getHumanChoice(){
    let choice = prompt("Enter your choice: ")
    choice = choice.toLowerCase()
    return choice;
}

//Make a function to show each player's choice, score, 
// plays 5 rounds and declares a winner at the end
function playGame(){
    let rounds = 0;
    while(rounds < 5)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Computer's choice: ${computerSelection}`);
        console.log(`Your choice: ${humanSelection}`);
        playRound(humanSelection, computerSelection)
        rounds++;
    }
    if(humanScore > computerScore) 
        console.log(`You have won!`)
    else if (humanScore == computerScore)
        console.log(`You have lost.`)
    else 
        console.log(`Game ended in a tie`)
}

console.log(playGame());
 