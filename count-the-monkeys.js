/* Count the Monkeys!
 8kyu

 Description:


You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]

Arrays
Fundamentals
Lists
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - given a single number (integer) that has a value of 1 or larger
// Results - return an array of all numbers up to that number, starting from 1
// Examples - 5 => [1,2,3,4,5]
// Pseudocode:
// 	create result array variable
// 	iterate up to input number
// 		for each number add that number to the result array
// 	return the result array

function monkeyCount(n) {
	let result = [];
	for (var i = 1; i <= n; i++) {
		result.push(i);
	};
	return result;
}
