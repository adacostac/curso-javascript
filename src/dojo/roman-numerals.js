var transformRomanNumerals = function (num) {
  if (num < 0) return '';
  if (num === 5) return 'V';

  var str = '';
  var div = Math.floor(num / 5);
  var resto = num % 5;

  if (div <= 1) {
    for (let i = 0; i < div; i++) {
      str += 'V';
    }
  } else {
    str += 'X';
  }

  for (let i = 0; i < resto; i++) {
    str += 'I';
  }


  return str;
};

module.exports = {
  transformRomanNumerals
};
