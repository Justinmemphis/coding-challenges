/* Printer Errors
 * 7kyu
 *
 * Description:
 

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string greater than or equal to one that contains only letters a to z
// Results - return how many errors the string has over the length of the string
// Example - see above - return like "0/14"
// Pseudocode:
// 	create correct string variable
// 	create error counter
// 	iterate over the string
// 		if current string character does not equal correct string
// 			error counter++
// 	return error counter / input string length

function printerError(s) {
        let regex = /[n-z]/g;
        let matches = s.match(regex) || 0;
        let result = matches.length || 0;
        return `${result}/${s.length}`;

}



















