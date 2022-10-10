import Game from "./TyV"

const code= document.querySelector("#secret-number");
const Attempts= document.querySelector("#number-attempts");
const pred= document.querySelector("#prediction");
const form = document.querySelector("#game-form");
const div = document.querySelector("#secretcode-div");
const div1 = document.querySelector("#guess-div");
const start =document.querySelector("#Start-button");
const guess = document.querySelector("#Guess-button");
const triesdiv = document.querySelector("#tries-div");
let round;
start.addEventListener("click", () => {
    round = new Game();
    round.setSecretcode(code.value);
    if(Attempts.value!=0){
        round.setAttempts(Attempts.value);
    }
    div.innerHTML = "<p>" + ` El codigo secreto es ${round.getSecretcode()} `+ "</p>";
});

guess.addEventListener("click", () => {
    let yourguess=pred.value;
    div1.innerHTML = "<p>" + ` Your guess is ${round.throwGuess(yourguess)} `+ "</p>";
    triesdiv.innerHTML = "<p>" + ` Your guess is ${round.getTries()} `+`/ ${round.getAttempts()}`+ "</p>";
});

