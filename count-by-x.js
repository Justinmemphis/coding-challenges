/*
 Count by X
 8kyu

 Description:



Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive two numbers as parameters.  Both are positive and greater than zero.  Assume to be whole numbers.
// Returns - return an array with the results of the function - second number is the multiple based on first interval
// Examples - countBy(3,4) === [3,6,9,12]
// Pseudocode:
// 	create result variable
// 	iterate over number list from zero to second parameter at speed of first parameter
// 		add current number to result
// 	return result

function countBy(x, n) {
	let z = [];
	let end = x * n;
	for (var i = x; i <= end; i = i + x) {
		console.log(i);
		z.push(i);
	};

	return z;
}

