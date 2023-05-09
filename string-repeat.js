/* String repeat
 * 8kyu
 *
 * Description:
 

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer and a string
// Return the string repeated n number of times
// Example - 3,Hello -> HelloHelloHello
// Pseudocode:
// 	return str * n

function repeatStr (n, s) {
	return s.repeat(n);
}
