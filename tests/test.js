var expect = chai.expect;

describe("Probando la funcion esPalindromo()", function(){

    it("Chequea que la palabra AMA sea true", function(){
        
        var caso = esPalindromo("AMA");
        expect( caso ).to.be.true;

    });

    it("Chequea que la palabra NARRAN sea true", function(){
        
        var caso = esPalindromo("NARRAN");
        expect( caso ).to.be.true;

    });

    it("Chequea que la palabra PAPA sea false", function(){
        
        var caso = esPalindromo("PAPA");
        expect( caso ).to.be.false;

    });

    it("Chequea que la frase AMA AMA sea true", function(){
        
        var caso = esPalindromo("AMA AMA");
        expect( caso ).to.be.true;

    });

    it("Chequea que la frase PAPA AMA sea false", function(){
        
        var caso = esPalindromo("PAPA AMA");
        expect( caso ).to.be.false;

    });

    it("Chequea que un string vacio sea false", function(){
        
        var caso = esPalindromo("");
        expect( caso ).to.be.false;

    });

    it("Chequea que el numero 37 sea false", function(){
        
        var caso = esPalindromo("37");
        expect( caso ).to.be.false;

    });

    it("Chequea que el numero 88 sea false", function(){
        
        var caso = esPalindromo("88");
        expect( caso ).to.be.false;

    });

    it("Chequea que Null sea false", function(){
        
        var caso = esPalindromo(null);
        expect( caso ).to.be.false;

    });

});