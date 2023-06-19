/* Convert a String to a Number!
 * 8kyu
 *
 * Description:
 Description:

Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples

"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

Parsing
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return a number
// Example - '1234' -> 1234
// Pseudocode
// 	return +string

const stringToNumber = function(str){
	return +str;
}
