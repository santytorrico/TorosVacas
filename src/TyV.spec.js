import Game from "./TyV"
import './toBeWithinRange';

describe("Enter Code", () => {
    let round;
    beforeEach(()=>{
        round = new Game();
    });

    it("Should update secret codevalue", () => {
        round.setSecretcode("1234")
        expect(round.getSecretcode()).toEqual("1234");
    });

    it("Returns that all the digits are cows", () => {
        round.setSecretcode("1234")
        expect(round.throwGuess("4321")).toEqual("****");
    });
    
    it("Returns a bull and 2 cows", () => {
        round.setSecretcode("1234")
        expect(round.throwGuess("1472")).toEqual("**!");
    });

    
    it("Returns a bull and 2 cows", () => {
        round.setSecretcode("a234")
        expect(round.throwGuess("a4b2")).toEqual("**!");
    });

    it("Returns that all the digits are bulls(win)", () => {
        round.setSecretcode("1234")
        expect(round.throwGuess("1234")).toEqual("!!!!");
    });

  });
  describe("Attempts", () => {
    let round;
    beforeEach(()=>{
        round = new Game();
    });
    it("Should see GAME OVER", () => {
        round.tries = 8;
        expect(round.youLost()).toEqual(true);
    });
    it("Should continue the game ", () => {
        round.tries =6;
        expect(round.youLost()).toEqual(false);
    });


  });

  describe("LOSE", () => {
    let round;
    beforeEach(()=>{
        round = new Game();
    });
    it("Should start in 0", () => {
        expect(round.getTries()).toEqual(0);
    });
    it("It should increase by 1 each time it is played", () => {
        round.throwGuess("1234");
        expect(round.getTries()).toEqual(1);
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
            expect(round.getTries()).toEqual(0);
        });
        
        

    });
    describe("Random Code", () => {
        let round;
        beforeEach(()=>{
            round = new Game();
        });
    
        it("should generate a random number within a range", () => {
            let number = round.randomNumber(1,8)
            expect(number).toBeWithinRange(0,8);

        });
        it("should generate a string with random numbers", () => {
            round.randomCode();
            let secret = round.getSecretcode();
        });
        
        
    });
    describe("Terneros", () => {
        let round;
        beforeEach(()=>{
            round = new Game();
        });
    
        it("Deberia encontrarnos un ternero para un numero mayor", () => {
            round.setSecretcode(2);
            expect(round.getTerneras(3,2)).toEqual("#");

        });
        it("No deberia encontrarnos", () => {
            round.setSecretcode(2);
            expect(round.getTerneras(4,2)).toEqual("");

        });
        it("Deberia encontrarnos un ternero para un numero menor", () => {
            round.setSecretcode(4);
            expect(round.getTerneras(3,4)).toEqual("#");

        });
        it("Deberia encontrarnos dos terneras", () => {
            round.setSecretcode("23");
            expect(round.buscarTerneras("14")).toEqual("##");

        });
        it("Deberia encontrarnos 1 ternero en la cadena", () => {
            round.setSecretcode("24");
            expect(round.buscarTerneras("14")).toEqual("#");

        });
        
        
        
    });
    describe("Bisontes", () => {
        let round;
        beforeEach(()=>{
            round = new Game();
        });
    
        it("Deberia encontrar un numero primo", () => {
            expect(round.encontrarPrimo(3)).toEqual(true);

        });
        it("No deberia encontrar un numero primo", () => {
            expect(round.encontrarPrimo(4)).toEqual(false);

        });
        
        
        
    });
