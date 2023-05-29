/* Complementary DNA
 * 7kyu
 *
 * Description:
 

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string of characters (not empty) only consisting of ATGC
// Results - switch out the letters for the specific complements
// Example - AAAA -> TTTT
// Pseudocode
// 	create result string
// 	iterate over the given string
// 		if result is A
// 			T to result string
// 		else result is T
// 			A to result string
// 		else result is G
// 			C to result string
// 		else result C
// 			G to result string
// 	return result string

function DNAStrand(dna){
	let result = '';
	for (var i = 0; i < dna.length; i++) {
		if (dna.charAt(i) == 'A') {
			result += 'T';
		} else if (dna.charAt(i) == 'T') {
			result += 'A';
		} else if (dna.charAt(i) == 'G') {
			result += 'C';
		} else if (dna.charAt(i) == 'C') {
			result += 'G';
		};
	};
	return result;
}
