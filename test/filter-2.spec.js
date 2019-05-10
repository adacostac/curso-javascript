var filter = require('../src/array-methods2/filter.js');
var expect = require('expect.js');
var stub = require('../test/filter.stub.js');

describe.only('Filter method 2', function () {
  describe('Filter By getNames', function () {
    it('should be a function', function () {
      expect(typeof filter.getNames).to.be('function');
    });

    it('should get array of string name', function () {
      expect(filter.getNames(stub.person)).to.eql(stub.filterByName);
    });

  });

  describe('Filter By Elders', function () {
    it('should be a function', function () {
      expect(typeof filter.filterElders).to.be('function');
    });

    it('should return array of all objects that the age is greater than minAge', function () {
      expect(filter.filterElders(stub.person, 30)).to.eql(stub.filterElders);
    });
  });

  describe('Filter By ElderNames', function () {
    it('should be a function', function () {
      expect(typeof filter.getElderNames).to.be('function');
    });

    it('should return string array that returns name when age is greater than minAge', function () {
      expect(filter.getElderNames(stub.person, 30)).to.eql(stub.filterEldersName);
    });
  });
});
