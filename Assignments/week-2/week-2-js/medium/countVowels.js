/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let str1 = str.toLowerCase();
  for (let index = 0; index < str1.length; index++) {
    const element = str1[index];
    if(vowels.includes(element)){
      count++;
    }
  }
  return count;

}

module.exports = countVowels;
