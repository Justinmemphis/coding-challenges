/* Double Char
 * 8kyu
 *
 * Description:
 

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!
Fundamentals
Strings
*/

// iterate over the string and return each doubled

function doubleChar(str) {
	return str.split('').map(x => x + x).join('');
};
