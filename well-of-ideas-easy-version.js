/* Well of Ideas - Easy Version
 8kyu

 Description:


For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
Fundamentals
Arrays
Strings
Refactoring
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive array with strings
// Returns - return one of three strings
// Examples - ['good'] -> 'Publish!'
// Pseudocode:
// 	iterate over the array
// 	count how many 'good' strings
// 	if 0 return 'Fail!'
// 	if 1 or 2 return 'Publish!'
// 	if more than 2 return 'I smell a series!'

function well(x) {
	let sum = 0;
	for (var i = 0; i < x.length; i++) {
		if (x[i] === 'good') {
			sum++;
		};
	};
	if (sum === 0) {
		return 'Fail!';
	} else if (sum === 1 || sum === 2) {
		return 'Publish!';
	} else {
		return 'I smell a series!';
	};
}
