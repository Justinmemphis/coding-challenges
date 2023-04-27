/* The Hashtag Generator
 * 5kyu
 *
 * Description:
 

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string
// Results - return the string with all words joined, capitalized, with a hashtag at the front
// 	(and less than 141 characters)
// Examples - see above
// Pseudocode:
// 	if string is empty
// 		return false
//	create temp array equals string separated by spaces
//	iterate over array
//		capitalize first letter of each word
//	create result string equals hashtag plus joined array elements
//	if result less than 141 characters
//		return result
//	else
//		return false

function generateHashtag (str) {
	let regex = /[a-zA-Z]/g;
        if (!str) {
                return false;
        } else if (!regex.test(str)) {
                return false;
        } else {
                let temp = str.split(' ');
                for (var i = 0; i < temp.length; i++) {
                        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
                };
                let result = temp.join('');
                result = '#' + result;
                if (result.length < 141) {
                        return result;
                } else {
                        return false;
                };
        };
}





