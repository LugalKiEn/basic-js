const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator2 = "+";
  let addition2 = "";
  let additionRepeatTimes2 = 1
  let repeatTimes2 = 1;
  let additionSeparator2 = "|";
  if (options.separator) { separator2 = options.separator; }
  if (options.addition || options.addition === false || options.addition === null) { addition2 = `${options.addition}`; }
  if (options.additionRepeatTimes) { additionRepeatTimes2 = options.additionRepeatTimes; }
  if (options.repeatTimes) { repeatTimes2 = options.repeatTimes; }
  if (options.additionSeparator) { additionSeparator2 = options.additionSeparator; }
  let additionResult = [];
  for (let i = 0; i < additionRepeatTimes2; i++) additionResult.push(addition2);
  for (let i = 0; i < additionResult.length - 1; i++) additionResult[i] += additionSeparator2;
  let strResult = [];
  for (let i = 0; i < repeatTimes2; i++) { strResult.push(str); }
  for (let i = 0; i < strResult.length; i++) { strResult[i] += additionResult.join(""); }
  for (let i = 0; i < strResult.length - 1; i++) { strResult[i] += separator2 ;}
  return strResult.join("");
};
  