/* Maximum subarray sum
 * 5kyu
 *
 Description:


The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
Algorithms
Lists
Dynamic Programming
Fundamentals
Performance
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive array with numbers (positive or negative or zero) or empty array
// Results - for empty array return zero; if all negative numbers return zero; otherwise return maxium subsequence
// Examples - see above
// Pseudocode:
// 	create sum variable
// 	create result
// 	if empty array
// 		return zero
// 	else if only negative numbers
// 		return zero
// 	else
// 		iterate over the array

var maxSequence = function(arr){
    let sum = 0;
    let result = 0;
    if (arr == []) {
        return 0;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (sum > result) {
                result = sum;
            };
            if (arr[i] < 0) {
                if ((arr[i] + sum) < 0) {
                    sum = 0;
                } else {
                    sum += arr[i];
                };
            } else {
                sum += arr[i];
            };
        };
        if (sum > result) {
           result = sum;
        };
        return result;
    };
}
