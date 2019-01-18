function at(array, index) {
  return array[index];
}

function set(array, index, value) {
  array[index] = value;
  return array;
}

module.exports = {
  at: at,
  set: set
}

