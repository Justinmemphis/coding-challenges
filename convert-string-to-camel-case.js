/* Convert string to camel case
 * 6kyu
 *
 Description:


Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
Regular Expressions
Algorithms
Strings
*/

// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string that is dash or underscore delimited
// Results - return the same string converted into UpperCamelCase
// Example - "hello-goodbye" -> "helloGoodbye"
// Pseudocode:
// 	if the string includes dashes
// 		separate the string by dashes in a new array
// 	if the string includes underscores
// 		separate the string by underscores in a new array
// 	capitalize the first letter of all words past the first
// 	join the string back together with no separation
// 	return the string

function toCamelCase(str){
        let delimiter = /-|_/g
        let tempArray = str.split(delimiter);
        for (var i = 1; i < tempArray.length; i++) {
                tempArray[i] = tempArray[i].charAt(0).toUpperCase() + tempArray[i].slice(1);
        };
        return tempArray.join('');
}
