import Game from "./TyV"

const code= document.querySelector("#secret-number");
const pred= document.querySelector("#prediction");
const form = document.querySelector("#game-form");
const div = document.querySelector("#secretcode-div");
const div1 = document.querySelector("#guess-div");
const start =document.querySelector("#Start-button");
const guess = document.querySelector("#Guess-button");

start.addEventListener("click", () => {
    let round = new Game();
    round.setSecretcode(code.value);
    div.innerHTML = "<p>" + ` El codigo secreto es ${round.getSecretcode()} `+ "</p>";
});

guess.addEventListener("click", () => {
    yourguess=pred.value;
    div1.innerHTML = "<p>" + ` Your guess is ${yourguess} `+ "</p>";
});

