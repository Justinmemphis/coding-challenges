/* Enumerable Magic #20 - Cascading Subsets
 * 8kyu
 * 
 * Description:
 


Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]


As you can see, the lists are cascading; ie, they overlap, but never out of order.
Fundamentals
Lists
Data Structures
Arrays
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of numbers and a single integer number
// Results - return the cascading arrays with the number specified amount of units
// Examples - [1,2,3,4], 2 -> [1,2], [2,3], [3,4]
// Pseudocode:
// 	map over the array, creating n-th size result arrays

function eachCons(array, n) {
	return array.map((x,y) => array.slice(y, y + n)).filter(x => x.length == n)
}

