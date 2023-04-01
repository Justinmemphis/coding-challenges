/* Stop gninnipS My sdroW!
 * 6kyu
 * 
 * Description:
 

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string of one or more words
// Results - return the same string but with all five letter or more words reversed
// Examples - 'this is George' -> 'this is egroeG'
// Pseudocode:
// 	split string by space
// 	iterate over words
// 		if word length greater than four
// 			reverse that word
// 			add to result string
// 		else add to result string
// 	return result string

function spinWords(string){
	    let result = '';
	    let newArray = string.split(' ');
	    for (var i = 0; i < newArray.length; i++) {
		            if (newArray[i].length > 4) {
				                let newString = newArray[i];
				                result = result + newString.split('').reverse().join('') + ' ';
				            } else {
						                result = result + newArray[i] + ' ' ;
						            };
		        };
	    result = result.slice(0,result.length-1);
	    return result;
}





