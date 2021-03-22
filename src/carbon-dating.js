const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== "string" || Number(sampleActivity) == undefined || isNaN(Number(sampleActivity)) || 
  Number(sampleActivity) == null || Number(sampleActivity) >= 9000 || Number(sampleActivity) <= 0) return false;
  let dividedActivity = MODERN_ACTIVITY / Number(sampleActivity);
  let t12 = 0.693 / HALF_LIFE_PERIOD
  let t = Math.log(dividedActivity) / t12;
  if (t < 0) return false;
  else return Math.ceil(t);
};
