var filter = require('../src/array-methods/filter.js');
var expect = require('expect.js');
var stub = require('../test/filter.stub.js');

describe.only('Filter By Age', function () {
  describe('Filter By Age functions', function () {
    it('should be a function', function () {
      expect(typeof filter.getEldersFor).to.be('function');
    });

    it('should return an array with objects that are older than 30', function () {
      expect(filter.getEldersFor(stub.person, 30)).to.eql(stub.filterAge1);
    });

    it('should return an array with objects that are older than 20', function () {
      expect(filter.getEldersFor(stub.person, 20)).to.eql(stub.filterAge2);
    });
  });

  describe('Filter by Name', function () {
    it('should be a function', function () {
      expect(typeof filter.getNames).to.be('function');
    });

    it('should return an array of names', function () {
      expect(filter.getNames(stub.person)).to.eql(stub.filterAge2);
    });

  });

  describe('Filter by Age', function () {
    it('should be a function', function () {
      expect(typeof filter.filterElders).to.be('function');
    });

    it('should return an array of object', function () {
      expect(filter.filterElders(stub.person, 30)).to.eql(stub.filterElders);
    });

  });

});

