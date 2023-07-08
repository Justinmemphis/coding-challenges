/* Ones and Zeros
 * 7kyu
 *
 * Description:
 

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.
Fundamentals
Arrays
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of digits of 1 and 0
// Results - join the array elements and return the binary number
// Example - 0,0,0,1 -> 1
// Pseudocode
// 	return array.join('').parseInt(n, 2)

const binaryArrayToNumber = arr => {
	return Number.parseInt(arr.join(''),2);
}

