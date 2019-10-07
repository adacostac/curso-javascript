var person = {
  nombre: 'Alice',
  edad: 34
};

var getName = function(object) {
  return object.nombre;
};

var getNameWithProperty = function(object, property) {
  return object[property];
};

console.log(getName(person));
console.log(getNameWithProperty(person, 'nombre'));

var suma = function() {
  var result = 0;
  var argumentos = Object.values(arguments);

  argumentos.forEach(value => {
    result += value;
  });

  return result;
};

console.log(suma(15,10,10));
console.log(suma.apply(null, [15,10,10]));
