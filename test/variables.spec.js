var expect = require('expect.js')

// var x = declarar
// x = 3 definir
// x = 5 redefinir 

// Demostrar que los tipos escalares se copian por valor y no por referencia
describe('Copiar por valor', function () {
    it('Copiar por valor', function () {
        var x = 1;
        var y = x;

        x = x + 2;

        expect(x).to.be(3);
        expect(y).to.be(1);
    });

    // Demostrar que los tipos complejos se copian por referencia, lo que si modificará su valor
    it('Copiar por referencia', function () {
        var x = {};
        var y = x;
        x.name = 1;

        expect(x).to.be(y);
    })
})

describe('Copiar por referencia tipos complejos', function() {
    // 
    it('Demostrar que dos variables con la inicialización de un objeto vacio no es igual', function() {
        var x = {};
        var y = {};

        expect(x).not.to.be(y);
    })

    // 
    it('Demostrar que copiar el valor de una variable a otra devolverá true', function() {
        var x = {};
        var y = x;

        expect(x).to.be(y);
    })
    

})