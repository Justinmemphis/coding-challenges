/* Closest Elevator
 * Codewars
 * 8kyu
 *
 * Description:
 

Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

    left - The current floor of the left elevator
    right - The current floor of the right elevator
    call - The floor that called an elevator

It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - given two elevators with different floors and the floor that called the elevator
// Results - return the elevator closest to the called floor
// Example - see above
// Pseudocode:
// 	if (left == right)
// 		return right
// 	else if (left == call)
// 		return left
// 	else if (right == call)
// 		return right
// 	else
// 		call - left > call - right ? return right : return left

function elevator(left, right, call){
  console.log('left,right,call',left,right,call);
  if (left == right) {
    return 'right';
  } else if (left == call) {
    return 'left';
  } else if (right == call) {
    return 'right'
  } else if (call - right == left - call) {
    return 'right';
  } else if (call == 0) {
    return (right - call) > (left - call) ? 'left' : 'right';
  } else {
    return (call - right) > (call - left) ? 'left' : 'right';
  }
}
