/* Regex validate PIN code
 * 7kyu
 *
 * Description:
 

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

Regular Expressions
Fundamentals
*/

// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - validate if that string is only 4 digits or only 6 digits
// Example - 1234 -> true; 1234a -> false
// Pseudocode:
// 	create regex
// 	return test of regex

function validatePIN (pin) {
	let regex = /^\d{4}(?:\d{2})?$/;
	return regex.test(pin);
}
