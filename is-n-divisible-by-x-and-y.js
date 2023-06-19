/* Is n divisible by x and y?
 * 8kyu
 *
 * Description:
 

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

Refactoring
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive three positive, non-zero numbers
// Results - return true if the first number is divisible by both the second and third numbers
// Example - see above
// Pseudocode:
// 	if n modulo x == 0 and n modulo y == 0
// 		return true
// 	else
// 		return false

function isDivisible(n, x, y) {
	if (n % x === 0 && n % y === 0) {
		return true;
	} else {
		return false;
	};
}
