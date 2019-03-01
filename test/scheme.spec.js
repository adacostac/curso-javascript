var scheme = require('../src/scheme.js');
var expect = require('expect.js');

describe.only('scheme.js', function() {
    describe('car', function() {
        it('car should get the first element of a list', function() {
            expect(scheme.car([0,1,2,3])).to.eql(0);
        })
    })

    describe('cdr', function() {
        it('cdr should get the list without the first element', function() {
            expect(scheme.cdr([0,1,2,3])).to.eql([1,2,3]);
        })
    })
})