/* Vowel Count
 * 7kyu
 *
 * Description:
 

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string
// Results - return count of vowels in the string
// Example -> 'hello' -> 2
// Pseudocode:
// 	create count variable
// 	iterate over the string
// 		if a vowel
// 			add to count
// 	return count

function getCount(str) {
	        str = str.replace(/\s/g, '');
          let count = 0;
        console.log('str,str.length',str,str.length);
        let regex = /^[aeiuo]+$/g;
        for (var i = 0; i < str.length; i++) {
                let x = str.charAt(i);
                console.log('beginning i,x',i,x);
                if (x.match(regex)) {
                        console.log('i,x',i,x);
                        count++;
                };
        };
        return count;
}
