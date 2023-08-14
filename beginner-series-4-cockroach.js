/* Beginner Series #4 Cockroach
 * 8kyu
 *
 * Description:
 

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive speed in km/hr
// Results - return speed in cm/s, rounded to lowest integer (floored)
// Example - 1.09 -> 30
// Pseudocode:
// 	return s divided by 1000 times 60

function cockroachSpeed(s) {
	return Math.floor(s / 3.6 * 100);
};
