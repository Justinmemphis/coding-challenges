/* Last digit of a large number
 * 5kyu
 *
 * Description:
 

Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. Also, please take 000^000 to be 111.

You may assume that the input will always be valid.
Examples

lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0

Remarks
JavaScript, C++, R, PureScript, COBOL

Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.
Algorithms
Mathematics
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two large numbers (as strings)
// Results - return the last decimal digit of number 1 times number 2
// Example - 4, 2 -> 6
// Pseudocode:
// 	create list of cycles numbers go through
// 	the last digit equals integer version of string number 1 digit before
//
// 	second number modulo 4 - 1
// 	go into list of cycles

var lastDigit = function(str1, str2){
	let pattern = {
		0: [0,0,0,0],
		1: [1,1,1,1].
		2: [2,4,8,6],
		3: [3,9,7,1],
		4: [4,6,4,6],
		5: [5,5,5,5],
		6: [6,6,6,6],
		7: [7,9,3,1],
		8: [8,4,2,6],
		9: [9,1,9,1]
	};


	let last_digit = +(str(str1)[-1])
	let result = pattern[last_digit];
	return result[(str2 % 4) - 1];
};

// didn't solve using above solution.  Here is my favorite of the given solutions:

var lastDigit = function(str1, str2){

  // if exponent is 0, return 1

  if (parseInt(str2) === 0) return 1;

  // otherwise...
  // 0 always returns 0
  // 1 always returns 1
  // 2 rotates between 2, 4, 8, 6....
  // 3 rotates between 3, 9, 7, 1....
  // 4 rotates between 4, 6....
  // 5 always returns 5
  // 6 always returns 6
  // 7 rotates between 7, 9, 3, 1....
  // 8 rotates between 8, 4, 2, 6....
  // 9 rotates between 9, 1....

  // because we only need the final digit of str1 to determine the result, let's capture it
  var seed = parseInt(str1.slice(-1)) % 10;
  // at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
  var exp = parseInt(str2.slice(-2)) % 4;
  if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.


  // so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
  //

  return Math.pow(seed, exp) % 10;
}
















