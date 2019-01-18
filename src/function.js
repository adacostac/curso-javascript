/*function foo() {
  throw new Error('sad');
}

function bar() {
  foo();
}

function qux() {
  bar();
}

qux();

var count = 0;

function foo() {
  console.log(count++);
  bar();

}

function bar() {
  console.log(count++);
  foo();
}

foo();

foo()



function factorial(num) {
  var fact = 1;
  for(var x=0; x < num; x++){
    fact = fact * (x+1);
  }

  return fact;
}

//console.log(factorial(5));

function factorial(num) {
  if(num > 1) {
    return num * factorial(num-1);
  }

  return 1;
}

//console.log(factorial(6));
*/
function suma() {
  var result = 0;

  for(var x = 0; x < arguments.length; x++) {
    result = result + arguments[x];

  }
  return result;

}

console.log(suma(5,10,20));
