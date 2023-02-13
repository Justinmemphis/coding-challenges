/*
 Beginner - Lost Without a Map
 8kyu

 Description:
 Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
Fundamentals
Arrays
*/

// Solution:
function maps(x){
  let result = []
  for(var i=0 ; i<x.length ; i++){
    result.push( x[i]*2)
  }
  return result
}
