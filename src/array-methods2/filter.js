
var stub = require('../../test/filter.stub.js');


// devuelva un array de strings con los nombres
var getNames = function (arr) {
  /* var result = [];

  arr.forEach(function (element) {
    result.push(element.name);
  });

  return result; */

  return arr.map(function (element) { return element.name; });
};

// devolver array de todos los objetos que la edad sea mayor igual que minAge
var filterElders = function (arr, minAge) {
  /* var result = [];

  arr.forEach(function (element) {
    if (element.age >= minAge) { result.push(element); }
  });

  return result; */

  return arr.filter(function (element) { return element.age >= minAge; });

};

// devolver array de string que devuelva nombre cuando la edad sea mayor igual que minAge
var getElderNames = function (arr, minAge) {
  /* var result = [];

  arr.forEach(function (element) {
    if (element.age >= minAge) { result.push(element.name); }
  });

  return result; */

  //UNO FILTRA (filter) y el otro transforma (MAP)

  return arr.filter(function (element) {
    return element.age >= minAge;
  }).map(function (element) {
    return element.name;
  });

  /*   return filtered.map(function (element) {
      return element.name;
    }); */

};

console.log(getElderNames(stub.person, 30));

module.exports = {
  getNames,
  filterElders,
  getElderNames
};
