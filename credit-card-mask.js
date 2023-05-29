/* Credit Card Mark
 * 7kyu
 *
 * Description:
 

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"

Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string of digits or characters
// Results - return all but the last four digits as '#' symbol
// Example - see above
// Pseudocode:
// 	create result string
// 	iterate over the string from end to front
// 		if position is 4 or less from end
// 			push to result string
// 		else
// 			push '#' to result string
// 	return result string

function maskify(cc) {
	          let result = '';
        for (var i = cc.length; i >= 0; i--) {
                if (i > (cc.length-5)) {
                        result = cc.charAt(i) + result;
                } else {
                        result = '#' + result;
                };
        };
        return result;
}
