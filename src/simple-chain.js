const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: "",
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    if (this.str.length == 0) this.str += "( " + value + " )"
    else this.str += "~~( " + value + " )";
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.str.split("~~").length) { this.str = ""; throw "THROWN"; };
    let newarr = this.str.split("~~");
    newarr.splice(position - 1, 1);
    this.str = newarr.join("~~");
    newarr = [];
    return this;
  },
  reverseChain() {
    let rev = this.str.split("~~").reverse().join("~~");
    this.str = rev;
    rev = "";
    return this;
  },
  finishChain() {
    let res = this.str;
    this.str = "";
    return res;
  }
};

module.exports = chainMaker;
