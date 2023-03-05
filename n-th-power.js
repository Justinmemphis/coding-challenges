/* N-th power
 * 8kyu
 
 Description:

This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

    array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
    array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

Fundamentals
Arrays
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - start with an array of positive numbers.  I also get a non-negative number N.
// Results - I want to return the N-th power of the element from the array with the index value N
// Examples - [2,3,5], N = 2 --> 5 ^ 2 = 25
// Pseudocode:
// 	if N index element doesn't exist
// 		return -1
// 	else return [index element] times N

function index (array, n) {
	if (!array[n]) {
		return -1;
	} else {
		return Math.pow(array[n], n);
	};
}
