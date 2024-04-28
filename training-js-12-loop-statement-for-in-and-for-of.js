/* Training JS #12: loop statement --for..in and for..of
 * Codewars
 * 8kyu
 * Description:
 *

In lesson #11, we learned that the for loop can be used to traverse an array. If we want to traverse an object, we can use a variant of the for: for..in. This can traverse all the keys of the object. An example:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);

Code results:

keys of ob:
item1
item2
item3
item4
values of ob:
This
is
an
example

for..in can also be used with arrays. Modifying the code above:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);

Code results:

keys of arr:
0
1
2
values of arr:
one
two
three

As you can see, the keys are the indices of the array elements. Important: When using for..in with an array, the key (index) is always a string, not a number. In the example above, the keys are "0", "1", and "2". We can't see the quotes because console.log() doesn't show them.

Although for..in can be used to traverse the array, this is discouraged because in some cases the order may be unexpected. So it's recommended that you use another variant for this: for..of (new in ES6). for..of can traverse all the values of the array (without accessing them through their index). Function showObjectValues() from above can be modified like this:

function showArrayValues(arr){
  for (var value of arr){
    console.log(value);
  }
}

Ok, lesson is over, let's do a task with for..in.
Task

The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.

You should use for..in in your code, otherwise your solution may not pass this kata.
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

// PREP - Parameters, Results, Example, Pseudocode
// n/a - tutorial kata

function giveMeFive(obj){
  let newArr = [];
  for (var key in obj){
    if (key.length === 5) {
      newArr.push(key);
    };
    if (obj[key].length === 5) {
      newArr.push(obj[key]);
    };      
  };
  return newArr;
}
