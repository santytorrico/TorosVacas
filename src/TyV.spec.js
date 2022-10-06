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

  });