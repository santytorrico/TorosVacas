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
            let ternera=0;
            
            bulls=this.checkforBulls(sctoarr,gtoarr);
            cows=this.checkforCows(sctoarr,gtoarr);
            ternera=this.checkforTernera(sctoarr,gtoarr);
            return this.numbertoCows(cows)+this.numbertobulls(bulls)+ this.numbertoTernera(ternera);
        }
        return "You have no more attempts";
        
    }
    test_prime(n)
    {

        if (n===1){
            return false;
        }
        else if(n === 2){
            return true;
        }else
        {
        for(var x = 2; x < n; x++){   
            if(n % x === 0){
                return false;
            }
        }
        return true;  
        }
    }  

    checkforBison(scarr){
        let bisons=0
        for(let i=0; i<scarr.length;i++){
            if(this.test_prime(scarr[i]) ){
                bisons++;
            }
        }
        return bisons;
    }
    
    numbertobisons(number){
        let bisons="";
        bisons= "%".repeat(number);
        return bisons;
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
    checkforTernera(scarr,garr){
        let ternera=0;
        for(let i=0; i<scarr.length;i++){
            for(let j=0; j<garr.length;j++){
                if(i!=j && scarr[i]==garr[j]-1 || i!=j && scarr[i]==garr[j]+1 ){
                    ternera++
                }
            }
        }
        return ternera;
    }
    numbertoTernera(number){
        let ternera="";
        ternera= '#'.repeat(number);
        return ternera;
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