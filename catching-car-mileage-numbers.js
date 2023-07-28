/* Catching Car Mileage Numbers
 * 4kyu
 *
 * Description:
 

    "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
"Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

    Any digit followed by all zeros: 100, 90000
    Every digit is the same number: 1111
    The digits are sequential, incementing†: 1234
    The digits are sequential, decrementing‡: 4321
    The digits are a palindrome: 1221 or 73837
    The digits match one of the values in the awesomePhrases array

    † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
    ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

So, you should expect these inputs and outputs:

// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2

Error Checking

    A number is only interesting if it is greater than 99!
    Input will always be an integer greater than 0, and less than 1,000,000,000.
    The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
    You should only ever output 0, 1, or 2.

Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number between 1 and 1,000,000,000; also receive awesomePhrases which will be zero or some numbers
// Results - return 2 if the number is interesting; return 1 if the number+1 or number+2 is interesting; otherwise return 0 (numbers below 100 are never interesting)
// Example - 3 -> 0; 11211 -> 2
// Pseudocode:
// 	if number is below 100
// 		return 0
// 	else
// 		create number+1
// 		create number+2
// 		if number is interesting
// 			return 2
// 		else if number+1 is interesting
// 			return 1
// 		else if number+2 is interesting
// 			return 1
// 		else
// 			return 0

function isInteresting(number, awesomePhrases) {
	 function testInteresting(x) {
                let zeroRegex = /^\d[0]+$/g;
                let repeatRegex = /^(\d)(?!\1+$)\d+$/g; // match the inverse

                function sequentialUp(y) {
                        return '1234567890'.includes(y);
                };

                function sequentialDown(c) {
                        return '9876543210'.includes(c);
                };

                function palindromeCheck(z) {
                        z = z.toString();
                        return z == z.split('').reverse().join('');
                };

                if (zeroRegex.test(x)) { // any digit followed by all zeros
                        return true;
                } else if (!repeatRegex.test(x)){ // every digit is the same number
                        return true;
                } else if (sequentialUp(x)){ // the digits are sequential, incrementing (1234567890 etc.)
                        return true;
                } else if (sequentialDown(x)){ // the digits are sequential, decrementing (09876543210 etc.)
                        return true;
                } else if (palindromeCheck(x)){ // the digits are a palindrome
                        return true;
                } else if (awesomePhrases.includes(x)) { // the digits match a value in awesomePhrases array
                        return true;
                } else { // not interesting
                        return false;
                };
        };

	// this is the first executed code - above is just a helper function

        if (number < 98) {
                return 0;
        } else if (number == 98 || number == 99) {
                return 1;
        } else {
                let num1 = number + 1;
                let num2 = number + 2;
                if (testInteresting(number)) {
                        return 2;
                } else if (testInteresting(num1)) {
                        return 1;
                } else if (testInteresting(num2)) {
                        return 1;
                } else {
                        return 0;
                };
        };

}
