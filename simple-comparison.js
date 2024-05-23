/* Simple Comparison?
 * Codewars
 * 8kyu
 *
 * Description:
 *

Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive one number and one string
// Results - return true if they are the same
// Example - '6',6 -> true
// Pseudocode:
// 	+a = b or a = +b true else false

function add(a, b){
  if (+a == b) {
    return true;
  } else if (a == +b) {
    return true;
  } else {
    return false;
  };
}
