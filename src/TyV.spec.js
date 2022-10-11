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
        expect(round.throwGuess("4321")).toEqual("##****");
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
    describe("Ternera", () => {
        let round;
        beforeEach(()=>{
            round = new Game();
        });
    
        it("Deberia mostrar que exista una ternera para un numero mayor", () => {
            round.setSecretcode("1")
            expect(round.throwGuess("2")).toEqual("#");
        });
        it("Deberia mostrar que exista una ternera para un numero menor", () => {
            round.setSecretcode("5")
            expect(round.throwGuess("4")).toEqual("#");
        });
        it("Deberia mostrar todas las terneras", () => {
            round.setSecretcode("1234")
            expect(round.throwGuess("1334")).toEqual("#*!!!");
        });
        it("Deberia mostrar todas las terneras", () => {
            round.setSecretcode("1234")
            expect(round.throwGuess("1134")).toEqual("#*!!!");
        });
    
        
    
      });
      describe("encontrar primos", () => {
        let round;
        beforeEach(()=>{
            round = new Game();
        });
    
        it("Deberia mostrar que exista 1 primo", () => {
            expect(round.findPrimo(3)).toEqual(true);
        });
        
    
        
    
      });

    
