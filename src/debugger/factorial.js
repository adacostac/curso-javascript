var factorial = function(num) {

  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }

};

module.exports = factorial;
