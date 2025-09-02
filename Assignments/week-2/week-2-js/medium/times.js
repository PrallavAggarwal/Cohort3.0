/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  const time1 = new Date();
  let startTime = Date.now();
  let sum = 0;
  console.log(`sum : ${sum} and time : ${startTime}.`);
  for (let index = 0; index < n; index++) {
    sum++;
  }
  let endTime = Date.now();
  console.log(`sum : ${sum} and time : ${endTime - startTime}.`);
}
calculateTime(10);
calculateTime(100);
calculateTime(1000);
calculateTime(10000);
calculateTime(1000000);
calculateTime(100000000);
calculateTime(1000000000);
