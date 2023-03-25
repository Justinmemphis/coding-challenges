/* Take and Arrow to the knee, functionally
 * 8kyu
 *
 Description:


Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details

You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
Examples

These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
Arrays
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of numbers (which are numeric character codes)
// Results - return the array with the numbers converted into the characters they represent
// Examples - [#,#,#] -> [abc]
// Pseudocode:
// 	return -> (the map of (everything in the array -> converted to character))

var ArrowFunc = function(arr) {
	return arr.map( x => String.fromCharCode(x) ).join('');
}
