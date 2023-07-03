/* Recover a secret string from random triplets
 * 4kyu
 *
 * Description:
 

There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array with elements of three letters each
// Results - decode the phrase when each character is before another character
// Example - see test suite
// Pseudocode:
// 	create result array = shift the array
// 	iterate over the array
// 		temp = shift the array
// 		iterate over temp
// 			iterate over result
// 				if result includes temp
// 					if temp[0] and at beginning? (do nothing)
// 					else if temp[2] and at end? (do nothing)
// 					else
// 						
// 				else
// 					put at beginning of result
// 	return result.join
//
// 	didn't solve see attempt below - see also a solution by someone else belowvar recoverSecret = function(triplets) {i


// working solution:

for(var [first] of triplets)
  {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}
	
var recoverSecret = function(triplets) {
	let result = triplets.shift();
	for (let i = 0; i < triplets.length; i++) {
		let temp = triplets.shift();
		for (let k = 0; k < temp.length; k++) {
			if (result.includes(temp[k])) {
				
			} else {
				result.unshift(temp[k]);
			};
		};
	};
}
 		





