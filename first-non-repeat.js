/*
Searching Challenge
Have the function Searching Challenge (str) take the str parameter being passed,
which will contain only alphabetic characters and spaces, and return the
first non-repeating character. For example: if str is "agettkgaeee" then
your progran should return k. The string will always contain at least one
character and there will always be at least one non-repeating character.

Examples

Input: "abcdef"
Output: a

Input: "hello world hi hey"
Output: w
*/

function firstNonRepeat(str) {
  str = str.toLowerCase();
  const counts = {};

  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  for (const char of str) {
    if (counts[char] === 1) return char;
  }
}

// Test cases
console.log(firstNonRepeat("hello world hi hey")); // w
console.log(firstNonRepeat("abcdef")); // a
