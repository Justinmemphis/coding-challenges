/* Nesting Structure Comparison
 * 4kyu
 *
 * Description:
 Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     

For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of variable nesting arrays
// Results - return if the array is equal to this or not
// Example - [[]] same as [[]]
// Pseudocode:
// 	iterate over this
// 		if other position doesn't exist
// 			return false
// 	return true

Array.prototype.sameStructureAs = function (other) {
	          function explore(x,y) {
                if (x.length !== y.length) {  // if the lengths are different there is a mismatch
                  return false;
                };

                for (let i = 0; i < x.length; i++) {

                        if (isArray(x[i])) {            // if it's an array keep going down
                                if (!explore(x[i],y[i])) {
                                    return false;
                                };
                        } else {
                                if (isArray(y[i])) {        // if the matching other element is an array
                                        return false;
                                };
                        };
                };
                return true;
        };

        return explore(this,other);
};


















