/* Swap values
 * 8kyu
 Description:
 

I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
Debugging
Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array
// Results - return array with arguments separated
// Example - see code
// Pseudocode - see code
// 	the original example didn't work because it was a shallow copy and
// 	it referred to the same pointer.  I did a deep copy below and that
// 	fixed this issue.

function swapValues(args) {
  let temp = [...args];
  args[0] = temp[1];
  args[1] = temp[0];
  return args;
}
