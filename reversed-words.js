/* Reversed Words
 * 8kyu
 *
 * Description:
 

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return the string with all of the words reversed
// Example - 'hello world' -> 'world hello'
// Pseudocode:
// 	return string split reversed joined

function reverseWords (str) {
	return str.split(' ').reverse().join(' ');
}
