var numberToStringSingleReturn = function (num) {
  var message;

  if (typeof num != 'number') {
    throw new Error('not number');
  } else if (num < 0) {
    throw new Error('must be equal or greater than zero');
  } else if (num > 10) {
    throw new Error('must be equal or lesser than ten');
  }

  if (num === 0) {
    message = 'zero';
  } else if (num === 1) {
    message = 'one';
  } else if (num === 2) {
    message = 'two';
  } else if (num === 3) {
    message = 'three';
  } else if (num === 4) {
    message = 'four';
  } else if (num === 5) {
    message = 'five';
  } else if (num === 6) {
    message = 'six';
  } else if (num === 7) {
    message = 'seven';
  } else if (num === 8) {
    message = 'eight';
  } else if (num === 9) {
    message = 'nine';
  } else {
    message = 'ten';
  }

  return message;
};

var numberToStringSwicthCase = function (num) {
  var message;

  if (typeof num != 'number') {
    throw new Error('not number');
  } else if (num < 0) {
    throw new Error('must be equal or greater than zero');
  } else if (num > 10) {
    throw new Error('must be equal or lesser than ten');
  }

  switch (num) {
    case 0:
      message = 'zero';
      break;
    case 1:
      message = 'one';
      break;
    case 2:
      message = 'two';
      break;
    case 3:
      message = 'three';
      break;
    case 4:
      message = 'four';
      break;
    case 5:
      message = 'five';
      break;
    case 6:
      message = 'six';
      break;
    case 7:
      message = 'seven';
      break;
    case 8:
      message = 'eight';
      break;
    case 9:
      message = 'nine';
      break;
    case 10:
      message = 'ten';
      break;
    default:
      message = 'must be an integer';
      break;
  }

  return message;
};

var numberToStringifMultipleReturn = function (num) {

  if (typeof num != 'number') {
    throw new Error('not number');
  } else if (num < 0) {
    throw new Error('must be equal or greater than zero');
  } else if (num > 10) {
    throw new Error('must be equal or lesser than ten');
  }

  if (num === 0) { return 'zero'; }
  if (num === 1) { return 'one'; }
  if (num === 2) { return 'two'; }
  if (num === 3) { return 'three'; }
  if (num === 4) { return 'four'; }
  if (num === 5) { return 'five'; }
  if (num === 6) { return 'six'; }
  if (num === 7) { return 'seven'; }
  if (num === 8) { return 'eight'; }
  if (num === 9) { return 'nine'; }
  if (num === 10) { return 'ten'; }

};

module.exports = {
  numberToStringSingleReturn: numberToStringSingleReturn,
  numberToStringSwicthCase: numberToStringSwicthCase,
  numberToStringifMultipleReturn: numberToStringifMultipleReturn
};

