/* Array.diff
 * 6kyu
 *
 * Description:
 

 Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

 It should remove all values from list a, which are present in list b keeping their order.

 arrayDiff([1,2],[1]) == [2]

 If a value is present in b, all of its occurrences must be removed from the other:

 arrayDiff([1,2,2,2,3],[2]) == [1,3]

 Arrays
 Fundamentals
 Algorithms
 */

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive two arrays
// Results - see what list a elements are in b and put them in a new list
// Examples - ([1,2], [1]) -> [1]
// Pseudocode
// 	create result array
// 	iterate over array a
// 		if element is not in b
// 			add to result array
// 	return result array

function arrayDiff(a, b) {
	let result = [];
	for (var i = 0; i < a.length; i++) {
		if (!b.includes(a[i])) {
			result.push(a[i]);
		};
	};
	return result;
}









