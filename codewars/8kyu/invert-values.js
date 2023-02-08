/*
Invert values
8kyu

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
Lists
Fundamentals
Arrays

*/

// Solution:

function invert(array) {
	let newArr = []
		for(var i = 0; i < array.length; i++) {
			newArr.push(array[i]*-1)
		}
	return newArr 
}
