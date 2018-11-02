var expect = require('expect.js')

var resta = function () {}

describe('javascript', function () {
    describe('typeof', function () {
        it('should return the type of expression',function () {
            expect(typeof 5).to.be('number')
        })

        it('should return boolean',function () {
            expect(typeof true).to.be('boolean')
        })

        it('should return string',function () {
            expect(typeof 'Hola').to.be('string')
        })

        it('should return number',function () {
            expect(typeof 5).to.be('number')
        })

        it('should return function',function () {
            expect(typeof resta).to.be('function')
        })

    })

})