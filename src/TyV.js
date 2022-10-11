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
        if(this.tries <8){
            const sctoarr=this.secretCode.split("");
            const gtoarr=guess.split("");
            this.tries++;
            let bulls=0;
            let cows=0;
            cows=this.checkforCows(sctoarr,gtoarr);
            return cows.toString();
        }
        return "You have no more attempts";
        
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
    
}

export default Game;