var getEldersFor = function (arr, minAge) {
  var filter = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].age >= minAge) {
      filter.push(arr[i].name);
    }
  }

  return filter;
};

var getEldersForEach = function (arr, minAge) {
  var filter = [];

  arr.forEach(function (element) {
    if (element.age >= minAge) {
      filter.push(element.name);
    }
  });

  return filter;
};

var getNamesForEach = function (arr) {
  var result = [];

  arr.forEach(element => {
    result.push(getNames(element));
  });

  return result;
};

var getNames = function (object) {
    return object.name;
};

var filterElders = function(arr, minAge) {
  var result = [];

  arr.forEach(element => {
    if (element.age >= minAge) {
      result.push(element);
    }
  });

  return result;
};

var getNamesMap = function (arr) {
  /* return arr.map(function(element) {
    return getNames(element);
  }); */

  return arr.map(getNames);

 /*  return arr.map(function (element) {
    return element.name;
  }); */
};

module.exports = {
  getEldersFor,
  getEldersForEach,
  getNames: getNamesMap,
  filterElders
};
