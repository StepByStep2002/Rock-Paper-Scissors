# Rock-Paper-Scissors

This is a simple JavaScript game that is played in the console. You choose Rock, Paper or Scissors in the pop-up window and then computer also randomly makes it's choice. This game is played through 5 rounds where you and computer make a choice each time.

Game keeps track of both opponents' choices, shows their score and declares the winner with the highest score
or a tie if both opponents ended with the same score.

When entering a choice, the game assumes that you always write it correctly, writing something else instead of Rock,
Paper or Scissors results in an error. Your choice is not case-sensitive. Whether you enter your choice in lower or 
upper case (Example  “rock”, “ROCK”, “RocK”), game converts it to lower case.

Pseudocode of the game
//Computer randomly chooses a number between 0 and 2
//The chosen number get assigned a string with Rock, Paper or Scissors
//Human enters their choice in the pop-up window, for this project, we assume that player always enters the right value
//Declare variables for players' score
//Write a function that takes both choices, plays a single round and declares it's result with increasing winner's score
//Make a function to show each player's choice, score, plays 5 rounds and declares a winner at the end
