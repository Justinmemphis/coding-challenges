/* Printing Array elements with Comma delimiters
 * 8kyu
 *
 Description:


Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level
Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive array of elements
// Returns - return all array elements as a string
// Example - ['a','y','e'] -> 'a,y,e'
// Pseudocode:
// 	create result string
// 	iterate over the array
// 		add each element to the result string
// 	return result string
//
// 	easier ways to do this - array.join and return array;

function printArray(array){
	let result = '';
	for (var i = 0; i < array.length; i++) {
		result = result + array[i] + ',';
	};
	result = result.substring(0, result.length - 1);
	return result;
}
