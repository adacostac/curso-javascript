function at(obj, prop) {
  return obj[prop];
}

function set(obj, prop, val) {
  obj[prop] = val;
}

function keys(obj) {
  var attr;
  var array = [];

  for (attr in obj) {
    array[array.length] = attr;
  }
  return array;
}

console.log(keys({name: 'alice', surname: 'da costa'}));
