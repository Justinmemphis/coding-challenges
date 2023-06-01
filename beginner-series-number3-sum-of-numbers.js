/* Beginner Series #3 Sum of Numbers
 * 7kyu
 *
 * Description:
 

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Your function should only return a number, not the explanation about how you get that number.
Fundamentals
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two integers
// Results - return the sum of all numbers between the two integers
// Example - 0,1 -> 1
// Pseudocode:
// 	create sum variable
// 	iterate from a to b (inclusive)
// 		add each iteration to sum variable
// 	return sum variable

function getSum(a, b) {
	          let sum = 0;
        let max = 0;
        let min = 0;
        if (a > b) {
                max = a;
                min = b;
        } else {
                max = b;
                min = a;
        };
        for (var i = min; i < max+1; i++) {
                sum += i;
        };
        return sum;
}
