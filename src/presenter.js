import Game from "./TyV"

const code= document.querySelector("#secret-number");
const pred= document.querySelector("#prediction");
const form = document.querySelector("#game-form");
const div = document.querySelector("#secretcode-div");
const div1 = document.querySelector("#guess-div");
const start =document.querySelector("#Start-button");
const guess = document.querySelector("#Guess-Button");
const triesdiv = document.querySelector("#tries-div");
const restart = document.querySelector("#Restart-Button");
let round;
start.addEventListener("click", () => {
    round = new Game();
    round.setSecretcode(code.value);
    div.innerHTML = "<p>" + ` El codigo secreto es ${round.getSecretcode()} `+ "</p>";
    
});

guess.addEventListener("click", () => {
    let yourguess=pred.value;
    if(round.youLost()){
    div1.innerHTML = "<p>" + `GAME OVER :'(`+ "</p>";
    }
    round.youWin(yourguess)? div1.innerHTML = "<p>" + ` Ganaste `+ "</p>":div1.innerHTML = "<p>" + ` Your guess is ${round.throwGuess(yourguess)} `+ "</p>";
    triesdiv.innerHTML = "<p>" + ` Your guess is ${round.getAttempts()} `+"/ 8 "+ "</p>";
    
});
restart.addEventListener("click", () => {
    round.replay();
    document.getElementById("secret-number").value = "";
    document.getElementById("prediction").value = "";
    div.innerHTML = "<p>"+ "" + "</p>";
    div1.innerHTML ="<p>"+ "" + "</p>";
    triesdiv.innerHTML ="<p>"+ "" + "</p>";
});

