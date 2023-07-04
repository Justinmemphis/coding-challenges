/* Is this a triangle?
 * 7kyu
 *
 * Description:
 

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
Mathematics
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive three integer values
// Results - return true if the integers can be used to build a triangle
// Example - 1,2,3 -> true; 7,2,2 -> false
// Pseudocode:
// 	if a + b > c
// 		if b + c > a
// 			if a + c > b
// 				return true
// 			else
// 				return false
// 		else
// 			return false
// 	else
// 		return false

function isTriangle(a,b,c) {
	return (((a + b) > c) && ((a + c) > b) && ((b + c) > a));
}
