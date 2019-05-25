var minesweeper = require('../../src/dojo-js/kata-2/minesweeper.js');
var expect = require('expect.js');

describe.only('minesweeper.js', function () {
  describe('minesweeper', function () {
    describe('generate', function () {
      var generate = minesweeper.generate;

      // it.only('WTF', function () {
      //   expect([[['x']]]).to.eql([['x']]);
      // });


      it('should be a function', function () {
        expect(typeof generate).to.be('function');
      });
      it('mostrar minas en su posicion', function () {
        expect(generate([['*']])).to.eql([['*']]);
        expect(generate([['*', '*']])).to.eql([['*', '*']]);
        expect(generate([['*', '*', '*']])).to.eql([['*', '*', '*']]);
        expect(generate([['*', '*', '*', '*']])).to.eql([['*', '*', '*', '*']]);
      });
      it('colocar 0 cuando no hay minas', function () {
        expect(generate([['']])).to.eql([[0]]);
        expect(generate([['', '']])).to.eql([[0, 0]]);
        expect(generate([['', '', '']])).to.eql([[0, 0, 0]]);
        expect(generate([['', '', '', '']])).to.eql([[0, 0, 0, 0]]);
      });
      it('colocar la cantidad de minas adyacentes horizontales ', function () {
        expect(generate([['*', '']])).to.eql([['*', 1]]);
        expect(generate([['', '*']])).to.eql([[1, '*']]);
        expect(generate([['', '*', '']])).to.eql([[1, '*', 1]]);
        expect(generate([['', '', '*']])).to.eql([[0, 1, '*']]);
        expect(generate([['*', '', '']])).to.eql([['*', 1, 0]]);
        expect(generate([['', '*', '*']])).to.eql([[1, '*', '*']]);
        expect(generate([['*', '', '*']])).to.eql([['*', 2, '*']]);
        expect(generate([['*', '', '', '*']])).to.eql([['*', 1, 1, '*']]);
        expect(generate([['*', '', '*', '']])).to.eql([['*', 2, '*', 1]]);
      });
      it('respetar minas en vertical  ', function () {
        expect(generate([['*'], ['*']])).to.eql([['*'], ['*']]);
        expect(generate([['*'], ['*'], ['*']])).to.eql([['*'], ['*'], ['*']]);
      });
      it('colocar 0 en verticales  ', function () {
        expect(generate([[''], ['']])).to.eql([[0], [0]]);
        expect(generate([[''], [''], ['']])).to.eql([[0], [0], [0]]);
      });
      it('contar minas en verticales  ', function () {
        expect(generate([['*'], ['']])).to.eql([['*'], [1]]);
        expect(generate([[''], ['*']])).to.eql([[1], ['*']]);
        expect(generate([['*'], [''], ['*']])).to.eql([['*'], [2], ['*']]);
      });
      it('respetar minas en dos dimensiones  ', function () {
        expect(generate([['*', '*'], ['*', '*']])).to.eql([['*', '*'], ['*', '*']]);
      });
      it('poner ceros en celdas vacias en dos dimensiones  ', function () {
        expect(generate([['', ''], ['', '']])).to.eql([['', ''], ['', '']]);
      });
      it('contar minas en dos dimensiones  ', function () {
        expect(generate([['*', ''], ['', '*']])).to.eql([['*', 2], [2, '*']]);
        expect(generate([['*', '*'], ['', '*']])).to.eql([['*', '*'], [3, '*']]);
        expect(generate([['*', '*'], ['*', '']])).to.eql([['*', '*'], ['*', 3]]);
        expect(generate([['', '*'], ['*', '*']])).to.eql([[3, '*'], ['*', '*']]);
        expect(generate([['*', ''], ['*', '*']])).to.eql([['*', 3], ['*', '*']]);
        expect(generate([['*', ''], ['', ''], ['', '*']])).to.eql([['*', 1], [2, 2], [1, '*']]);
        expect(generate([['*', '*', '*'], ['*', '', '*'], ['*', '*', '*']])).to.eql([['*', '*', '*'], ['*', 8, '*'], ['*', '*', '*']]);
        expect(generate([['*', '*'], ['', '*'], ['*', '*']])).to.eql([['*', '*'], [5, '*'], ['*', '*']]);
      });
    });
  });
});
