/*
Square(n) Sum
8kyu

Description:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
Arrays
Lists
Fundamentals
*/

// Solution:

function squareSum(numbers){
  let result = 0;
  for (var i = 0; i < numbers.length; i++) {
    let temp = numbers[i] * numbers[i];
    result = result + temp;
  }
  return result;
}
