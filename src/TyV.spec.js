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