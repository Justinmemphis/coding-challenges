/* Sum by Factors
 * 4kyu
 *
 * Description:
 

Given an array of positive or negative integers

 I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.
Example:

I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]

[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

    It can happen that a sum is 0 if some numbers are negative!

Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

    In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

Arrays
Algorithms
Mathematics
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of positive or negative integers
// Results - return an array with each element containing 1st the prime factor of one of the elements and 2nd the sum of all elements
// 	for which it is a prime factor
// Example - [12,15] -> [ [2,12], [3,27], [5,15] ]; [7,11] -> [ [7, 7], [11, 11] ]
// Pseudocode:
// 	create result array
// 	create factor list
// 	create factor function
//		if factors not in list add to list
//
// 	find factors for each number
//
// 	for each factor iterate over the list
// 		if element is divisible by factor
// 			add to sum amount
// 		add factor and sum to result
// 	
// 	return result
//
// 	didn't solve - see my favorite answer below

// my partial work:

function sumOfDivided(lst) {
	let result = [];
	let factorList = [];

	const findFactors = number => Array // this doesn't work for negative numbers
		.from(Array(number + 1), (_, i) => i)
		.filter(i => number % i === 0)

	const findNegative = number => Array // this doesn't work at all
		.from(Array(number - 1), (_, i) => i)
		.filter(i => number % i === 0)
}

// favorite answer: (with my comments)
const sumOfDivided = a => a
  .reduce((r, e) => r.concat(getFactors(e)), []) // find factors
  .filter((e, i, a) => i === a.indexOf(e)) // get unique values
  .sort((x, y) => x - y) // sort ascending
  .map(x => [x, a.reduce((r, e) => r + (e % x ? 0 : e), 0)]); // add up the sum of factors
 
const getFactors = n => { // this gets the factors
  const factors = [];
  for (let i = 2, x = Math.abs(n); i <= x; i++) // use absolute value to handle negative numbers; otherwise classic formula
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  return factors;
}








