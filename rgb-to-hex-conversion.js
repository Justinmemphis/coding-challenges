/* RGB to Hex Conversion
 * 5kyu
 *
 * Description:
 

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive RGB values - 3 numbers 0 to 255 each
// Results - return the hexadecimal equivalent of the RGB value
// Example - 255, 255, 255 -> FFFFFF
// Pseudocode:
//	create new function that receives a number
//		if the number is below zero
//			return zero
//		else if the number is greater than 255
//			return 255
//		else
//			convert number to 00 to FF scale
//	run function on all three numbers
//	return results


// 	function converter(number) {
// 		if (number < 0) {
// 			return 0;
// 		} else if (number > 255) {
// 			r
// 		}
// 	}
//

function rgb(r, g, b){
        function converter(number) {
		if (number < 0) {
        		return '00';
                } else if (number > 255) {
                        return 'FF';
                } else {
                        let temp = parseInt(number).toString(16).toUpperCase();
                        return (temp.length < 2) ? "0" + temp : temp;
                };
        };

        let first = converter(r);
        let second = converter(g);
        let third = converter(b);
        return (first + second + third);
}
