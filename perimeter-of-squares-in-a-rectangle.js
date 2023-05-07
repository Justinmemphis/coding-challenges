/* Perimeter of squares in a rectangle
 * 5kyu
 *
 * Description:
 

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text
Hint:

See Fibonacci sequence
Ref:

http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216

Mathematics
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameter - receive number of squares
// Results - return the sum of the perimeters of the squares (should be fibonacci sum)
// Example - see above
// Pseudocode:
// 	create result array
// 	iterate over the array up to the number
// 		perform fibonacci calculation
// 	sum result array values
//
// 	didn't solve it - pulled this solution:

const perimeter = N => {
	let [a, b] = [1, 1];
	for (let i = 0; i <= N; i++) [a, b] = [b, a + b];
	return (b - 1) * 4;
}

function perimeter(n) {
	var fib = [0, 1];
	for (var i = 02; i <= n; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	};
	return fib.reduce((partialSum, a) => partialSum + a, 0);
}
