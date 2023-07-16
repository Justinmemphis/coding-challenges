/* DNA to RNA Conversion
 * 8kyu
 *
 * Description:
 

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return the string but with 'T' characters replaced with 'U' characters
// Example - 'GCAT' -> 'GCAU'
// Pseudocode:
// 	create result string
// 	iterate over given string
// 		if letter equals T
// 			add U to result string
// 		otherwise
// 			add character to result string
// 	return result

function DNAtoRNA(dna) {
	let result = '';
	for (let i = 0; i < dna.length; i++) {
		if (dna[i] === 'T') {
			result += 'U';
		} else {
			result += dna[i];
		};
	};
	return result;
}
