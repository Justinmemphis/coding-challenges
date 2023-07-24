/* Rock Paper Scissors!
 * 8kyu
 *
 * Description:
 
Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

rockpaperscissors
Fundamentals
*/

const rps = (p1, p2) => {
	const p1Won = 'Player 1 won!';
	const p2Won = 'Player 2 won!';
	const draw = 'Draw!';
	if (p1 === 'scissors') {
		if (p2 === 'paper') {
			return p1Won;
		} else if (p2 === 'rock') {
			return p2Won;
		} else { // p2 === scissors
			return draw;
		};
	} else if (p1 === 'paper') {
		if (p2 === 'rock') {
			return p1Won;
		} else if (p2 === 'scissors') {
			return p2Won;
		} else { // p2 === 'paper'
			return draw;
		};
	} else { // p1 === rock
		if (p2 === 'scissors') {
			return p1Won;
		} else if (p2 === 'paper') {
			return p2Won;
		} else { // p2 === 'rock'
			return draw;
		};
	};
}
