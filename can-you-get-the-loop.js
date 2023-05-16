/* Can you get the loop?
 * 5kyu
 *
 * Description:
 Description:

You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:

// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next

Notes:

    do NOT mutate the nodes!
    in some cases there may be only a loop, with no dangling piece

    Thanks to shadchnev, I broke all of the methods from the Hash class.

    Don't miss dmitry's article in the discussion after you pass the Kata !!

Algorithms
Linked Lists
Performance
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a node that is the beginning of a linked list
// Results - return the length of the loop
// Example - see diagram on codewars
// Pseudocode:
// 	iterate over the node
// 		once you have a repeat
// 			count how far you have gone and where you are repeating
// 	return the count
//
// 	I didn't solve this - just have best solution below  var turtle = node;
  var rabbit = node;
  
  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  }
  while (turtle != rabbit);
  
  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  }
  while (turtle != rabbit);

  // voila
  return count;

function loop_size(node){

}
