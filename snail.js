/* Snail
 * 4kyu
 *
 * Description:
 Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

This image will illustrate things more clearly:

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
Arrays
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of n x n
// Results - return the results of the array sorted in a snail formation from top left to right to bottom then up
// Example - see above
// Pseudocode:
// 	create result variable
// 	subfunction (take in given variable)
// 		1. remove top row and add to result
// 		2. remove last element of each row and add to result
// 		3. remove last row (reverse) and add to result
// 		4. remove first element (reverse) and add to result
// 		if given greater than zero
// 			subfunction result
// 		else
// 			return result
// 	subfunction (result)
//
//
// 	didn't solve - see an answer that works below:

snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}


















snail = function(array) {

	function crawl (x) { // x = given
		let result = [];

		result.push(x.shift()); // 1. remove top row and add to result

		x.map( sublist => {	// 2. remove last element of each row and add to result
			result.push(sublist.pop());
		};

		result.push(x.pop().reverse()); // 3. remove last row (reverse) and add to result

		x.map( sublist => { // 4. remove first element (reverse) and add to result
			result.push(sublist.shift().reverse());
		};

		if (x != []) {
			crawl(x);
		} else {
			return result;
		};	

	};

	crawl(array);
}


















