var loop = require('../src/loop.js');
var expect = require('expect.js');

describe('Loop', function () {
  describe('repeatNumber', function () {
    it('should be a function', function () {
      expect(typeof loop.repeatNumber).to.be('function');
    });

    it('should repeat a number', function () {
      expect(loop.repeatNumber(2)).to.be('22');
      expect(loop.repeatNumber(3)).to.be('333');
      expect(loop.repeatNumber(2)).not.to.be('23');
    });
  });

  describe('pyramid', function () {
    it('should be a function', function () {
      expect(typeof loop.pyramid).to.be('function');
    });

    it('should return a pyramid', function () {
      expect(loop.pyramid(2)).to.be('1\n22');
    });
  });

  // describe('reservePyramid', function () {

  // });

});
