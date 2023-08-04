/* Highest Scoring Word
 * 6kyu
 *
 * Description:
 

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
Fundamentals
Strings
Arrays
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string of words
// Results - return the word with the highest score (based on character code essentially)
// Example - 'take me to semynak' -> 'semynak'
// Pseudocode:
// 	create temp array of the words
// 	create highScore 0;
// 	create result '';
// 	iterate over the array of words
// 		create temp2 number
// 		iterate over the letters
// 			add the char values to temp2
// 		if temp2 greater than highScore
// 			replace highScore with current temp2
// 			replace result with current word
// 	return result

function high(x){
	          let temp = x.split(' ');
        let highScore = 0;
        let result = '';
        let alphabet = '0abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < temp.length; i++) {
                let temp2 = 0;
                for (let j = 0; j < temp[i].length; j++) {
                        temp2 += alphabet.indexOf(temp[i][j]);
                };
                if (temp2 > highScore) {
                        highScore = temp2;
                        result = temp[i];
                };
        };
        return result;
};











