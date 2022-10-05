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
    
    it("Should update secret codevalue", () => {
        round.setSecretcode("1234")
        expect(round.getSecretcode()).toEqual("1234");
    });


  });