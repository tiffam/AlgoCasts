// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strObject = {};
  let counter = 0;
  let max = "";
  for (let char of str) {
    if (!strObject[char]) {
      strObject[char] = 1;
    } else {
      strObject[char]++;
    }

    for (let char in strObject) {
      if (strObject[char] > counter) {
        counter = strObject[char];
        max = char;
        console.log(max);
      }
    }
  }

  return max;
}

module.exports = maxChar;
