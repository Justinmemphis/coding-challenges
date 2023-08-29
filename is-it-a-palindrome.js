/* Is it a palindrome?
 * 8kyu
 *
 * Description:
 

Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string of characters
// Results - return true if it is a palindrome
// Example - 'a man, a plan, a canal - panama' -> true
// Pseudocode:
// 	return string reverse = string

funcion isPalindrome(x){
	return x.toLowerCase().split('').reverse().join('') === x.toLowerCase();
};
