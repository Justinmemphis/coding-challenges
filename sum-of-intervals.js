/* Sum of Intervals
 * 4kyu
 *
 * Description:
 

Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
Overlapping Intervals

List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]

The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
Examples:

sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030

Tests with large intervals

Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].
Algorithms
Performance
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of intervals
// Results - return the sum of all interval lengths; if the intervals overlap combine them
// Example - [1,5],[6,10] -> 4, 4 -> 8
// Pseudocode:
// 	create sum variable
// 	sort the array based on the first value in the subarrays
// 	if array is length 1
// 		return sum of interval
// 	
// 	subfunction overlapping (array)// array is greater than 1 element
//		iterate over the array starting at element 2
// 			if element 2 beg < element 1 end
// 				change element 2 beg to element 1 beg
// 				remove element 1 - shift
// 				subfunction on array
// 			else
// 				sum plus interval element 1
// 				remove element 1 - shift
// 				subfunction on array
// 		return sum
// 		
// 	result = subfunction intervals
// 	return result

// didn't solve - see favorite solution:
function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let sum = 0;
  let end = -Infinity;

  for (let i = 0; i < intervals.length; i++) {
    const [start, stop] = intervals[i];

    if (start >= end) {
      sum += stop - start;
      end = stop;
    } else if (stop > end) {
      sum += stop - end;
      end = stop;
    }
  }

  return sum;
}



// the following code pases the tests but exceeds the call stack size so has to be optimized:
function sumIntervals(intervals) {
      console.log('intervals',intervals);
          let sum = 0;
      intervals.sort((a,b) => a[0] - b[0] );
      //console.log('sorted intervals',intervals);

        function overlapping (x) {
            if (x.length === 1) {
                sum += x[0][1] - x[0][0];
                return sum;
            } else {
                if (x[1][0] < x[0][1]) { // if overlapping 1/2 element
                    if (x[1][1] < x[0][1]) { // if 2nd completely falls within 1st
                        //console.log('condition 0.5,x,sum',x,sum);
                        x[1] = x[0];
                        x.shift();
                        //console.log('condition 0.6,x,sum',x,sum);
                        overlapping(x);
                    } else {
                        //console.log('condition 1, x, sum', x, sum);
                        x[1][0] = x[0][0];
                        x.shift();
                        //console.log('condition 1.1, x, sum', x, sum);
                        overlapping(x);
                    };
                } else {
                    //console.log('condition 2, x,sum',x,sum);
                    sum += x[0][1] - x[0][0];
                    x.shift();
                    //console.log('condition 2.1,x,sum',x,sum);
                    overlapping(x);
                };
            };
            return sum;
         };

        return overlapping(intervals);

}














