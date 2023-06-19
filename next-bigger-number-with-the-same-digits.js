/* Next bigger number with the same digits
 * 4kyu
 *
 * Description:
 Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1

*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a positive integer
// Results - return the next largest number that can be formed using the same digits
// Example - 123 -> 132
// Pseudocode:
// 	create newArray which equals digits split
// 	if only one digit
// 		return -1
// 	else
// 		iterate from end to front, starting at position 2nd-to-last
// 			if current position less than prior position
// 				swap places
// 				return number
//	create result = join newArray
//	if result == n
//		return -1
//	else
//		return result
//
//	didn't solve - see solution that works below:

function nextBigger(n){
  console.log(n);
  var chars = n.toString().split('');
  var i = chars.length-1;
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length-1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length-1] = suf[i]
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log("->" +num);
  return num;
}


function nextBigger(n){
	let newArray = n.toString().split('');
	let result = '';
	if (newArray.length === 1) {
		return -1;
	} else {
		for (let i = newArray.length - 2; i >= 0; i--) {
			if (+newArray[i] < newArray[i+1]) { // if current digit is smaller than digit to right
				[newArray[i], newArray[i+1]] = [newArray[i+1], newArray[i]];
				result = newArray.join('');
				return +result;
			};
		};
	};
	if (result == n) {
		return -1;
	} else {
		return +result;
	};
}




















