var evaluate = function (code, attempt) {
  var white = 0;
  var black = 0;

  code.forEach(function (item, index) {
    if (item === attempt[index]) {
      white = white + 1;
      return;
    }

    var position = attempt.indexOf(item);
    if (position !== index && position !== -1) {
      black = black + 1;
    }
  });

  return { white: white, black: black };
};

module.exports = {
  evaluate: evaluate
};
