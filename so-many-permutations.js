/* So Many Permutations!
 * 4kyu
 *
 * Description:
 

In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

Note: The order of the permutations doesn't matter.

Good luck!
Permutations
Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return all possible permutations of that string
// Example - 'ab' -> ['ab', 'ba']
// Pseudocode:
// 	create array with split characters from string
// 	create result array
//
// 	return a redue function
//
// 	didn't really solve - used chatGPT to generate an answer


// chatGPT answer - didn't submit but passed tests:
function permutations(string) {
  if (string.length === 1) {
    return [string];
  }

  const chars = string.split('');

  const result = chars.reduce((perms, char) => {
    const newPerms = new Set();

    perms.forEach((perm) => {
      for (let i = 0; i <= perm.length; i++) {
        const newPerm = perm.slice(0, i) + char + perm.slice(i);
        newPerms.add(newPerm);
      }
    });

    return newPerms;
  }, new Set(['']));

  return Array.from(result);
}

// favorite solution on codewars:
function permutations(str) {
 return (str.length <= 1) ? [str] :
         Array.from(new Set(
           str.split('')
              .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
              .reduce((r, x) => r.concat(x), [])
         ));
}
