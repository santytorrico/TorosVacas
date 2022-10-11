class Game{
    constructor(){
        this.secretCode=" ";
        this.tries=0;
    }
    setSecretcode(code){
        this.secretCode=code;
    }

    getSecretcode(){
        return this.secretCode;
    }

    throwGuess(guess){
        const sctoarr=this.secretCode.split("");
        const gtoarr=guess.split("");
        let bulls=0;
        let cows=0;
        bulls=this.checkforBulls(sctoarr,gtoarr);
        cows=this.checkforCows(sctoarr,gtoarr);
        return this.numbertoCows(cows)+this.numbertobulls(bulls);

    }

    checkforCows(scarr,garr){
        let cows=0;
        for(let i=0; i<scarr.length;i++){
            for(let j=0; j<garr.length;j++){
                if(i!=j && scarr[i]==garr[j]){
                    cows++
                }
            }
        }
        return cows;
    }

    checkforBulls(scarr,garr){
        let bulls=0;
        for(let i=0; i<scarr.length;i++){
            for(let j=0; j<garr.length;j++){
                if(i==j && scarr[i]==garr[j]){
                    bulls++
                }
            }
        }
        return bulls;
    }

    numbertobulls(number){
        let bulls="";
        bulls= "!".repeat(number);
        return bulls;
    }
    numbertoCows(number){
        let cows="";
        cows= '*'.repeat(number);
        return cows;
    }

    youWin(guess){
        let win = false;
        if(this.throwGuess(guess)=="!!!!"){
            win = true;
        }
        return win;
    }
    youLost(){
        let gameOver = false;
        if(this.tries == 8){
            gameOver = true;
        }
        return gameOver;
    }

     getAttempts(){
        return this.tries;
    }
    replay(){
        this.secretCode = "";
        this.tries = 0;
    }
    randomNumber(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    randomCode(){
        this.secretCode += String(this.randomNumber(0,8));
    }
    
}

export default Game;