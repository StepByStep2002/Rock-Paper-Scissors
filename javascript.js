//Write a function that takes both choices, 
// plays a single round and declares it's result with increasing winner's score

function playRound(humanChoice, computerChoice){
    
    switch(humanChoice){
        
        case "rock":
        if(computerChoice === "scissors")
        {
            numberOfRounds++;
            humanScore++;
            console.log(numberOfRounds)
           return result.textContent = `You win! Rock beats Scissors!\n Your score: ${humanScore}\n Computer's score: ${computerScore}`;
        }
        else if (computerChoice === "paper")
        {
            numberOfRounds++;
            computerScore++;
            console.log(numberOfRounds)
            return result.textContent = `You lose! Paper beats Rock!\n Your score: ${humanScore}\n Computer's score: ${computerScore}`;
        }
        else
        {
            numberOfRounds++;
            console.log(numberOfRounds)
            return result.textContent = `It's a tie!\n Your score: ${humanScore}\n Computer's score: ${computerScore}`;
        }

        case "paper":
            if(computerChoice === "rock")
            {
            numberOfRounds++;
            humanScore++;
            return result.textContent = `You win! Paper beats Rock!\n Your score: ${humanScore}\n Computer's score: ${computerScore}`;
            }
        else if (computerChoice === "scissors")
        {
            numberOfRounds++;
            computerScore++;
            return result.textContent = `You lose! Scissors beat Paper\n Your score: ${humanScore}\n Computer's score: ${computerScore}`;
        }
        else
        {
            numberOfRounds++;
            return result.textContent = `It's a tie!\n Your score: ${humanScore}\n Computer's score: ${computerScore} `;
        }

        case "scissors":
        if(computerChoice === "paper")
        {
            numberOfRounds++;
            humanScore++;
            return result.textContent = `You win! Scissors beat Paper\n Your score: ${humanScore}\n Computer's score: ${computerScore}`;
        }
        else if (computerChoice === "rock")
        {
            numberOfRounds++;
            computerScore++;
            return result.textContent = `You lose! Rock beats Scissors\n Your score: ${humanScore}\n Computer's score: ${computerScore}`;
        }
        else
            numberOfRounds++;
            return result.textContent =`It's a tie!\n Your score: ${humanScore}\n Computer's score: ${computerScore} `;

        }

    
}

//Computer chooses a random value between 0 and 2
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    //Each value gets assigned one of the following: Rock, Paper, Scissors
    switch(choice){
    case 0:
        console.log("Computer choose: rock")
        return "rock";

    case 1:
        console.log("Computer choose: paper")
        return "paper";

    case 2:
        console.log("Computer choose: scissors")
        return "scissors";
        
    }
}

function gameEnd()
{
    if(numberOfRounds === 5)
    {
        choiceRock.disabled = true;
        choicePaper.disabled = true;
        choiceScissors.disabled = true;
    
        if(humanScore > computerScore)
        {
            finalResult.textContent = `You win!\nYour score: ${humanScore}\nComputer score: ${computerScore}`
        }
        else if(humanScore < computerScore)
        {
            finalResult.textContent = `You lose!\nYour score: ${humanScore}\nComputer score: ${computerScore}`
        }
        else
        {
            finalResult.textContent = `Game ended in a tie!\nYour score: ${humanScore}\nComputer score: ${computerScore}`
        }
}
}
let humanScore = 0
let computerScore = 0
let numberOfRounds = 0
let result = document.getElementById("results")
let finalResult = document.getElementById("finalResults")
const choiceRock = document.getElementById("rock");
const choicePaper = document.getElementById("paper");
const choiceScissors = document.getElementById("scissors");

choiceRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    gameEnd()
});
choicePaper.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    gameEnd()
});
choiceScissors.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    gameEnd()
});

