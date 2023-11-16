module.exports = function (str) {
  if (typeof str !== "string") {
    throw new Error("kebab_case: input must be a string");
  }

  let toReturn = str.trim();

  return toReturn
    .split("")
    .map((char) => {
      const invalidChars = "!\"£$%&_'/()=?^*§°ç@#[]{}|\\";
      const replaceMap = {
        à: "a",
        è: "e",
        é: "e",
        ì: "i",
        ò: "o",
        ù: "u",
      };

      if (char === " ") {
        return "-";
      }

      if (invalidChars.includes(char)) {
        return "";
      }

      if (replaceMap.hasOwnProperty(char)) {
        return replaceMap[char];
      }

      return char;
    })
    .join("")
    .toLowerCase();
};
