/* Training JS #11: loop statement --break,continue
 * Codewars
 * 8kyu
 *
 * Description:
 *

We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

function findFirstOddNumber(arr){
  var result;
  for (var i=0;i<arr.length;i++){
    if (arr[i]%2==1){
      result=arr[i];
      break;
    }
  }
  return result;
}

In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

function dontDisplayNegative(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0) continue;
    console.log(arr[i])
  }
}

In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

Through the use of break and continue, you can make the loop statement more flexible and convenient.

Ok, lesson is over. let's us do some task with break and continue.
Task

Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

If you forgot how to push an element to array, please refer to lesson 4.
Series

( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

    #1: create your first JS function helloWorld
    #2: Basic data types--Number
    #3: Basic data types--String
    #4: Basic data types--Array
    #5: Basic data types--Object
    #6: Basic data types--Boolean and conditional statements if..else
    #7: if..else and ternary operator
    #8: Conditional statement--switch
    #9: loop statement --while and do..while
    #10: loop statement --for
    #11: loop statement --break,continue
    #12: loop statement --for..in and for..of
    #13: Number object and its properties
    #14: Methods of Number object--toString() and toLocaleString()
    #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
    #16: Methods of String object--slice(), substring() and substr()
    #17: Methods of String object--indexOf(), lastIndexOf() and search()
    #18: Methods of String object--concat() split() and its good friend join()
    #19: Methods of String object--toUpperCase() toLowerCase() and replace()
    #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
    #21: Methods of String object--trim() and the string template
    #22: Unlock new skills--Arrow function,spread operator and deconstruction
    #23: methods of arrayObject---push(), pop(), shift() and unshift()
    #24: methods of arrayObject---splice() and slice()
    #25: methods of arrayObject---reverse() and sort()
    #26: methods of arrayObject---map()
    #27: methods of arrayObject---filter()
    #28: methods of arrayObject---every() and some()
    #29: methods of arrayObject---concat() and join()
    #30: methods of arrayObject---reduce() and reduceRight()
    #31: methods of arrayObject---isArray() indexOf() and toString()
    #32: methods of Math---round() ceil() and floor()
    #33: methods of Math---max() min() and abs()
    #34: methods of Math---pow() sqrt() and cbrt()
    #35: methods of Math---log() and its family
    #36: methods of Math---kata author's lover:random()
    #37: Unlock new weapon---RegExp Object
    #38: Regular Expression--"^","$", "." and test()
    #39: Regular Expression--"?", "*", "+" and "{}"
    #40: Regular Expression--"|", "[]" and "()"
    #41: Regular Expression--""
    #42: Regular Expression--(?:), (?=) and (?!)

Fundamentals
Tutorials
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive some strings
// Results - push some strings to an array
// Example - see above
// Pseudocode:
// 	continue, break
// 	return

function grabDoll(dolls){
  let bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == 'Hello Kitty' || dolls[i] == 'Barbie doll') {
      bag.push(dolls[i]);
      if (bag.length == 3) {
        break;
      };
    };
    // continue
  };
  return bag;
};
