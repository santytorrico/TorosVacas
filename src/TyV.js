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
}

export default Game;