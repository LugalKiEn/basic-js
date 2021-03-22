const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  result.turns = 2 * Math.pow(2, disksNumber - 1) - 1;
  result.seconds = Math.floor(result.turns / turnsSpeed * 3600);
return result;
};
