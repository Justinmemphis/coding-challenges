/* Scramblies
 * 5kyu
 *
 * Description:
 

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

Strings
Performance
Algorithms
*/

// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive two strings (only lowercase, no punctuation or digits)
// Results - see if str2 only includes characters from str1
// Example - see above
// Pseudocode:
// 	create sorted string 1
// 	create sorted string 2
// 	if string 1 in string 2
// 		return true
// 	else
// 		return false
//
// 		didn't solve - looked at answer

function scramble(str1, str2) {
	function scramble(str1, str2) {
  let obj = str1.split('').reduce((acc, c) => {
    acc[c]++;
    return acc
  }, {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0,
      'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0,
      's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0}
  );
  return str2.split('').every(c => obj[c]-- !== 0);
};
}










