var launchException = require('./exception.js');
var factorial = require('./factorial.js');

try {
  factorial(-1);
} catch (error) {
  console.log(error);
}
