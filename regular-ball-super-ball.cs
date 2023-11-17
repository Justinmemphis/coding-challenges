/* Regular Ball Super Ball
 * Codewars
 * 8kyu
 *
 * Description:
 

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an argument or no argument
// Results - if no argument return "regular" else return ball type
// Example - see above
// Pseudocode:
// 	return (ball type) ? (ball type) : "regular"

public class Ball {
  public string ballType { get; set; }

    public Ball() {
        this.ballType = "regular";
    }

    public Ball(string ballType) {
        if (!string.IsNullOrEmpty(ballType)) {
            this.ballType = ballType;
        } else {
            this.ballType = "regular";
        }
    }

}
