/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const maxi = Number.MIN_SAFE_INTEGER;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > maxi) {
      maxi = element;
    }
  }
  return maxi;
}

module.exports = findLargestElement;
