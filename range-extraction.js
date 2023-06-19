/* Range Extraction
 * 4kyu
 *
 * Description:
 

A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

Courtesy of rosettacode.org
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of sorted integers
// Results - return the array but with ranges combined
// Example - see above
// Pseudocode:
// 	create result array
// 	create temp array
// 	iterate over the given array from beginning number to end number, 1 by 1
// 		if array includes number
// 			add to temp
// 		else
// 			if temp.length > 2
// 				push temp[0] to temp[length-1] to result array
// 				return temp to blank
// 			else if temp.length == 2
// 				push temp[0] and temp[1] to result
// 				return temp to blank
// 			else
// 				push temp[0] to result
// 				return temp to blank
// 	return result
//
// 	didn't solve - see answer that works below (gave up after 30 minutes)

function solution(list) {
  var temp = [], result = [];
  for (var i = 0; i < list.length; i++) {
    temp.push(list[i]);
    if (list[i] + 1 !== list[i + 1]) {
      if (temp.length >= 3)
        result.push(temp[0] + "-" + list[i]);
      else
        while (temp.length > 0)
          result.push(temp.shift());
      temp = [];
    }
  }
  return result.join();
}


function solution(list){
	let result = [];
	let temp = [];
	for (var i = list[i]; i < list[list.length-1]; i++) {
		if (list.includes(list[i])) {
			temp.push(list[i]);
		} else {
			if (temp.length > 2) {
				result.push(`${temp[0]}-${temp[temp.length-1]}`);
				temp = [];
			} else if (temp.length == 2) {
				result.push(temp[0]);
				result.push(temp[1]);
				temp = [];
			} else {
				result.push(temp[0]);
				temp = [];
			};
		};
	};
	
	if (temp.length > 2) {
		result.push(`${temp[0]}-${temp[temp.length-1]}`);
		temp = [];
	} else if (temp.length == 2) {
		result.push(temp[0]);
		result.push(temp[1]);
		temp = [];
	} else {
		result.push(temp[0]);
		temp = [];
	};
	
	return result;
}
