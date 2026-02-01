# Rock-Paper-Scissors

This is a simple JavaScript game that is played in the console. You choose Rock, Paper or Scissors in the poping window
and then computer also randomly makes it's choice. This game is played through 5 rounds where you and computer make a
choice each time.

Game keeps track of both opponents' choices, shows their score and declares the winner with the highest score
or a tie if both opponents ended with the same score.

When entering the choice the game assumes that you always write it correctly, writing something else instead of Rock,
Paper or Scissors results in an error. Your choice is not case-sensetive. Whether you enter your choice in lower or 
Upper case (Example  “rock”, “ROCK”, “RocK”), game converts it to lower case.

Pseudocode of the game
//Computer randomly chooses a number between 0 and 2
//The chosen number get assigned a string with Rock, Paper or Scissors
//Human enters their choice in the pop-up window
//Declare variables for players' score
//Write a function that plays a single round and declares it's result with increasing winner's score
//Write a function that plays 5 rounds of the game, compares scores and declares a winner with the highest score