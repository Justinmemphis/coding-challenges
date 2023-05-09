/* Primes in numbers
 * 5kyu
 *
 * Description:
 

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

Fundamentals
Mathematics
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a positive number greater than 1
// Results - return the prime factor decomposition of n in a string format
// Example - see above
// Pseudocode:
// 	didn't solve - got answer instead

const primeFactors = n => {
  if (n < 2) return `(${n})`;
  let factors = '';
  for ( let i = 2; i <= n; i++) {
    let count = 0;
    while ( n%i === 0 ) {
      count++;
      n /= i;
    }
    if (count) {
      factors += `(${i}`;
      if (count > 1) factors += `**${count}`;
      factors += `)`;
    }
  }
  return factors;
}
