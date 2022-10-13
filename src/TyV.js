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
            return this.numbertoCows(cows)+this.numbertobulls(bulls);
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
    
    getTerneras(trie, secret){
        if(trie-1 == secret || trie+1 == secret){
            return "#";
        }
        else{
            return ""
        }
    }
    buscarTerneras(intentoCompleto){
        let terneras = "";
        const sctoarr=this.secretCode.split("");
        const gtoarr=intentoCompleto.split("");
        for(let i=0; i<sctoarr.length;i++){
            for(let j=0; j<gtoarr.length;j++){
                if(i==j){
                    terneras += this.getTerneras(Number(gtoarr[j]),Number(sctoarr[i]));
                }
            }
        }
        return terneras;


    }
    encontrarPrimo(codigo){
        if (codigo == 0 || codigo == 1 || codigo == 4) return false;
	    for (let x = 2; x < codigo / 2; x++) {
		    if (codigo % x == 0) return false;
	    }
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	    return true;
    }
}

export default Game;