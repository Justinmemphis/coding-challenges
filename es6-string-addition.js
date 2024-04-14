/* ES6 string addition
 * Codewars
 * 8kyu
 *
 * Description:
 It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two strings
// Results - join the two strings together with ES6
// Example - see above
// Pseudocode:
// 	combine two strings using ES6

function joinStrings(string1, string2){
  return `${string1} ${string2}`;
}
