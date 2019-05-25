var roman = require('../../src/dojo_17_05_19/roman-numerals.js');
var expect = require('expect.js');

describe('Roman Numerals', function () {
  describe('function romanNumerals', function () {
    it('should be a function', function () {
      expect(typeof roman.romanNumerals).to.be('function');
    });

    it('deberia pintar números en palitos', function () {
      expect(roman.romanNumerals(3)).to.be('III');
      expect(roman.romanNumerals(2)).to.be('II');
      expect(roman.romanNumerals(1)).to.be('I');
    });

    it('debería devolver un string vacio con casos inferiores a 1', function () {
      expect(roman.romanNumerals(0)).to.be('');
      expect(roman.romanNumerals(-1)).to.be('');
    });

    it('debería cada 5 palitos poner una V', function () {
      expect(roman.romanNumerals(5)).to.be('V');
      expect(roman.romanNumerals(6)).to.be('VI');
      expect(roman.romanNumerals(8)).to.be('VIII');
    });

    it('debería cada dos V una X', function () {
      expect(roman.romanNumerals(10)).to.be('X');
      expect(roman.romanNumerals(12)).to.be('XII');
    });

    it('debería cada cinco X una L', function () {
      expect(roman.romanNumerals(50)).to.be('L');
      expect(roman.romanNumerals(53)).to.be('LIII');
      expect(roman.romanNumerals(86)).to.be('LXXXVI');
    });
    it('debería pintar cada dos L una C', function () {
      expect(roman.romanNumerals(100)).to.be('C');
      expect(roman.romanNumerals(168)).to.be('CLXVIII');
    });
    it('debería pintar cada 5 C una D', function () {
      expect(roman.romanNumerals(500)).to.be('D');
      expect(roman.romanNumerals(751)).to.be('DCCLI');
    });
    it('debería pintar cada 2 D una M', function () {
      expect(roman.romanNumerals(1000)).to.be('M');
      expect(roman.romanNumerals(1001)).to.be('MI');
      expect(roman.romanNumerals(2401)).to.be('MMCCCCI');
    });
    it('debería pintar cada cuatro palitos en las unidades un IV', function () {
      expect(roman.romanNumerals(4)).to.be('IV');
      expect(roman.romanNumerals(14)).to.be('XIV');
      expect(roman.romanNumerals(24)).to.be('XXIV');
    });
    it('debería pintar para cada nueve en las unidades un IX', function () {
      expect(roman.romanNumerals(9)).to.be('IX');
      expect(roman.romanNumerals(19)).to.be('XIX');
      expect(roman.romanNumerals(139)).to.be('CXXXIX');
    });

    it('debería pintar un 4 en las decenas un XL', function () {
      expect(roman.romanNumerals(40)).to.be('XL');
      expect(roman.romanNumerals(49)).to.be('XLIX');
      expect(roman.romanNumerals(141)).to.be('CXLI');
    });
    it('debería pintar un 9 en las decenas un XC', function () {
      expect(roman.romanNumerals(90)).to.be('XC');
      expect(roman.romanNumerals(91)).to.be('XCI');
      expect(roman.romanNumerals(1989)).to.be('MCMLXXXIX');
    });
  });
});
