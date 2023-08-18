/* Get Planet Name By ID
 * 8kyu
 *
 * Description:
 

The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"

Debugging
*/

// Solution:
// console.log to see what is wrong - probably counter at 0 vs. 1
// actually just needed to add break in switch conditions

function getPlanetName(id){

  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune'
  }

  return name;
  }
