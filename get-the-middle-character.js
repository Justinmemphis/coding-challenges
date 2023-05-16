/* Get the Middle Character
 * 7kyu
 *
 * Description:
 

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return the middle character of the string (if odd length) or the middle two characters (if even length)
// Example - see above
// Pseudocode:
// 	create variable for string length
// 	if string length is odd
// 		return (string length / 2) character
// 	else
// 		return (string length / 2 truncate character) and (string length / 2 round up character)

function getMiddle(s) 
{
	    if (s.length === 1) {
      return s;
    } else {
        let middle = s.length / 2;

        if (s.length % 2 != 0) { // is odd
                return (s.charAt(middle));
        } else { // is even
            let char1 = s.charAt(middle - 1);
            let char2 = s.charAt(middle);
            return (char1+char2);

        };
    };
}







