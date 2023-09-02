/* Is it even?
 * 8kyu
 *
 * Description:
 

In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number n that can be positive or negative and an integer or a float
// Results - return true if even or false if not; float with decimal not zero is uneven
// Example - 2 -> true
// Pseudocode:
// 	return absolute value number modulo 2 equals 0

function testEven(n) {
	return (Math.abs(n) % 2) === 0;
};
