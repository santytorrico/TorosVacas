import Game from "./TyV"

describe("Enter Code", () => {
    let round;
    beforeEach(()=>{
        round = new Game();
    });

    it("Should update secret codevalue", () => {
        round.setSecretcode("1234")
        expect(round.getSecretcode()).toEqual("1234");
    });

    it("Returns cows", () => {
        round.setSecretcode("1234")
        expect(round.throwGuess("4321")).toEqual("4");
    });
    
    // it("Returns ganaste", () => {
    //     round.setSecretcode("1234")
    //     expect(round.throwGuess("1234")).toEqual("Ganaste");
    // });

    });
  describe("Attempts", () => {
    let round;
    beforeEach(()=>{
        round = new Game();
    });

    it("Should start in 0", () => {
        expect(round.getAttempts()).toEqual(0);
    });
    it("It should increase by 1 each time it is played", () => {
        round.throwGuess("1234");
        expect(round.getAttempts()).toEqual(1);
    });
    //El limite por defecto es 8 intentos
    it("Should decrease by 1 each time played and no longer allow if over limit", () => {
        round.throwGuess("1234");
        round.throwGuess("1234");
        round.throwGuess("1234");
        round.throwGuess("1234");
        round.throwGuess("1234");
        round.throwGuess("1234");
        round.throwGuess("1234");
        round.throwGuess("1234");
        
        expect(round.throwGuess("1234")).toEqual("You have no more attempts");
    });
});

    describe("Restart game", () => {
        let round;
        beforeEach(()=>{
            round = new Game();
        });
    
        it("the secret code should be erased", () => {
            round.replay()
            expect(round.getSecretcode()).toEqual("");
        });
        it("the intents should be restarted ", () => {
            round.throwGuess("1234");
            round.throwGuess("1234");
            round.throwGuess("1234");
            round.replay()
            expect(round.getAttempts()).toEqual(0);
        });
        
        

    });