import Game from "./TyV"

const code= document.querySelector("#secret-number");
const form = document.querySelector("#game-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let round = new Game();
    round.setSecretcode(code.value);
    div.innerHTML = "<p>" + ` El codigo secreto es ${round.getSecretcode()} `+ "</p>";
});
