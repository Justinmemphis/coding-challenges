/* Pyramid Slide Down
 * 4kyu
 *
 * Description:
 
Lyrics...

Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3

Here comes the task...

Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'. For example:

* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Your function should return `23`.

By the way...

My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

(c) This task is a lyrical version of Problem 18 and/or Problem 67 on ProjectEuler.
Algorithms
Dynamic Programming
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array with subsequent larger subarrays
// Results - return the sum of the largest element in each subarray
// Example - see above
// Pseudocode:
// 	create sum variable
// 	iterate over the array (i.e. rows)
//		create max variable equals 0
//		iterate over the subarray (i.e. row itself) // actually only test current element position plus element position 1
//			if current element greater than max
//				add to sum
//	return sum
//
//	didn't solve - see my start of a solution below and my favorite solution


// my solution that doesn't work

function longestSlideDown (pyramid) {
	    console.log('start - pyramid',pyramid);
          let sum = pyramid[0][0];
        let iterable = 0;
        for (let i = 1; i < pyramid.length; i++) {
              console.log('sum,iterable,pyramid[i]',sum,iterable,pyramid[i]);
                if (pyramid[i][iterable] > pyramid[i][iterable+1]) {
                        // no change to iterable because position remains the same
                        sum += +pyramid[i][iterable];
                } else {
                        console.log('pyramid[i][iterable]',pyramid[i][iterable]);
                        console.log('pyramid[i][iterable+1]',pyramid[i][iterable+1]);
                        sum += pyramid[i][iterable+1];
                        iterable++;
                };
        };
        return sum;
}

// favorite solution online

function longestSlideDown (pyramid) {
  for (var i = pyramid.length - 2; i > -1; i--) {
    for (var j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  return pyramid[0][0];
}
