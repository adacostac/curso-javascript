var generate = function (matrix) {
  var mine = [];

  matrix.forEach(function (row, rowIndex) {

    mine.push([]);
    row.forEach(function (cell, colIndex) {
      if (cell === '*') {
        mine[rowIndex].push('*');
      }
      else {
        var accumulate = 0;
        // vecino de la izquierda
        if (matrix[rowIndex][colIndex - 1] === '*') {
          accumulate = accumulate + 1;
        }
        // vecino de la derecha
        if (matrix[rowIndex][colIndex + 1] === '*') {
          accumulate = accumulate + 1;
        }
        // vecino de arriba
        if ((rowIndex > 0) && (matrix[rowIndex - 1][colIndex] === '*')) {
          accumulate = accumulate + 1;
        }

        // vecino de abajo
        if ((rowIndex < matrix.length - 1) && (matrix[rowIndex + 1][colIndex] === '*')) {
          accumulate = accumulate + 1;
        }
        // vecino diagonal superior derecha
        if ((rowIndex > 0) && (matrix[rowIndex - 1][colIndex + 1] === '*')) {
          accumulate = accumulate + 1;
        }
        // vecino diagonal superior izquierdo
        if ((rowIndex > 0) && (matrix[rowIndex - 1][colIndex - 1] === '*')) {
          accumulate = accumulate + 1;
        }
        // vecino diagonal inferior derecha
        if ((rowIndex < matrix.length - 1) && (matrix[rowIndex + 1][colIndex + 1] === '*')) {
          accumulate = accumulate + 1;
        }
        // vecino diagonal inferior izquierda
        if ((rowIndex < matrix.length - 1) && (matrix[rowIndex + 1][colIndex - 1] === '*')) {
          accumulate = accumulate + 1;
        }

        mine[rowIndex].push(accumulate);
      }
    });
  });

  return mine;
};

module.exports = {
  generate: generate
};
