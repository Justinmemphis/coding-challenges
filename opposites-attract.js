/* Opposites Attract
 * 8kyu
 *
 * Description:
 

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two numbers
// Results - return true if one number is even and one is odd
// Example - 3,4 -> return true; 3,3 -> return false
// Pseudocode:
// 	if first number is even and second number is odd
// 		return true
// 	else if (first number is odd and second number is even)
// 		return true
// 	else
// 		return false

function lovefunc(flower1, flower2) {
	if (flower1 % 2 === 0 && flower2 % 2 != 0) {
		return true;
	} else if (flower1 % 2 != 0 && flower2 % 2 === 0) {
		return true;
	} else {
		return false;
	};
		
}
