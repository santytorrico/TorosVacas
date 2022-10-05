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
        //let bulls=0;
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
    // throwGuess(guess){
    //     const sctoarr=this.secretCode.split("");
    //     const gtoarr=this.guess.split("");
    //     let result;
    //     if(guess===this.secretCode){
    //     return "Ganaste";
    //     }
    //     for(let i=0;i<this.secretCode.length();i++){
    //         if(sctoarr[i]==gtoarr[i]){

    //         }
    //     }
    //     return "!!!!";
    // }

    // correctLenght(element){
    //     correct=false;
    //     if(element.length()==4){
    //         correct=true;
    //     }
    //     return correct;
    // }

    // inArray(element){
    //     let exists= 0;
    //     const sctoarr=this.secretCode.split("");
    //     for(let i=0;i<this.secretCode.length();i++){
    //         if(sctoarr[i]==element){
    //             exists++;
    //         }
    //     }
    //     return exists;
    // }
}

export default Game;