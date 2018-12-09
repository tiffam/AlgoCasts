// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reverseStr = "";
  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindrome;

// Solution 1
// function palindrome(str) {
//   if (
//     str
//       .split("")
//       .reverse()
//       .join("") === str
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution 2
// function palindrome(str) {
//   let reverseStr = str.split("").reduce((rev, char) => char + rev);

//   if (str === reverseStr) {
//     return true;
//   } else {
//     return false;
//   }
// }
