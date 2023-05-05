/* Greed is Good
 * 5kyu
 *
 * Description:
 

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
Algorithms
*/

// Solutions:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - given an array with five six-sided dice values
// Results - score the dice throw
// Example - see above
// Pseudocode:
//	create score equal to zero
// 	create deep copy result array
// 	sort array
//
// 	function
//	 	if three of any element
// 			add points based on switch case to score
// 			remove from result array
//	 		run function on new result array
// 		else if one 1
// 			add points to score
//	 		remove 1 from result array
// 			run function on new result array
//	 	else if one 5
// 			add points to score
// 			remove 1 from result array
// 			run function on new result array
// 		else
// 			return score
//	
//	create a copy and sort the array
//	create sum number
//	iterate through the array
//		if x is one
//			increase sum by one
//
//

function score( dice ) {
       let copy = [...dice].sort();
    let points = 0;
    console.log('copy',copy);
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;

    for (var i = 0; i < copy.length; i++) {
        if (copy[i] === 1) {
            count1++;
        } else if (copy[i] === 2) {
            count2++;
        } else if (copy[i] === 3) {
            count3++;
        } else if (copy[i] === 4) {
            count4++;
        } else if (copy[i] === 5) {
            count5++;
        } else {
            count6++;
        };
    };

    console.log('counts',count1,count2,count3,count4,count5,count6);

  switch (count1) {
    case 6:
        points += 2000;
        break;
    case 5:
        points += 1200;
        break;
    case 4:
        points += 1100;
        break;
    case 3:
        points += 1000;
        break;
    case 2:
        points += 200;
        break;
    case 1:
        points += 100;
        break;
  };

  switch (count2) {
      case 6:
          points += 400;
          break;
      case 5:
          points += 200;
          break;
      case 4:
          points += 200;
          break;
      case 3:
          points += 200;
          break;
  };

  switch (count3) {
        case 6:
          points += 600;
          break;
        case 5:
          points += 300;
          break;
        case 4:
          points += 300;
          break;
        case 3:
          points += 300;
          break;
  };

  switch (count4) {
         case 6:
          points += 800;
          break;
        case 5:
          points += 400;
          break;
        case 4:
          points += 400;
          break;
        case 3:
          points += 400;
          break;
  };

  switch (count5) {
    case 6:
        points += 1000;
        break;
    case 5:
        points += 600;
        break;
    case 4:
        points += 550;
        break;
    case 3:
        points += 500;
        break;
    case 2:
        points += 100;
        break;
    case 1:
        points += 50;
        break;
  };

    switch (count6) {
         case 6:
          points += 1200;
          break;
        case 5:
          points += 600;
          break;
        case 4:
          points += 600;
          break;
        case 3:
          points += 600;
          break;
  };

  console.log('points',points);
  return points;

}
