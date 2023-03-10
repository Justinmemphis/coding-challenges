/*
 A Needle In a Haystack
 8kyu
 Description:


Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

Note: In COBOL, it should return "found the needle at position 6"
Arrays
Fundamentals

*/

// Solution:
function findNeedle(haystack) {
 // your code here
  // PREP = Parameters, Returns, Examples, Pseudo Code
  
  // paramaters = receive an array containing strings; just one needle => i.e. just one answer
  // returns = return a message as a string => "found the needle at position " plus the index
  //  it found the needle at
  // Example: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
  // Pseudo code = iterate over array - when you find the "needle" return the string with the position
  
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] == "needle") {
      return `found the needle at position ${[i]}`;
    };
  }  
  
}
