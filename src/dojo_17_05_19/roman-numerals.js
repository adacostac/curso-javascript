function romanNumerals(num) {

  if (num < 1) { return ''; }
  /* if (num === 4 ) { return 'IV'; }
  if (num === 14 ) { return 'XIV'; } */
  var message = '';

  // PINTAR M
  var divM = Math.floor(num / 1000);
  var restoM = num % 1000;
  message = message + repeatCharacter('M', divM);

  // PINTAR D
  var divD = Math.floor(restoM / 500);
  var restoD = restoM % 500;
  message = message + repeatCharacter('D', divD);

  // PINTAR C
  var divC = Math.floor(restoD / 100);
  var restoC = restoD % 100;
  message = message + repeatCharacter('C', divC);

  if (restoC >= 90) {
    restoC = restoC - 90;
    message = message + 'XC';
  }

  // PINTAR L
  var divL = Math.floor(restoC / 50);
  var restoL = restoC % 50;
  message = message + repeatCharacter('L', divL);

  if (restoL >= 40) {
    restoL = restoL - 40;
    message = message + 'XL';
  }

  // PINTAR X
  var divX = Math.floor(restoL / 10);
  var restoX = restoL % 10;
  message = message + repeatCharacter('X', divX);

  if (restoX === 9) {
    restoX = restoX - 9;
    message = message + 'IX';
  }

  // PINTAR V
  var divV = Math.floor(restoX / 5);
  var restoV = restoX % 5;
  message = message + repeatCharacter('V', divV);

  if (restoV === 4) {
    restoV = restoV - 4;
    message = message + 'IV';
  }

  // PINTAR I
  message = message + repeatCharacter('I', restoV);

  return message;
}

function repeatCharacter(char, num) {
  var message = '';

  for (let i = 0; i < num; i++) {
    message = message + char;
  }

  return message;
}


module.exports = { romanNumerals: romanNumerals };
