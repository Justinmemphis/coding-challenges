/* Number of trailing zeros of N!
 * 5kyu
 *
 * Description:
 

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html
Examples

zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
Algorithms
Logic
Mathematics
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number
// Results - return the number of trailing zeros in a factorial of the number
// Example - see above
// Pseudocode:
// 	n divided by five to the power of (1 to log (5) n) 

function zeros (n) {
    var result = 0;

    function resolve(x) {
        let temp = Math.trunc(x / 5);
        if (temp > 0) {
            result += temp;
            resolve(temp);
        } else {
        };
    };

    resolve(n);

    return result;
}
