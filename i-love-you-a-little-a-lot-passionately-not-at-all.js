/* I love you, a little, a lot, passionately ... not at all
 8kyu

 Description:
 Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    "I love you"
    "a little"
    "a lot"
    "passionately"
    "madly"
    "not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
Arrays
Fundamentals
*/

// Solutions:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a number greater than zero
// Results - return which petal you are on
// Examples - 3 --> 'a lot'
// Pseudocode:
// 	create result variable
// 	test if number is greater than seven (while)
// 		if greater than seven subtract 7
// 			if still greater than seven run test again
// 		if less than seven continue
// 	do if/else to see which phrase goes with which remaining number (switch)

function howMuchILoveYou (nbPetals) {
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}
}

