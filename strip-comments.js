/* Strip Comments
 * 4kyu
 *
 * Description:
 

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string of letters with occasional comments, and also receive a number of comment markers
// Results - return the string with comments removed based on the markers (all text after the marker)
// Example - see above
// Pseudocode:
// 	create temp array = string split by whitespace
// 	create mark
//
// 	thinking I would use regex to solve this problem
//
// 	didn't solve - see below for a good solution

function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}




























