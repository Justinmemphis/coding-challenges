/* Pick a set of first elements
 * 8kyu
 Description:



Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []
Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array and an integer (or zero)
// Results - return the sequence up to that number (or zero)
// Examples - see above
// Pseudocode:
// 	if zero return blank array
// 	else if no second number
// 		return first element
// 	else
// 		return from zero to n-th element

function first(arr, n) {
	        let newArr = [];
        if (n == 0) {
                return [];
        } else if (!n) {
                newArr.push(arr[0]);
                return newArr;
        } else if (n > arr.length) {
                return arr;
        } else {
                for (var i = 0; i < n; i++) {
                    newArr.push(arr[i]);
                };
                return newArr;
        };
}
