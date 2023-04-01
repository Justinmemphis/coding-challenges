/* No Loops 2 - You only need one
 * 8kyu
 *
 * Description:
 *

*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

No Loops 1 - Small enough?
Fundamentals
Arrays
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive an array a and a value x; the array can contain numbers or strings
// Returns - return true or false
// Examples - [1,2,3],2 -> True
// Pseudocode:
// 	use include - test if array includes and return true or false

function check(a,x) {
	       return (a.includes(x) ? true : false);
		// better solution - return (a.includes(x));
}

