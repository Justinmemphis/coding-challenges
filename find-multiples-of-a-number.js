/* Find Multiples of a Number
 8kyu

 Description:
 In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
Fundamentals
Arrays
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a value (an integer) which is greater than zero; also receive a limit that is an integer that is greater than the first value
// Results - return multiples of the value up to the limit (which may or or may not be a multiple)
// Examples - (3, 10) -> 3,6,9
// Pseudocode:
//	create result array
//	iterate over numbers from starting value to limit (increment is value)
//		add to result array

function findMultiples(integer, limit) {
	let result = [];
	for (var i = integer; i <= limit; i = i + integer) {
		result.push(i);
	};
	return result
}

