/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase();
  let end = str1.length - 1;
  let start = 0;
  while(end >= start){
    if(str1[start] != str1[end]){
      return false;
    }
    if(str1[start])
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;


