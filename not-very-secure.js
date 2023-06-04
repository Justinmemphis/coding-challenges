/* Not very secure
 * 5kyu
 *
 * Description:
 

In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces / underscore

Regular Expressions
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return true if string is alphanumeric; return false if it is not
// Example - PassW0rd -> true; ' ' -> false
// Pseudocode:
// 	create regex for alphanumeric
// 	return regex test of string

function alphanumeric(string){
	let regex = /^[a-zA-Z0-9]+$/g;
	return regex.test(string);
}
