/* Path Finder #1: can you reach the exit?
 * 4kyu
 *
 * Description:
 
Task

You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

    Empty positions are marked ..
    Walls are marked W.
    Start and exit positions are empty in all test cases.

Path Finder Series:

    #1: can you reach the exit?
    #2: shortest path
    #3: the Alpinist
    #4: where are you?
    #5: there's someone here

Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a maze of NxN
// Results - starting at [0,0], see if you can get to [n-1, n-1] of the maze - return true or false
// Example - [.W.,.W.,...] -> true; [.W.,.W.,W..] -> false
// Pseudocode - 
//
// didn't solve - see my favorite solution below:

function pathFinder(maze){
  const rows = maze.split(`\n`).map(l => l.split(``));
  const n = rows.length - 1;
  const moveTo = (x, y) => {
    if (x < 0 || y < 0 || x > n || y > n || rows[y][x] !== '.') {
      return false;
    }

    if (x === n && y === n) {
      return true;
    }

    rows[y][x] = `x`;

    return moveTo(x - 1, y)
      || moveTo(x + 1, y)
      || moveTo(x, y - 1)
      || moveTo(x, y + 1);
  }

  return moveTo(0, 0);
}
