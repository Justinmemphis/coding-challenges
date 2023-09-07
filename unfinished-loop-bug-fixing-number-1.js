/* Unfinished Loop - Bug Fixing #1
 * 8kyu
 *
 * Description:
 
Unfinished Loop - Bug Fixing #1

Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
Debugging
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - given a function
// Results - stop the function from doing infinite loops

// given function:

function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }

  return newArray;
}

// fixed function:

function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}
