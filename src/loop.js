// bucle infinito: while(true) {}
// condición de escape: if (expr) { break; }
// sentencias: statement; statement; ...
// incremento de iteración: it++

var repeatNumber = function (number) {
  var forever = true;
  var message = '';
  var x = 0;

  while (forever) {
    if (x >= number) { break; }
    message = message + number.toString();
    x = x + 1;
  }
  return message;
};

var pyramid = function (number) {
  var forever = true;
  var ite = 0;
  var message = '';

  while (forever) {
    if (ite >= number) { break; }
    if (ite > 0) { message += '\n'; }
    message += repeatNumber(ite + 1);
    ite = ite + 1;
  }
  return message;
};

var reservePyramid = function (number) {
  var forever = true;
  var ite = 0;

  while (forever) {
    if (ite >= number) { break; }
    ite = ite + 1;
  }
};

module.exports = {
  repeatNumber: repeatNumber,
  pyramid: pyramid,
  reservePyramid: reservePyramid
}


