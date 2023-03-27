/* Implement Array.prototype.filter()
 * 8kyu
 
 Description:


What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

More info can be found here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Arrays
Fundamentals
*/

// Solution
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array
// Results - array should be filtered like Array.prototype.filter()
// Examples - [1,2,3].filter(num => (num % 2) != 0) -> [2]
// Pseudocode:
// 	create result array
// 	iterate over the array
// 		if element meets the function condition push to result array
// 	return result array

Array.prototype.filter = function (func) {
	let result = [];
	for (var i = 0; i < this.length; i++) {
		if (func(this[i])) {
			result.push(this[i]);
		};
	};
	return result;
}
