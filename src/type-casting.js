var x = {
  toString: function () {
    return '2';
  },
  valueOf: function() {
    return 10;
  }
};

var y = {
  toString: function () {
    return 34;
  },
  valueOf: function() {
    return 10;
  }
};

console.log(x + y);
