/* Next smaller number with the same digits
 * 4kyu
 *
 * Description:
 

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017

Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

    some tests will include very large numbers.
    test data only employs positive integers.

The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."
Strings
Mathematics
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a positive integer
// Results - return the next smaller integer with the same digits or -1 if there isn't one (no leading zeros)
// Example - 531 -> 513
// Pseudocode:
// 	if length is one
// 		return -1
// 	if length is two
// 		reverse digits - if smaller return else return -1
// 	else
// 		iterate from last to first digits, starting at second-to-last digit
// 			if n > n+1
// 				switch digits and return
// 		return -1
//
// 	didn't solve - see below for partial work and favorite solution

// partial work - doesn't work:

function nextSmaller(n) {
	        let x = n.toString().split(''); // make an array;
        console.log('x',x);
        if (x.length === 1) {
                return -1;
        } else if (x.length === 2) {
                if (x[0] > x[1]) {
                  [x[0],x[1]] = [x[1],x[0]];
                  return +x.join('');
                } else {
                  return -1;
                };
        } else {
                for (let i = x.length-1; i >= 0; i--) {
                  console.log('x[i]',x[i]);
                        if (x[i] > x[i+1]) {
                                [x[i], x[i+1]] = [x[i+1], x[i]];
                                return +x.join('');
                        };
                };
                return -1;
        };
}

// favorite solution:

const nextSmaller = n => {
  let min = minify(n);
  while (--n >= min) if (minify(n) === min) return n;
  return -1;
};

const minify = n => [...`${n}`].sort().join`` // this is a simple shallow copy of the string of the number, sorted then joined
	.replace(/^(0+)([1-9])/, '$2$1'); // this is swapping the first group (leading zeroes) with the second group (numbers)














