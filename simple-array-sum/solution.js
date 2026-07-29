/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

// Given an array of integers, find the sum of its elements.

// For example, if the array `ar = [1, 2, 3]`, then `1 + 2 + 3 = 6`, so return `6`.

// ## Function Description

// Complete the `simpleArraySum` function in `solution.js`.

// - `int[] ar`: an array of integers

// Returns:
// - `int`: the sum of the array elements

function simpleArraySum(ar) {
  const arraySum = ar.reduce((acc, num) => acc + num,0);
  return arraySum;
}

module.exports = simpleArraySum;
