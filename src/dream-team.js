const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = [];
  if (typeof(members) === "object" && members !== null) {
  for (let i = 0; i < members.length; i++) {
    if(typeof(members[i]) === "string") {
      let ArrMember = members[i].split("");
        let symb = 0;
        while (ArrMember[symb] == " ") symb++;
        teamName.push(ArrMember[symb].toUpperCase());
      }
    }
  } else return false;
    return teamName.sort().join("");
  }
