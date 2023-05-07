/* Does my number look big in this?
 * 5kyu
 *
 * Description:
 

A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
Algorithms
*/

// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a positive, non-zero number
// Results - return true or false based on if the number equals the sum of the digits raised to the length power
// Example - 153 => true (1^3 + 5^3 + 3^3) = 153
// Pseudocode:
// 	create result variable
// 	convert the number to a string
// 	iterate over the digits of the string
// 		for each digit raise it to the power of the length of the string
// 		add the result to the result variable
// 	if result variable equals given variable
// 		return true
// 	else
// 		return false

function narcissistic (value) {
	          let result = 0;
        let string = value.toString();
        for (var i = 0; i < string.length; i++) {
                let temp = Math.pow(+string[i],string.length);
                result += temp;
        };
        if (result == value) {
                return true;
        } else {
                return false;
        };
}




