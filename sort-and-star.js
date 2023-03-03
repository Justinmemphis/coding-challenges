/* Sort and Star
 8kyu

 Description:


You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
Fundamentals
Strings
Arrays
Sorting
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - given an array of strings
// Results - return the first string in the sorted array; the return should be a string with all characters separate by ***
// Examples - ['almost','dog','brown'] -> 'a***l***m***o***s***t'
// Pseudocode:
// 	Create result string
// 	sort array alphabetically
// 		push first result to result string
// 	change result string to be characters separate by ***

function twoSort(s) {
        let result = '';
        let newArray = s.sort();
        result += newArray[0];
        let answer = '';
        for (let character of result) {
          answer = answer + character + '***';
        };
        answer = answer.substring(0, answer.length - 3);
        return answer;
}
