/* Adding Big Numbers
 * 4kyu
 *
 * Description:
 

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
Example

add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes

    The input numbers are big.
    The input is a string of only digits
    The numbers are positives

Mathematics
Big Integers
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two large numbers as strings
// Results - return the sum of those numbers as a string
// Example - 11 + 99 -> 110
// Pseudocode:
// 	create temp variable
// 	create result variable
// 	temp = slice last character from a
// 	temp += slice last character from b
// 	if (temp > 9) {
// 		result += temp - 9
// 	}
//

function add(a, b) {
    let arrayA = a.split('');
    let arrayB = b.split('');

    let temp = 0;
    let result = '';
    let carryover = 0;

    function addMe (x,y) {
        temp = carryover + (+x.pop() || 0);
        temp = temp + (+y.pop() || 0);
        if (temp >= 20) {
           carryover = 2;
           result = (temp-20).toString() + result;
        } else if (temp >= 10) {
          carryover = 1;
          result = (temp-10).toString() + result;
        } else {
          carryover = 0;
          result = temp.toString() + result;
        };

        if (x.length > 0) {
           addMe(x,y);
        } else if (y.length > 0) {
          addMe(x,y);
        } else if (carryover > 0) {
          result = carryover.toString() + result;
        } else {
          return result;
        };
    };

    addMe(arrayA,arrayB);

    return result;
}
