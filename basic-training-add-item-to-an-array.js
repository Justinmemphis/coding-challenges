/* Basic Training: Add Item to an Array
 * 8kyu
 * 
 Description:



Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = [];

Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive blank array
// Results - return array with one value
// Examples - see above
// Pseudocode:
// 	add item to array

function addArray(websites) {
        websites = websites.push("codewars");
        return websites;
}

addArray(websites);
