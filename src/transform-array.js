const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case "--double-prev":
        newArr.splice(i, 1);
        if (newArr[i - 1] != undefined)
          newArr.splice(i, 0, newArr[i - 1]);
        break;
      case "--double-next":
        newArr.splice(i, 1);
        if (newArr[i] != undefined) newArr.splice(i, 0, newArr[i]);
        i--;
        break;
      case "--discard-prev":
        newArr.splice(i, 1);
        if (newArr[i - 1] != undefined) newArr.splice(i - 1, 1);
        i--;
        break;
      case "--discard-next":
        if (
          newArr[i + 2] == "--double-prev" ||
          newArr[i + 2] == "--discard-prev"
        )
          newArr.splice(i + 2, 1);
        newArr.splice(i, 1);
        if (newArr[i] != undefined) newArr.splice(i, 1);
        i--;
        break;
      default:
        break;
    }
  }
  return newArr;
};
