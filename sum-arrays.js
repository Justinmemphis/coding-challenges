/* Sum Arrays
8kyu

Description:


Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
Assumptions

    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.

What We're Testing

We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
Arrays
Fundamentals
*/

// Solution:

// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of numbers (or zero).  The array has only numbers.  We do not know the size of the array.
// Results - return either zero or the sum of the array
// Examples - [1,2,3] returns 6
// Pseudocode:
// 	setup result variable
// 	if input is zero => result is zero
// 	else iterate over array and add each item to result
// 	return result

// Sum Numbers
function sum(numbers) {
	"use strict";
	let result;
	if (numbers == '') {
		result = 0;
	} else {
		for (var i = 0; i < numbers.length; i++) {
			result += numbers[i];
		}
	}
	return result;
}
