/* Create Phone Number
 * 6kyu
 *
 * Description:
 

 Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 Example

 createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

 The returned format must be correct in order to complete this challenge.

 Don't forget the space after the closing parentheses!
 Arrays
 Strings
 Regular Expressions
 Algorithms
 */

// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of 10 integers
// Results - return those integers as a phone number
// Examples - [1,1,1,1,1,1,1,1,1,1] - (111) 111-1111
// Pseudocode:
// 	using template literal

function createPhoneNumber(numbers){
	function createPhoneNumber(numbers){
		  let result = numbers.join('').toString();
		  return `(${result.slice(0,3)}) ${result.slice(3,6)}-${result.slice(6,10)}`
	}
}
