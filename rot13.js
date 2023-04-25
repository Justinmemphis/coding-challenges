/* Rot13
 * 5kyu
 *
 * Description:
 *
 

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
Ciphers
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string
// Results - return the string with latin alphabet characters replaced with character 13 letters later
// Example - 'test' -> 'grfg'
// Pseudocode:
// 	create result string
// 	create cipher array
// 	iterate over the string
// 		if the character is between ASCII 65 -> 90 (uppercase)
// 			
// 		else if the character is between ASCII 97 -> 122 (lowercase)
// 			
// 		else
// 			add to the result string

/*
 This doesn't work - but leaving it for now in case I want to return to it later
function rot13(message){
	let result = '';
	let regexUpper = /[A-Z]/g;
	let regexLower = /[a-z]/g;
	for (var i = 0; i < message.length; i++) {
		if (regexUpper.test(message[i])) {
			let bigCode = message[i].charCodeAt(0);
			if (bigCode > 77) {
				bigCode = bigCode + 13 - 25;
				result += String.fromCharCode(bigCode);
			} else {
				bigCode += 13;
				result += String.fromCharCode(bigCode);
			};
		} else if (regexLower.test(message[i])) {
			let smallCode = message[i].charCodeAt(0);
			if (smallCode > 109) {
				smallCode = smallCode + 13 - 25;
				result += String.fromCharCode(smallCode);
			} else {
				smallCode += 13;
				result += String.fromCharCode(smallCode);
			};
		} else {
			result += message[i];
		};
	};
	return result;
}
*/

// This works:
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}











