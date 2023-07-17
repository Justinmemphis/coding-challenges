/* Most frequently used words in a text
 * 4kyu
 *
 * Description:
 

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
Assumptions:

    A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
    Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
    Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
    Matches should be case-insensitive, and the words in the result should be lowercased.
    Ties may be broken arbitrarily.
    If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Examples:

top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

Bonus points (not really, but just for fun):

    Avoid creating an array whose memory footprint is roughly as big as the input text.
    Avoid sorting the entire array of unique words.

Strings
Filtering
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return the most frequent three words, in descending order of occurences
// Example - "a a c b b" -> 'a', 'b', 'c'
// Pseudocode:
//	create new temp array of split text
//	if temp array length is zero
//		return blank array
//	else if temp array length is one
//		return word
//	else sort the temp array
//		iterate over the temp array and count occurances of words
//		if temp array length is two
//			return top two words
//		else
//			return top three words

function topThreeWords(text) {
	text = text.toLowerCase(); // make all letters lowercase
	text = text.replace(/[^\w\s\']/g,''); // remove non-letter characters except apostrophes
	let temp = text.split(' '); // create array of separate elements
	temp = temp.filter( e => String(e).trim()); // remove whitespace
	let regex = /[a-z]/; 
	temp = temp.filter( f => regex.test(f)); // remove strings that don't contain letters - important to remove 'g'
		// in regex for it to work correctly
	if (temp.length === 0) { // if empty string return empty array
		return [];
	} else if (temp.length === 1) { // if just one word return that word
		return text;
	} else {
		let count = {};
		for (let i = 0; i < temp.length; i++) { // set up an object with counts of each word
			count[temp[i]] ? count[temp[i]]++ : count[temp[i]] = 1;
		};
		let result = Object.entries(count).sort((a, b) => b[1] - a[1]); // create sorted array by count
		if (temp.length === 2) {
			return [result[0][0], result[1][0]];
		} else {
			return [result[0][0], result[1][0], result[2][0]];
		};
	};
}
