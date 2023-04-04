/* Who likes it?
 * 6kyu
 *
 * Description:
 

 You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

 Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

 []                                -->  "no one likes this"
 ["Peter"]                         -->  "Peter likes this"
 ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

 Note: For 4 or more names, the number in "and 2 others" simply increases.
 Strings
 Fundamentals
 */

// Solution:
// PREP - Parameters, Results, Examples, Psudocode
// Parameters - receive an array with a series of strings
// Results - return a phrase based on the strings received - "...likes this"
// 	no string - "no one..."
// 	1 string - "that person..."
// 	2 strings - "this and that person..."
// 	3 strings - "this, that, and this person..."
// 	4 strings+ - "this, that, and 2 others..."
// Examples - see results above
// Pseudocode:
// 	check strength length
// 	if zero
// 		return "no one likes this"
// 	if one
// 		return "this person likes this"
// 	if two
// 		return "this and that person like this"
// 	if three
// 		return "this, this, and that person like this"
// 	if greater than three
// 		return "this, that, and (length - 2) like this"

function likes(names) {
	if (names.length === 0) {
		return "no one likes this";
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	};
}
