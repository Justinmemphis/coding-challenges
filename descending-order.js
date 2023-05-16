/* Descending Order
 * 7kyu
 *
 * Description:
 

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a non-negative integer
// Results - return the digits in descending order
// Example - see above
// Pseudocode:
// 	create new array which is number to string then sorted
// 	return array concatenated

function descendingOrder(n){
	    if (n < 10) {
      return n;
    } else {
          let newArray = n.toString().split('');
          newArray.sort().reverse();
        return +newArray.join('');
    }

}







