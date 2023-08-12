/* Third Angle of a Triangle
 * 8kyu
 *
 * Description:
 

You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two interior angles of a triangle (two positive integers)
// Results - return remaining angle (positive integer)
// Example - 10,20 -> 150
// Pseudocode:
// 	return 180 - a - b

function otherAngle(a, b) {
	return 180 - a - b;
};
