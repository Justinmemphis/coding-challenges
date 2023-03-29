/* Return Negative
 * 8kyu
 *
 * Description:
 

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number (zero, positive, or negative)
// Results - return the number as a negative
// Examples - (6) -> -6; (-4) -> -4
// Pseudocode:
// 	return negative absolute value of the number

function makeNegative(num) {
	return -Math.abs(num);
}
