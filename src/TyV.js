class Game{
    constructor(){
        this.secretCode=" ";
        this.tries=0;
        this.attempts=8;

    }
    setSecretcode(code){
        this.secretCode=code;
    }

    getSecretcode(){
        return this.secretCode;
    }

    throwGuess(guess){
        if(this.tries <this.getAttempts()){
            const sctoarr=this.secretCode.split("");
            const gtoarr=guess.split("");
            this.tries++;
            let bulls=0;
            let cows=0;
            bulls=this.checkforBulls(sctoarr,gtoarr);
            cows=this.checkforCows(sctoarr,gtoarr);
            let terneras = this.checkforTerneras(this.secretCode,guess);
            return this.numbertoCows(cows)+this.numbertobulls(bulls)+terneras;
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

    
    isPrime(n){
    
      if (n===1){
        return false;
      }
      else if(n === 2){
        return true;
      }else{
        for(var x = 2; x < n; x++){
          if(n % x === 0){
            return false;
          }
        }
        return true;  
      }
    }
    checkforBison(){
        let prime=false;
        if(this.isPrime(parseInt(this.getSecretcode()))==true){
            prime=true;
        }
        return prime;

    }

    checkforTerneras(scarr,garr){
        let ternera=0;
        const stocarr=scarr.split("");
        const gtoarr=garr.split("");    
        for(let i=0; i<stocarr.length;i++){
            for(let j=0; j<gtoarr.length;j++){
                if(gtoarr[i]-1==stocarr[j]){
                    ternera++;
                }
                if(gtoarr[i]==stocarr[j]-1){
                    ternera++;
                }
            }            
        }
        let total = "#".repeat(ternera);
        return total;
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
        if(guess=="!!!!"){
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

    replay(){
        this.secretCode = "";
        this.tries = 0;
        this.attempts =8;
    }
    randomNumber(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    randomCode(){
        let result="";
        for(let i=0; i<4;i++){
            result += String(this.randomNumber(0,8));
        }
        return result;
    }
    getAttempts(){
        return this.attempts;
    }
    setAttempts(nAttempts){
        this.attempts=nAttempts;
    }
    getTries(){
        return this.tries;
    }

    
}

export default Game;