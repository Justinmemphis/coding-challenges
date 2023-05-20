/* Isograms
 * 7kyu
 *
 * Description:
 

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return if the string is an isogram or not (has only unique characters)
// Pseudocode - use regex to test if character is unique

function isIsogram(str){
	str = str.toLowerCase();
	let regex = /(.).*\1/;
	if (regex.test(str) === true) {
		return false;
	} else {
		return true;
	};
}
