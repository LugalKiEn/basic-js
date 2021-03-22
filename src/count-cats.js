const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCounter = 0;
  for(let i = 0; i < matrix.length; i++) {
    if (matrix[i] !== undefined && matrix[i] !== null && matrix[i] !== NaN) {
    for(let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == "^^") catCounter++;
    }
  }
}
  return catCounter;
};
