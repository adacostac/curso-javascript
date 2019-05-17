var roman = require('../src/dojo/roman-numerals.js');
var expect = require('expect.js');

describe('Roman Numerals', function () {
  describe('function transformRomanNumerals', function () {
    it('should be a function', function () {
      expect(typeof roman.transformRomanNumerals).to.be('function');
    });
    it('should as many íes as number', function () {
      expect(roman.transformRomanNumerals(5)).to.be('V');
      expect(roman.transformRomanNumerals(3)).to.be('III');
      expect(roman.transformRomanNumerals(-1)).to.be('');
      expect(roman.transformRomanNumerals(0)).to.be('');
    });

    it('should group numbers in V', function () {
      expect(roman.transformRomanNumerals(5)).to.be('V');
      expect(roman.transformRomanNumerals(8)).to.be('VIII');
    });

    it('should group VV in X', function () {
      expect(roman.transformRomanNumerals(10)).to.be('X');
      expect(roman.transformRomanNumerals(11)).to.be('XI');
      expect(roman.transformRomanNumerals(16)).to.be('XVI');
    });



  });
});
