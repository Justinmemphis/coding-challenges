/* Is my friend cheating?
 * 5kyu
 *
 * Description:
 

    A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
    Within that sequence, he chooses two numbers, a and b.
    He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
    Given a number n, could you tell me the numbers he excluded from the sequence?

The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
Examples:

removNb(26) should return [(15, 21), (21, 15)]
or
removNb(26) should return { {15, 21}, {21, 15} }
or
removeNb(26) should return [[15, 21], [21, 15]]
or
removNb(26) should return [ {15, 21}, {21, 15} ]
or
removNb(26) should return "15 21, 21 15"

or

in C:
removNb(26) should return  {{15, 21}{21, 15}} tested by way of strings.
Function removNb should return a pointer to an allocated array of Pair pointers, each one also allocated. 

Note

See examples of returns for each language in "RUN SAMPLE TESTS"
Fundamentals
Mathematics
Puzzles
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an integer n which is greater than zero
// Results - return all number pairs that equal the sum of all numbers in the sequence
// Example - (26) -> (15,21),(21,15)
// Pseudocode:
// 	create sum variable
// 	iterate zero to n
// 		add number to sum variable
// 	create pairs variable
// 	iterate from zero to n (j)
// 		iterate from 1 to n (k)
// 			if j * k = sum
// 				add pair to pairs
// 	return pairs
//
// 	didn't solve missing numbers - see solution below

function removeNb (n) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += i;
	};
	
	let pairs = [];
	for (let j = 0; j < n; j++) {
		for (let k = j + 1; k <= n; k++) {
			if (j * k === sum) {
				pairs.push([j, k]);
			};
		};
	};
	return pairs;
}


function removeNb (n) {
  // from the instruction:
  // a * b = S(n) - a - b

  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2

  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)

  // but a and b are natural and up to n

  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}



















