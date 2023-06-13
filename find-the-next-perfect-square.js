/* Find the next perfect square!
 * 7kyu
 *
 * Description:
 

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

Algebra
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a positive integer
// Results - return the next perfect square or -1 if the number is not a perfect square
// Example - 121 -> 144; 122 -> -1
// Pseudocode:
// 	if variable is a perfect square
// 		create nextNumber variable which equals variable + 1
// 		while (nextNumber isn't a perfect square)
// 			nextNumber++
// 	else
// 		return -1

function findNextSquare(sq) {
	          function isSquare (x) {
            return Math.sqrt(x) === Math.floor(Math.sqrt(x))
          };

        if (isSquare(sq)) {
                let nextNumber = Math.floor(Math.sqrt(sq)) + 1;
                while (!isSquare(nextNumber * nextNumber)) {
                        nextNumber++;
                };
                return nextNumber * nextNumber;
        } else {
                return -1;
        };
}










