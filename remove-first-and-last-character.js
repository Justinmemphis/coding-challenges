/* Remove First and Last Character
 * 8kyu
 
 Description:


It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string of at least two characters
// Results - return the string without the first and last characters
// Examples - 'storm' -> 'tor'
// Pseudocode:
// 	return the substring without the first and last letters

function removeChar(str) {
	return str.substring(1,str.length-1);
}
