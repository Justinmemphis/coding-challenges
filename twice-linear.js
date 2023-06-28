/* Twice linear
 * 4kyu
 *
 * Description:
 

Consider a sequence u where u is defined as follows:

    The number u(0) = 1 is the first one in u.
    For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
    There are no other numbers in u.

Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
Task:

Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).
Example:

dbl_linear(10) should return 22
Note:

Focus attention on efficiency
Mathematics
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer
// Results - return the sequence of twice linear that that integer represents
// Example - 10 -> 22
// Pseudocode:
// 	generate the u values up to 100 - following pattern of +2, +1, +3 on repeat
// 	call the u value specified
//
// 	didn't solve - see partial work below; I chose my favorite given solution

function dbLinear(n) {
	        console.log('n',n);
        let u = [1];
        let counter = [1];
        for (let i = 0; i < 1000; i += 1) {
                let temp = counter.shift();
                //console.log('temp,counter,u', temp, counter, u);

                u.push( (2 * temp) + 1);
                counter.push( (2 * temp) + 1);

                u.push( (3 * temp) + 1);
                counter.push( (3 * temp) + 1);

                counter.sort( (a, b) => { return a - b });
                u.sort( (c, d) => { return c - d });

                //console.log('final counter',counter);
        };
        console.log('u',u);
        return u[n];
}

// Solution from codewars:
function dblLinear(n) {
  var ai = 0, bi = 0, eq = 0;
  var sequence = [1];
  while (ai + bi < n + eq) {
    var y = 2 * sequence[ai] + 1;
    var z = 3 * sequence[bi] + 1;
    if (y < z) { sequence.push(y); ai++; }
    else if (y > z) { sequence.push(z); bi++; }
    else { sequence.push(y); ai++; bi++; eq++; }
  }
  return sequence.pop();
}
