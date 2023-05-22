/* Regex Password Validation
 * 5kyu
 *
 * Description:
 

You need to write regex that will validate a password to make sure it meets the following criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a digit
    only contains alphanumeric characters (note that '_' is not alphanumeric)

Regular Expressions
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - N/A
// Results - regex pattern should match above
// Example - N/A
// Pseudocode
// 	regex pattern only

const REGEXP = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]{6,}$/;
