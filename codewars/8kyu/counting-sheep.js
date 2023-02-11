/*
 Counting sheep...
 8kyu

 Description:
 Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
Arrays
Fundamentals
*/

// Solution:
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sum = 0;
  for (var i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sum++;
    }
  }
  return sum;
}
