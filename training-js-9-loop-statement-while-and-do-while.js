/* Training JS #9: loop statement - while and do..while
 * Codewars
 * 8kyu
 *
 * Description:
 *

If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:

function sum1_10(){
  return 1+2+3+4+5+6+7+8+9+10;
}

Wow~~,looks very cool! But if we need to calculate the cumulative value from 1 to 100, the code becomes:

function sum1_100(){
  return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
  +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
  +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
  +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
}

Do you feel a bit tired? We can use a loop statement to do it:

function sum1_100(){
  var sum=0,num=1;    //Initialize two variables sum and num
  while (num<=100){   //Determine the expression in brackets, while true,
                      //run the code block one time, while false, break the loop
    sum=sum+num;      //Each time num will be added to the current value of sum
                      //It can be simplified as:  sum+=num
    num=num+1;        //Each time the value of num increases by 1
                      //It can be simplified as:  num++
  }
  return sum;         //return the final cumulative value
}

The do..while is a variant of while. The example above can be written like this:

function sum1_100(){
  var sum=0,num=1;
  do{
    sum+=num;
    num++;
  }while (num<=100)
  return sum;
}

while judges the condition at the beginning before executing its code, so if the condition is false the code inside the while loop is never executed. In contrast, do..while always runs once, and then starts checking the condition after that.

Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), otherwise it will turn into an infinite loop.

Ok, lesson is over. Let us do a task with while.
Task

Complete function padIt, which accepts 2 parameters:

    str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
    n: a number indicating how many times to pad the string.

Behaviour

You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
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
// Parameters - receive a string and an integer n
// Results - return the string padded before and after with the symbol * n times
// Example - see test code
// Pseudocode:
// 	* times n + string + * times n

// didn't solve - favorite solution:

function padIt(str,n){
  while(n>0){
    if(n%2 === 0) {
      str = str + "*";
    }else{
      str = "*" + str;
    }
    n --;
  }
  return str;
}
