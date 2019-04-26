var factorial = function(num) {
  if (typeof num !== 'number') {
    throw 'factorial need only numbers';
  }

  if (num < 0) {
    throw 'factorial need positive numbers';
  }

  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }

};

module.exports = factorial;
