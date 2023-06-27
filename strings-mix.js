/* Strings Mix
 * 4kyu
 *
 * Description:
 

Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

Note for Swift, R, PowerShell

The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two strings of letters and symbols
// Results - return a complicated result:
// 	how many occurances of each letter is in the string? - list most common to least common, 
// 		citing which string has more or '=' if they are equal
// 	(only do this for letters occuring more than once)
// Example - see above
// Pseudocode:
// 	create temp variable a = characters in string a and sorted
// 	create temp variable b = characters in string b and sorted
// 	create result object a
// 	create result object b
// 	create result object final
// 	iterate over temp a
// 		count occurences of each character and (if greater than one) store in result object a
// 	iterate over temp b
// 		count occurence of each character and (if greater than one) store in result object b
// 	sort result object a
// 	sort result object b
// 	iterate over result object a
// 		iterate over result object b
// 			if a value character = b value character
// 				if a count > b count
// 					push a object to result object final
// 				if b count < a count
// 					push b object to result object final
// 				else (if equal)
// 					push a object to result object final but with '=' instead of 'a'
// 	return result object final (join and template literal to format correctly)
//
// 	worked on for about 40 minutes then stopped - see how far I got below:


function mix(s1, s2) {
  console.log('s1,s2',s1,'BREAK',s2);

  let tempA = s1.split('').sort(); // split into characters and sort
  tempA = tempA.filter( e => String(e).trim()); // remove whitespace
  console.log('tempA',tempA);

  let tempB = s2.split('').sort();
  tempB = tempB.filter( e => String(e).trim());
  console.log('tempB',tempB);

  let resultA = {};
  let resultB = {};
  let resultFinal = {};

  for (let i of tempA) resultA[i] ? resultA[i]++ : (resultA[i] = 1); // count number of characters
  console.log('resultA count',resultA);

  for (let j of tempB) resultB[j] ? resultB[j]++ : (resultB[j] = 1);
  console.log('resultB count',resultB);

  for (let k in resultA) { // remove 1 count letters
      if (resultA[k] === 1) {
          delete resultA[k];
      };
  };
  console.log('resultA remove 1s',resultA);

  for (let m in resultB) {
      if (resultB[m] === 1) {
          delete resultB[m];
      };
  };
  console.log('resultB remove 1s',resultB);

  for (let n in resultA) {
      for (let o in resultB) {
          if (resultA[n].key)
      }
  }

  return;
}

// working solution (my favorite of the answers):

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split('').filter(x => x === char).length,
            s2Count = s2.split('').filter(x => x === char).length,
            maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
      };
    })
    .filter(c => c.count > 1)
    .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join('/');
}
