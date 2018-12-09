// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reverse, character) => {
    return character + reverse;
  });
}

module.exports = reverse;

// Solution 1
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// Solution 2
// function reverse(str) {
//   let newStr = "";
//   for (letter of str) {
//     newStr = letter + newStr;
//   }
//   return newStr;
// }
