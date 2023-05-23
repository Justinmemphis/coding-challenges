/* Exes and Ohs
 * 7kyu
 *
 * Description:
 

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Fundamentals
*/

// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string of characters
// Results - see if x count and y count are the same; return true or false boolean
// Example - see above
// Pseudocode:
// 	create x count
// 	create y count
// 	iterate over the string
// 		if x
// 			x count plus one
// 		if y
// 			y count plus one
// 	if x count = y count
// 		return true
// 	else
// 		return false

function XO(str) {
	  str = str.toLowerCase();
          let xCount = 0;
        let oCount = 0;
        for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == 'x') {
                        xCount++;
                } else if (str.charAt(i) == 'o') {
                        oCount++;
                };
        };
        if (xCount == oCount) {
                return true;
        } else {
                return false;
        };

}
