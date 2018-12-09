// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Note to self: Don't have to put an if statement as we can directly
// get the answer by returning str === reverseStr

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
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

// solution 3
// function palindrome(str) {
//   let reverseStr = "";
//   for (let char of str) {
//     reverseStr = char + reverseStr;
//   }
//   return str === reverseStr;
// }
