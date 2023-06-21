/* Equal Sides Of An Array
 * 6kyu
 *
 * Description:
 

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
Algorithms
Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of numbers
// Results - return the middle point where the numbers to the left and the numbers to the right equal the same
// 	(if possible, else return -1);
// Example - [1,2,3,4,3,2,1] -> 3
// Pseudocode
// 	create beg sum, end sum, i
// 	iterate from beginning to end of array
//		beg sum += current
// 		iterate from end to beginning of array
// 			end sum += current
// 			if beg sum == current sum
// 				result = i
// 				break
// 	if (i) return i;		
// 	else return -1o
//
// 	didn't solve - see solution below:

function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}


function findEvenIndex(arr) 
{
	let begSum, endSum, result;

	for (let i = 0; i < arr.length; i++) {
		begSum += arr[i];
		for (let j = arr.length-1; j >= 0; j--) {
			endSum += arr[j];
			if (begSum == endSum) {
				result = i;
				break;
			};
		};
	};

	if (result) {
		return result;
	} else {
		return -1;
	};
};













