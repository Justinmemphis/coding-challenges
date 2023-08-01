/* Remove exclamation marks
 * 8kyu
 *
 * Description:
 

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
Fundamentals
Strings
*/

// Solution:

function removeExclamationMarks(s) {
	let regex = /!/g;
	return s.replace(regex,'');
};
