/* Find The Parity Outlier
 * 6kyu
 *
 * Description:
 


You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of 3 to very large numbers of integers
// 	the array has only odd or even integers with one exception
// Returns - return the only odd or even number
// Examples - [1,2,4,6,8] -> return 1
// Pseudocode:
//	create even count number set to zero
//	create odd count number set to zero
//	iterate over the array
//		while even or odd count less than 2
//			if current element is even
//				increase even count 1
//			else
//				increase odd count 1
//	if even count 2
//		iterate over the array
//			if current element is odd
//				return current element
//	else
//		iterate over the array
//			if current element is even
//				return current element

function findOutlier(integers){
	let evenCount = 0;
  let result = 0;
  for (var i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
    };
  };
  if (evenCount >= 2) {
    for (var i = 0; i < integers.length; i++) {
      if (integers[i] % 2 != 0) {
        result = integers[i];
        break;
      };
    };
  } else {
    for (var i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        result = integers[i];
        break;
      };
    };
  };

  return result;
}







