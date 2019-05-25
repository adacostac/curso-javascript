var mastermind = require('../../src/dojo-js/kata-1/mastermind.js');
var expect = require('expect.js');

describe('mastermind.js', function () {
  describe('mastermind', function () {
    it('should be a function', function () {
      expect(typeof mastermind.evaluate).to.be('function');
    });

    it('deberia detectar los colores bien colocados', function() {
      expect(mastermind.evaluate(['red'], ['red'])).to.eql({white: 1, black: 0});
      expect(mastermind.evaluate(['blue'], ['blue'])).to.eql({white: 1, black: 0});
      expect(mastermind.evaluate(['red'], ['blue'])).to.eql({white:0, black: 0});
      expect(mastermind.evaluate(['red','red'], ['red','red'])).to.eql({ white:2, black: 0 });
      expect(mastermind.evaluate(['red','blue'], ['red','red'])).to.eql({ white:1, black: 0 });
      expect(mastermind.evaluate(['red','blue','green'], ['red','blue','green'])).to.eql({ white:3, black: 0});
      expect(mastermind.evaluate(['red','blue','green'], ['red','red','green'])).to.eql({ white:2, black: 0 });
      expect(mastermind.evaluate(['red','blue','green','yellow'], ['red','blue','green','yellow'])).to.eql({ white:4, black: 0 });
    });

    it('deberia detectar los colores en posicion erronea', function() {
      expect(mastermind.evaluate(['red','blue'], ['blue','yellow'])).to.eql({white: 0, black: 1});
      expect(mastermind.evaluate(['red','blue'], ['blue','red'])).to.eql({white: 0, black: 2});
      expect(mastermind.evaluate(['red','blue','green'], ['blue','red','yellow'])).to.eql({white: 0, black: 2});
      expect(mastermind.evaluate(['red','blue','green'], ['blue','green','red'])).to.eql({white: 0, black: 3});
    });
    it('deberia detectar los colores con posiciones erroneas y correctas', function() {
      expect(mastermind.evaluate(['blue','red','green'], ['blue','green','red'])).to.eql({white: 1, black: 2});
      expect(mastermind.evaluate(['blue','yellow','green'], ['blue','red','yellow'])).to.eql({white: 1, black: 1});
      expect(mastermind.evaluate(['blue','red','green','yellow'], ['blue','red','yellow','green'])).to.eql({white: 2, black: 2});
      expect(mastermind.evaluate(['blue','red','blue','red'], ['red','blue','red','blue'])).to.eql({white: 0, black: 4});

    });

  });
});
