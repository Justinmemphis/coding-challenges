/* Convert a String To an Array
 * 8kyu

Description:

Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

Arrays
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string of words with spaces in between
// Results - return an array of the words (no spaces)
// Examples - "My dog Jack" returns ['My','dog','Jack']
// Pseudocode:
// 	return the string split by whitespace

function stringToArray(string){

	// code code code
	return string.split(' ');

}
