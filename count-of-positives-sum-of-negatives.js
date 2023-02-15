/*
 Count of positives / sum of negatives
 8kyu

 Description:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
Fundamentals
Arrays
Lists

*/

// Solution:

// PREP = Parameters, Returns, Examples, Pseudo Code
// Paramaters = an array of numbers (can be an empty array or a null value in an array)
// Returns = return two number values - an array pair - the first value is the count of positive numbers in the original array and the second
// 	value is the sum of the negative numbers in the array
// Examples = [1,2,3,-4] returns [3, -4]
// Pseudo Code = create positive count and negative sum; iterate over the array; if empty or null do nothing; 
// 	if item in array is positive count is plus one; if item in array is negative add to negative sum; 
// 	at end return positive count and negative sum

function countPositivesSumNegatives(input) {
  // your code here
  console.log(input);
  let count = 0;
  let sum = 0;
  if (!input || input.length === 0) {
    return [];
  } else {
    for (var i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count++;
      } else if (input[i] < 0) {
        sum += input[i];
      } else {

      }
    }
    return [count, sum];
  }
}
