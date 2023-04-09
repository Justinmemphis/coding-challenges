/* Counting Duplicates
 * 6kyu
 *
 Description:

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string with only characters (upper or lower case) and also numeric digits
// Results - return highest count of duplicates (case-insensitive)
// Pseudocode:
// 	create count variable number set to zero
// 	lowercase the string
// 	sort the string
// 	separate the string by duplicates and put in an array
// 	count equals the highest length string in the array
// 	return the count

function duplicateCount(text){
	return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
