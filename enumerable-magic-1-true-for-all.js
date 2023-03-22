/* Enumerable Magic #1 - True for All?
 * 8kyu
 *
 * Description:
 

Task

Create a method all which takes two params:

    a sequence
    a function (function pointer in C)

and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
Example

all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True

Help

Here's a (Ruby) resource if you get stuck:

http://www.rubycuts.com/enum-all
Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive an array of numbers and a function
// Returns - return if the function evaluates the array as true or not
// Example - see above
// Pseudocode:
// 	iterate over the array
// 		apply the function against each element
// 			if return false then return false
// 	return true

function all(arr, fun) {
	for (var i = 0; i < arr.length; i++) {
		if (fun(arr[i]) != true) {
                	return false;
		};
	};
        return true;
}
