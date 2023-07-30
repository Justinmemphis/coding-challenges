/* Find the missing letter
 * 6kyu
 *
 * Description:
 
Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
Mathematics
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of upper or lower case letters in order
// Results - return the missing letter from the alphabetical sequence
// Example - a,b,c,d,f -> e
// Pseudocode:
// 	create alphabet variable
// 	iterate over given array
// 		iterate over alphabet (starting from first number of given array)
// 			if  alphabet doesn't match given array
// 				return letter
// 	return
//
// 	didn't solve - see favorite solution below

// my partial work that doesn't work:

function findMissingLetter(array)
{
	let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < array.length; i++) {
		for (let j = alphabet.indexOf(array[i]); j < alphabet.length; j++) { // indexOf alphabet letter at start of array
			if (array[i] != alphabet[j]) {
				return alphabet[j];
			};
		};
	};
	return;
}

// my favorite solution:

const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};
