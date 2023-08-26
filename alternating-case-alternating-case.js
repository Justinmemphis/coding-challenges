/* altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 * 8kyu
 *
 * Description:
 
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string in mixed upper and lower case
// Results - return string with characters in opposite case
// Example - 'hello world' -> 'HELLO WORLD'
// Pseudocode:
// 	create result array
// 	iterate over given string
// 		if upper case
// 			add lowercase version to array
// 		else // lowercase
// 			add uppercase version to array
// 	return result array joined

String.prototype.toAlternatingCase = function () {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		if (this.charCodeAt(i) > 64 && this.charCodeAt(i) < 91) { // if uppercase
			result.push(this[i].toLowerCase());
		} else if (this.charCodeAt(i) > 96 && this.charCodeAt(i) < 123) { // if lowercase
			result.push(this[i].toUpperCase());
		} else {
			result.push(this[i]);
		};
	};
	return result.join('');
};
