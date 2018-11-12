var numberToString = require('../src/number-to-string.js');
var expect = require('expect.js');

describe('numberToString', function () {
  describe('numberToStringSingleReturn', function () {
    it('should be a function', function () {
      expect(typeof numberToString.numberToStringSingleReturn).to.be('function');
    });

    it('not number', function() {
      expect(numberToString.numberToStringSingleReturn).withArgs('a').to.throwException(/^not number$/);
    });

    it('should be equal or greater than zero', function() {
      expect(numberToString.numberToStringSingleReturn).withArgs(-1).to.throwException(/^must be equal or greater than zero$/);
    });

    it('should be equal or greater than zero', function() {
      expect(numberToString.numberToStringSingleReturn).withArgs(11).to.throwException(/^must be equal or lesser than ten$/);
    });

    it('should return the name of the number in a string', function() {
      expect(numberToString.numberToStringSingleReturn(5)).to.be('five');
      expect(numberToString.numberToStringSingleReturn(0)).to.be('zero');
      expect(numberToString.numberToStringSingleReturn(1)).to.be('one');
    });
  });

  describe('numberToStringSwicthCase', function () {
    it('should be a function', function () {
      expect(typeof numberToString.numberToStringSwicthCase).to.be('function');
    });

    it('not number', function() {
      expect(numberToString.numberToStringSwicthCase).withArgs('a').to.throwException(/^not number$/);
    });

    it('should be equal or greater than zero', function() {
      expect(numberToString.numberToStringSwicthCase).withArgs(-1).to.throwException(/^must be equal or greater than zero$/);
    });

    it('should be equal or greater than zero', function() {
      expect(numberToString.numberToStringSwicthCase).withArgs(11).to.throwException(/^must be equal or lesser than ten$/);
    });

    it('should return the name of the number in a string', function() {
      expect(numberToString.numberToStringSwicthCase(5)).to.be('five');
      expect(numberToString.numberToStringSwicthCase(1)).to.be('one');
      expect(numberToString.numberToStringSwicthCase(0)).to.be('zero');
    });
  });

  describe('numberToStringifMultipleReturn', function () {
    it('should be a function', function () {
      expect(typeof numberToString.numberToStringifMultipleReturn).to.be('function');
    });

    it('not number', function() {
      expect(numberToString.numberToStringifMultipleReturn).withArgs('a').to.throwException(/^not number$/);
    });

    it('should be equal or greater than zero', function() {
      expect(numberToString.numberToStringifMultipleReturn).withArgs(-1).to.throwException(/^must be equal or greater than zero$/);
    });

    it('should be equal or greater than zero', function() {
      expect(numberToString.numberToStringifMultipleReturn).withArgs(11).to.throwException(/^must be equal or lesser than ten$/);
    });

    it('should return the name of the number in a string', function() {
      expect(numberToString.numberToStringifMultipleReturn(5)).to.be('five');
      expect(numberToString.numberToStringifMultipleReturn(1)).to.be('one');
      expect(numberToString.numberToStringifMultipleReturn(0)).to.be('zero');
    });
  });
});
