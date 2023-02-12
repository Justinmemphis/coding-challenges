/*
 Convert number to reversed array of digits
 8kyu

 Description:
 Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]

Arrays
Fundamentals
*/

// Solution:
function digitize(n) {
  //code here
  let result = [];
  let stringToNumber = n.toString();
  
  for (var i = stringToNumber.length-1; i >= 0; i--) {
    result.push(+stringToNumber.charAt(i));
  } 
  
  return result;
}
