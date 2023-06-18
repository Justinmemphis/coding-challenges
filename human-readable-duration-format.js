/* Human readable duration format
 * 4kyu
 *
 * Description:
 

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
Strings
Date Time
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a time in seconds
// Results - return the time in years, days, hours, minutes, and seconds
// Example - 1 -> 1 second; 120 -> 2 minutes
// Pseudocode:
// 	create result array
//
// 	sub-function duration
//	 	if greater than year
// 			determine number of years
//	 	else if greater than a day
// 			determine number of days
// 		else if greater than an hour
// 			determine number of hours
//	 	else if greater than a minute
// 			determine number of minutes
// 		else
// 			return number of seconds
//
// 	function (sub-function)
//
//	if array == 1
//		return array[0]
//	else if array == 2
//		return array[0] + array[1]
//	else
//		return array[0] + , + array[1] + etc. to array[length-1];
//
// 	return result

function formatDuration (seconds) {
	          let result = [];

        if (seconds === 0) {
          return 'now';
        };

        function duration(x) {
                if (x >= 31536000) { // one year or greater
                        let temp = Math.floor(x / 31536000);
                        result.push(temp > 1 ? `${temp} years` : '1 year');
                        x -= temp * 31536000;
                        return duration(x);
                } else if (x >= 86400) { // one day or greater
                        let temp = Math.floor(x / 86400);
                        result.push(temp > 1 ? `${temp} days` : '1 day');
                        x -= temp * 86400;
                        return duration(x);
                } else if (x >= 3600) { // one hour or greater
                        let temp = Math.floor(x / 3600);
                        result.push(temp > 1 ? `${temp} hours` : '1 hour');
                        x -= temp * 3600;
                        return duration(x);
                } else if (x >= 60) { // one minute or greater
                        let temp = Math.floor(x / 60);
                        result.push(temp > 1 ? `${temp} minutes` : '1 minute');
                        x -= temp * 60;
                        return duration(x);
                } else if (x >= 1) { // one second or greater
                        result.push(x > 1 ? `${x} seconds` : '1 second');
                        return result;
                } else {
                        return result;
                };
        };

        let newResult = duration(seconds);

        if (newResult.length === 1) {
          return newResult[0];
        } else if (newResult.length === 2) {
          return `${newResult[0]} and ${newResult[1]}`;
        } else {
          const secondLastElement = newResult[newResult.length - 2];
          const lastElement = newResult[newResult.length - 1];
          const remainingElements = newResult.slice(0, -2);
          return `${remainingElements.join(', ')}, ${secondLastElement} and ${lastElement}`;
        };
}















