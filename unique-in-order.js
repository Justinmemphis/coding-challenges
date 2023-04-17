/* Unique In Order
 * 6kyu
 * 
 * Description:
 

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Algorithms
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a sequence of numbers or letters as an array or string
// Results - return the unique items from the sequence in order
// Examples - see above
// Pseudocode:
// 	create result array
// 	create temp array which equals sequence divided by character
// 	push first result to result array
// 	iterate over the sequence from first result on
// 		if this element does not equal the prior element
// 			push to result array
// 	return result array

var uniqueInOrder=function(iterable){
        let result = [];
        let temp = [];
        if (!iterable) {
          return [];
        };
        if (typeof iterable == 'string') {
                temp = iterable.split('');
        } else if (typeof iterable == 'object') {
                temp = iterable;
        };
        result.push(temp[0]);
        for (var i = 1; i < temp.length; i++) {
                if (temp[i] != temp[i-1]) {
                        result.push(temp[i]);
                };
        };
        return result;
}
