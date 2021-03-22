const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  reg = /([/^~`!@#\$%^*_+\[\]{}\\:;?|><=()]|[\s])/g;
  constructor(bool) {
    if (bool === false) this.bool = false;
    else this.bool = bool;
  }
  encrypt(message, key) {
    let result = [];
    let j = 0;
    message = message.toLowerCase().split("");
    key = key.toLowerCase().split("");
    for (let i = 0; i < message.length; i++) {
      if (message[i] == ")") result.push("\)");
      else if (message[i] == "(") result.push("\(");
      else if (message[i] == "*") result.push("*");
      else if (
        this.alphabet.search(message[i]) == -1 ||
        message[i].search(this.reg) != -1 ||
        message[i] == "."
      ) {
        result.push(message[i]);
      } else if (!key[j]) {
        if (
          this.alphabet.search(message[i]) +
            this.alphabet.search(key[j % key.length]) >
          26
        ) {
          result.push(
            this.alphabet[
              (this.alphabet.search(message[i]) +
                this.alphabet.search(key[j % key.length])) %
                26
            ].toUpperCase()
          );
        } else {
          result.push(
            this.alphabet[
              this.alphabet.search(message[i]) +
                this.alphabet.search(key[j % key.length])
            ].toUpperCase()
          );
        }
        j++;
      } else {
        result.push(
          this.alphabet[
            (this.alphabet.search(message[i]) +
              this.alphabet.search(key[j])) %
              26
          ].toUpperCase()
        );
        j++;
      }
    }
    if (this.bool == false) {
      return result.reverse().join("");
    } else {
      return result.join("");
    }
  }
  decrypt(message, key) {
    let result = [];
    let j = 0;
    message = message.toLowerCase().split("");
    key = key.toLowerCase().split("");
    for (let i = 0; i < message.length; i++) {
      if (message[i] == ")") result.push("\)");
      else if (message[i] == "(") result.push("\(");
      else if (message[i] == "*") result.push("*");
      else if (
        this.alphabet.search(`${message[i]}`) == -1 ||
        message[i].search(this.reg) != -1 ||
        message[i] == "."
      ) {
        result.push(`${message[i]}`);
      } else if (!key[j]) {
        if (
          this.alphabet.search(message[i]) -
            this.alphabet.search(key[j % key.length]) <
          0
        ) {
          result.push(
            this.alphabet[
              (this.alphabet.search(message[i]) -
                this.alphabet.search(key[j % key.length]) +
                26) %
                26
            ].toUpperCase()
          );
        } else {
          result.push(
            this.alphabet[
              this.alphabet.search(message[i]) -
                (this.alphabet.search(key[j % key.length]) % 26)
            ].toUpperCase()
          );
        }
        j++;
      } else {
        if (
          this.alphabet.search(message[i]) -
            this.alphabet.search(key[j]) <
          0
        ) {
          result.push(
            this.alphabet[
              (this.alphabet.search(message[i]) -
                this.alphabet.search(key[j]) +
                26) %
                26
            ].toUpperCase()
          );
        } else {
          result.push(
            this.alphabet[
              this.alphabet.search(message[i]) -
                (this.alphabet.search(key[j]) % 26)
            ].toUpperCase()
          );
        }
        j++;
      }
    }
    if (this.bool == false) {
      return result.reverse().join("");
    } else {
      return result.join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
