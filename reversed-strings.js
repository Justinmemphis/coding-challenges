/* Reversed Strings
 * 8kyu
 
 Description:
 Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string
// Results - return the string but reversed
// Examples - 'hello' -> 'olleh'
// Pseudocode:
// 	create new string
// 	iterate over the string in reverse order
// 		add the elements to the new string
// 	return new string

function solution(str) {
	let result = '';
	for (var i = str.length - 1; i >= 0; i--) {
		result += str[i];
	};
	return result;
}
