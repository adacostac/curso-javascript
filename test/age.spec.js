var age = require('../src/age.js');
var expect = require('expect.js');

describe('age.js', function () {
    describe('getAgeType', function () {
        it('shoul be a function', function () {
            expect(typeof age === 'function')
        })

        it('should return boy if age of person lesser than 18', function () {
            expect(age.getAgeType(16)).to.be('boy');
            expect(age.getAgeType(17)).to.be('boy');
            expect(age.getAgeType(18)).not.to.be('boy');
            expect(age.getAgeType(19)).not.to.be('boy');
        })

        it('should return man if age of person greather than 18', function () {
            expect(age.getAgeType(18)).to.be('man');
            expect(age.getAgeType(19)).to.be('man');
            expect(age.getAgeType(16)).not.to.be('man');
            expect(age.getAgeType(17)).not.to.be('man');
        })

        it('should throw an exception with non-numeric params', function () {
            expect(age.getAgeType).withArgs('18').to.throwException();
        })
    })

    describe('isBoy function', function () {
        it('shoul be a function', function () {
            expect(typeof age.isBoy === 'function')
        })

        it('should return true is age lesser than 18', function () {
            expect(age.isBoy(18)).to.be(false);
            expect(age.isBoy(17)).to.be(true);
        })
    })

    describe('isMan function', function () {
        it('shoul be a function', function () {
            expect(typeof age.isMan === 'function')
        })

        it('should return true is age greather than 18', function () {
            expect(age.isMan(18)).to.be(true);
            expect(age.isMan(20)).to.be(true);
            expect(age.isMan(17)).to.be(false);
            expect(age.isMan(16)).to.be(false);
        })
    })

})