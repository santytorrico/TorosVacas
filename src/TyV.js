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
        this.tries++;
        let bulls=0;
        let cows=0;
        cows=this.checkforCows(sctoarr,gtoarr);
        return cows.toString();
        
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

     correctLenght(element){
         correct=false;
         if(element.length()==4){
             correct=true;
         }
         return correct;
     }
     getAttempts(){
        return this.tries;
     }

    
}

export default Game;