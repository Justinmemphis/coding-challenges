/* Correct the mistakes of the character recognition software
 * 8kyu
 *
 * Description:
 

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.
Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string of characters
// Results - replace digits with the characters they are supposed to represent
// Example - L0ND0N - LONDON
// Pseudocode:
// 	iterate over the string
// 		if 5 replace with s
// 		if 0 replace with o
// 		if 1 replace with i
// 		else return character

function correct(string)
{
	return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I');
};
