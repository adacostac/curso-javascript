var sum = require('../src/suma.js');
var expect = require('expect.js');

describe('suma', function () {
    it('should be a function', function () {
        expect(typeof sum).to.be('function');
    });

    it('should sum two positive number', function() {
        expect(sum(2,3)).to.be(5);
        expect(sum(0,0)).to.be(0);
        expect(sum(0,3)).to.be(3);
        expect(sum(2,0)).to.be(2);
    });

    it('should sum two positive and negative number', function() {
        expect(sum(2,-3)).to.be(-1);
        expect(sum(-0,-0)).to.be(0);
        expect(sum(0,-3)).to.be(-3);
        expect(sum(-2,0)).to.be(-2);
        expect(sum(-2,-8)).to.be(-10);
    })

    it('should throw an exception with non-numeric params', function() {
        expect(sum).withArgs(3,'a').to.throwException();
    });

});
