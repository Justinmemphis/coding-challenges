/* Merge two sorted arrays into one
 8kyu

 Description:


You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples (input -> output)

* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

Happy coding!
Fundamentals
Arrays
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive two sorted arrays;  they have 0 or more integers sorted in ascending order  
// Returns - return a single sorted array with the individual integers from both arrays in ascending order (no duplicate numbers)
// Examples - [1,3,5], [2,4,6] -> [1,2,3,4,5,6]
// Pseudocode:
// 	create result array
// 	add first array to result array
// 	add second array to result array
// 	sort result array
// 	iterate through the result array and remove duplicates
// 	return result array

function mergeArrays(arr1, arr2) {
        let result = arr1.concat(arr2);
        function compareNumbers (a,b) {
          return a - b;
        };
        result.sort(compareNumbers);
        result = [...new Set(result)];
        return result;
}
