/* Find the smallest integer in the array
 * 8kyu
 *
 * Description:
 

Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of integers
// Results - return the smallest integer
// Example - see above
// Pseudocode:
// 	create min variable
// 	iterate over the array
// 		if the current element is larger than the min variable
// 			min equals current element
// 	return min variable

class SmallestIntegerFinder {
	findSmallestInt(args) {
		                    let min = Infinity;
                for (var i = 0; i < args.length; i++) {
                        if (args[i] < min) {
                                min = args[i];
                        };
                };
                return min;
	}
}
