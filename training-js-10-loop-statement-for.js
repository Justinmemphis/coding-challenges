/* Training JS #10: loop statement --for
 * Codewars
 * 8kyu
 *
 * Description:
 

The for loop is a very frequently used loop in JS.

Recall in lesson 9 we wrote a while loop:

function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}

We can rewrite it using a for loop, like this:

function sum1_100(){
  for (var sum=0,num=1;num<=100;num++){
    sum+=num;
  }
  return sum;
}

As you see, there are three parts in the parentheses, separated by ";". The first part, var sum=0,num=1, is the initialization. This part will run before the loop starts. The second part, num<=100 is the conditional expression. The conditional expression is checked before the start of each time through the loop. When the value of the expression is false, the loop will be terminated. The third part, num++ will run after the code block, and is usually used for increasing and decreasing variables.

For the example above, the running order of the code is:

                              <--- back to part 2
                  -------------------------------------------
                  |                 true                    |
var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
                                |  
                           false|
                       loop terminated

When you need to traverse an array, you can use the for loop to access each element using its index. Here's an example:

function displayElements(array){
  for (var i=0;i<array.length;i++){
    console.log(array[i]);
  }
}

This function will display every element of the array on your screen.

Ok, lesson is over, let's do a task with for.
Task

The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

If you forgot how to push an element to an array, please refer to lesson 4.
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
// all above n/a - simple example

function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }

  return [odd,even];
}
