// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//note that we can't use Number() here as it doesn't convert '100-' into 100.

function reverseInt(n) {
  return (
    Math.sign(n) *
    parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join("")
    )
  );
}

module.exports = reverseInt;
