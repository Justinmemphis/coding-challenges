/* Find the divisors!
 * 7kyu
 *
 * Description:
 

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

Mathematics
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer greater than 1
// Results - return all of the divisors up to the number itself,
// 	sorted smallest to largest
// Example - 15 -> 3, 5
// Pseudocode:
// 	create result array
// 	iterate from 1 to the integer-1
// 		if integer / number modulo zero
// 			add integer to result array
// 	return result array

function divisors(integer) {
	let result = [];
        for (let i = 2; i < integer-1; i++) {
                if (integer % i === 0) {
                        result.push(i);
                };
        };
        if (result.length === 0) {
          return `${integer} is prime`;
        } else {
          return result;
        };
}






