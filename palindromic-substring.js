/*
For this challenge you will be finding the longest palindromic substring.

Have the function PalindromicSubstring(str) take the str parameter being passed 
and find the longest palindromic substring, 
which means the longest substring which is read the same forwards as it is backwards. 
For example: if str is "abracecars" then your program should return the string racecar 
because it is the longest palindrome within the input string.

The input will only contain lowercase alphabetic characters. 
The longest palindromic substring will always be unique, 
but if there is none that is longer than 2 characters, return the string none.
*/

function palindromicSubstring(str) {
  if (str.length < 3) return "none";
  let longestPal = "";

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const currPal = str.slice(left, right + 1);
      if (currPal.length > longestPal.length && currPal.length > 2) {
        longestPal = currPal;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return longestPal.length > 0 ? longestPal : "none";
}

// Test Cases
console.log(palindromicSubstring("abracecars")); // racecar
console.log(palindromicSubstring("hellosannasmith")); // sannas
console.log(palindromicSubstring("abcdefgg")); // none
console.log(palindromicSubstring("acaaca")); // acaaca
