/* Sum Mixed Array
 8kyu

 Description:


Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
Fundamentals
Strings
Arrays
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of strings and numbers
// Results - return the sum of the array values (as if the strings were numbers)
// Examples - [5,'6', 7] returns 18
// Pseudocode:
// 	create sum variable (number)
// 	iterate over all elements of the array
// 		for each item add that amount (as a number) to the result variable
// 	return sum variable

function sumMix(x) {
	let sum = 0;
	for (var i = 0; i < x.length; i++) {
		sum += +x[i];
	};
	return sum;
}

