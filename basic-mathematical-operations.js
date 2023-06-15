/* Basic Mathematical Operations
 * 8kyu
 *
 * Description:
 

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

Mathematics
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an operand, then two numbers
// Results - perform the operation against the two numbers
// Example - *, 2, 2 -> 4
// Pseudocode
// 	return value 1 operation value 2

function basicOp(operation, value1, value2)
{
	  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}
