/* Your order, please
 * 6kyu
 *
 * Description:
 

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an empty string or a string with one to nine words
// Results - return the string sorted by the digits within each word (only one to nine)
// Examples - "john2 hello1" -> "hello1 john2"
// Pseudocode:
// 	create result array
// 	create temp array which equals the words of the string separated by a space
//	function iterate through the temp array (digit one)
//		create digit equals one
//		if the array contains the digit
//			push to the result array
//		if the result array is still less than the temp string length
//			add one to digit
//			run function again
//	return result array

function order(words){
	if (words === '') {
		return '';
	};
	let result = [];
	let temp = words.split(' ');
	let digit = 1;
	function tempSort(digit, temp, result) {
		for (var i = 0; i < temp.length; i++) {
			if (temp[i].includes(digit)) {
				result.push(temp[i]);
			};
		};
		if (result.length < temp.length) {
			digit++;
			tempSort(digit, temp, result);
		};
	};
	tempSort(digit, temp, result);
	return result.join(' ');
}
















