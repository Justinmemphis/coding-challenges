/* Pick peaks
 * 5kyu
 *
 * Description:
 

In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!
Arrays
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of numbers
// Results - return number and position of numbers which are greater than preceding and following numbers
// Example - see above
// Pseudocode
// 	create position array
// 	create peak array
// 	iterate over the array, starting at 3rd item and ending at end
// 		if number - 2 < number - 1 < current number
// 			add number position to position array
// 			add number value to peak array
// 	return position array and peak array (template literal)

function pickPeaks(arr){
	          let position = [];
        let peaks = [];
        let tempMax = undefined;
        let tempPosition = undefined;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i-1] < arr[i]) {
                tempMax = arr[i];
                tempPosition = i;
            } else if (arr[i-1] > arr[i]) {
                if (tempMax || tempMax == 0) {
                    position.push(tempPosition);
                    peaks.push(tempMax);
                    tempMax = undefined;
                    tempPosition = undefined;
                };
            };
        }

        return {'pos': position, 'peaks': peaks};
}








