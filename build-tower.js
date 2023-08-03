/* Build Tower
 * 6kyu
 *
 * Description:
 
Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

Go challenge Build Tower Advanced once you have finished this :)
Strings
ASCII Art
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer
// Results - return an array with * for each level to create towers like above
// Example - 3 -> ['  *  ', ' *** ', '*****']
// Pseudocode:
// 	create result array
//
// 	subfunction
// 	iterate from 1 up to number
// 		push to result array (spaces times number -i) i times * (spaces times number -i)
//
// 	return result
//

function towerBuilder(nFloors) {
  let result = [];
  for (let i = 1; i <= nFloors; i++) {
    result.push((' '.repeat(nFloors - i)) + ('*').repeat((i*2)-1) + (' '.repeat(nFloors - i)));
  };
  return result;
}











