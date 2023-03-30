/* Convert a Number to a String!
 * 8kyu
 *
 Description:



We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?
Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an integer
// Results - return a string
// Examples - 123 -> '123'
// Pseudocode:
// 	return string version of input

function numberToString(num) {
	return num.toString();
}
