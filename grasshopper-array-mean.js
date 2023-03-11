/* Grasshopper - Array Mean
 * 8kyu
 
 Description:

Find Mean

Find the mean (average) of a list of numbers in an array.
Information

To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16

2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4

3. The mean (or average) of this list is 4
Arrays
Lists
Fundamentals
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive an array with only numbers - assume not zero - assume more than one
// Returns - return the mean of the numbers
// Examples - [1,2,3] -> 2
// Pseudocode:
// 	create sum variable
// 	iterate over array
// 		add each array value to sum
// 	return sum divided by array length

var findAverage = function (nums) {
	let sum = 0;
	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	};
	return sum / nums.length;
}
