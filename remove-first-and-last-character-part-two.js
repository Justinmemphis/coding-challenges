/* Remove First and Last Character Part Two
 * 8kyu
 Description:



This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
Examples

"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

Fundamentals
Arrays
Strings
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string with comma-separated values
// Results - return the same string but with first and last elements removed and separated by spaces instead; 
// 	if 0, 1, or 2 elements return NULL
// Examples - "3,5,7,9" -> "5 7"
// Pseudocode:
// 	create result variable
// 	if string is 0-2 characters
// 		return NULL
// 	else
// 		remove first element from string
// 		remove last element from string
// 		iterate over the string
// 			add new elements to the result variable separated by a space
// 		remove last element from string (trailing space)
// 		return string
// 	Note - messed this one up - copying best answer

function array(arr) {
	return arr.split(",").slice(1,-1).join(" ") || null;
}
