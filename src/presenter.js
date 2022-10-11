import Game from "./TyV"

const code= document.querySelector("#secret-number");
const Attempts= document.querySelector("#number-attempts");
const pred= document.querySelector("#prediction");
const random= document.querySelector("#Random");
const secretDiv = document.querySelector("#secretcode-div");
const guessDiv = document.querySelector("#guess-div");
const start =document.querySelector("#Start-button");
const guess = document.querySelector("#Guess-Button");
const triesdiv = document.querySelector("#tries-div");
const restart = document.querySelector("#Restart-Button");
let round;
start.addEventListener("click", () => {
    round = new Game();
    round.setSecretcode(code.value);
    let noBisons=0;
    let bisons="";
    document.getElementById("secret-number").value = "";
    if(Attempts.value!=0){
        round.setAttempts(Attempts.value);
    }
    noBisons=round.checkforBison(code.value);
    bisons=numbertobisons(noBisons);
    secretDiv.innerHTML = "<p>" + ` El codigo secreto tiene  ${bisons} bisons`+ "</p>";
    //secretDiv.innerHTML = "<p>" + ` El codigo secreto es ${round.getSecretcode()} `+ "</p>";
    
});
random.addEventListener("click", () => {
    round = new Game();
    round.setSecretcode(round.randomCode());
    if(Attempts.value!=0){
        round.setAttempts(Attempts.value);
    }
    //secretDiv.innerHTML = "<p>" + ` El codigo secreto es ${round.getSecretcode()} `+ "</p>";
});
guess.addEventListener("click", () => {
    let yourguess=pred.value;
    let result="";
    if(round.youLost()){
        guessDiv.innerHTML = "<p>" + `GAME OVER :'(`+ "</p>";
    }
    result=round.throwGuess(yourguess); 
    round.youWin(result)? guessDiv.innerHTML = "<p>" + ` Ganaste `+ "</p>":guessDiv.innerHTML = "<p>" + ` Your guess is ${result} `+ "</p>";
    triesdiv.innerHTML = "<p>" + ` Your guess is ${round.getTries()} `+`/ ${round.getAttempts()}`+ "</p>";
    
});

restart.addEventListener("click", () => {
    round.replay();
    document.getElementById("secret-number").value = "";
    document.getElementById("prediction").value = "";
    secretDiv.innerHTML = "<p>"+ "" + "</p>";
    guessDiv.innerHTML ="<p>"+ "" + "</p>";
    triesdiv.innerHTML ="<p>"+ "" + "</p>";
});

