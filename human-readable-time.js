/* Human Readable Time
 * 5kyu
 *
 * Description:
 


Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
Date Time
Mathematics
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a non-negative integer (seconds)
// Results - return the time in hour/minute/second format
// Example - see test suite
// Pseudocode:
// 	create result string 00 : 00 : 00
//	temp equals seconds
//	if temp less than 36,000
//		result first equals temp - 3,600
//
//	if temp less than 3,600
//		result middle equals temp
//
// 	if temp less than 60
// 		result end equals temp

function humanReadable (seconds) {
	var pad = function(x) { return (x < 10) ? "0"+x : x; }
	return  pad(parseInt(seconds / (60*60))) + ":" +
        	pad(parseInt(seconds / 60 % 60)) + ":" +
		pad(seconds % 60);
}
