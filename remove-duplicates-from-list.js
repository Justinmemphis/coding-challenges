/* Remove duplicates from list
 * 8kyu
 *
 * Description:
 *

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
Fundamentals
Arrays
Lists
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters: receive an array with numbers (assumed greater than zero array)
// Returns - return the same array but with duplicates removed
// Examples - [1,2,3,4,4] -> [1,2,3,4]
// Pseudocode:
// 	create result array
// 	iterate over the array
// 		if result is not in result array
// 			add to result array
// 	return result array

function distinct(a) {
	return [...new Set(a)];
}
