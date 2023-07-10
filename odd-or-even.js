/* Odd or Even?
 * 7kyu
 *
 * Description:
 
Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Have fun!
Fundamentals
Arrays
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of integers
// Results - return if the sum of the array is odd or even (as a string)
// Example - [0, -1, -5] -> 'even'
// Pseudocode:
// 	create sum variable
// 	iterate over array and add to sum
// 	if sum even ? "even" : "odd"

function oddOrEven(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	};
	return sum % 2 === 0 ? 'even' : 'odd';
}
