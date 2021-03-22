const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, curDepth = 0, overallDepth = 0) {
    if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
        curDepth = this.calculateDepth(arr[i]);
        if (overallDepth < curDepth) {
          overallDepth = curDepth;
          curDepth = 0;
        }
        // curCount += 1;
        // if (overallCount < curCount) overallCount = curCount;
        // this.calculateDepth(arr[i], curCount++, overallCount);
        // curCount -= 1;
      }
    return overallDepth + 1;
    } else return 0;
  }
};