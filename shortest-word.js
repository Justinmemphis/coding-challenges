/* Shortest Word
 * 7kyu
 *
 * Description:
 

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string of words
// Results - return the longest word in the string
// Example - N/A
// Pseudocode:
// 	create array of the words
// 	choose min length of array

function findShort(s) {
	let newArray = s.split(' ');
	return Math.min(...newArray.map(x => x.length));
}
