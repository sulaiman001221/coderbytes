/*
For this challenge you will determine the largest double digit number.
Have the function LargestPair(num) take the num parameter being passed 
and determine the largest double digit number within the whole number.
For example: if num is 4759472 then your program should return 94 
because that is the largest double digit number. 
The input will always contain at least two positive digits.
*/

function largestPair(num) {
  let largePair = -Infinity;

  for (let i = 0; i < num.length; i++) {
    const temp = parseInt(num[i] + num[i + 1]);
    if (temp > largePair) largePair = temp;
  }
  return largePair;
}

//Test cases:
console.log(largestPair("47594795")); // 95
console.log(largestPair("453857")); // 85
console.log(largestPair("363223311")); // 63
console.log(largestPair("5673536634")); // 73
