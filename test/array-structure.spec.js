var array = require('../src/array-structure.js');
var expect = require('expect.js');

describe.only('array-structure.js', function () {
  describe('at', function () {
    it('shoul be a function', function () {
      expect(typeof array.at).to.be('function');
    })

    it('should receive the number of an array depending on the index', function() {
      expect(array.at([1], 0)).to.be(1);
      expect(array.at([1,2], 1)).to.be(2);
      expect(array.at([1,2,3], 2)).to.be(3);
    })
  })

  describe('set', function () {
    it('shoul be a function', function () {
      expect(typeof array.set).to.be('function');
    })

    it('should add a value to an array', function() {
      expect(array.set([], 0, 1)).to.eql([1]);
      expect(array.set([1], 1, 2)).to.eql([1,2]);
      expect(array.set([1], 2, 2)).to.eql([1,,2]);
    })
  })

})
