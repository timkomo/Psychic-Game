

//This is code by Matthew Timko for University of Richmond Coding BootCamp 2018
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoice = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];


document.onkeyup = function(event) { 

var playerChoice = event.key;

{guessesSoFar.push(playerChoice)

}



document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
			

function resetGame()
{guessesLeft=9;
guessesSoFar=[];
computerChoice = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];

}


// var computerChoice = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];

if (playerChoice === computerChoice) {
    
    {wins++ & resetGame()}

    {document.getElementById("playerWins").innerHTML = wins;}

    {alert('You Win!')}


}

else {guessesLeft--}

{document.getElementById("guessesLeft").innerHTML = guessesLeft;}


if (guessesLeft === 0){
    alert("You Lose! Try Again!");
    losses++;
    resetGame();
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = null;
    {document.getElementById("playerLosses").innerHTML = losses;}
    

}



console.log(computerChoice)
console.log(playerChoice)
console.log(wins)
console.log(guessesLeft)
console.log(losses)


}
