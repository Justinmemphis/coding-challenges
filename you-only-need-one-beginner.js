/*
Description:


You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
Fundamentals
Strings
Arrays
*/

// Solution:

// PREP = Parameters, Returns, Examples, Pseudo Code
// Parameters = you are given an array a.  The array can contain numbers or strings.
// 	You are also given a value x.  The value can be either a number or a string.
// Returns = return true if the array a contains the value x; return false otherwise
// Examples = [2,3,5], 3 => true; ['a','b','c'], 'd' => false
// Pseudo code: iterate over the array.  Check if the current value equals the desired value.
// 	If there is a match, return true and stop iterating.  If there is not a match, keep
// 	iterating.  If you reach the end without a match, return false. (set default value
// 	to false).

function check(a, x) {
	// your code here
	let result = false;
	for (var i = 0; i < a.length; i++) {
		if (a[i] === x) {
			result = true;
		};
	};
	return result;
}
