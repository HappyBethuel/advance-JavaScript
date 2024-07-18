"use strict"

// ***********Chapter projects*****************
// *****Evaluating a number game******
// Ask the user to enter a number and check whether it's greater than, equal to, or less 
// than a dynamic number value in your code. Output the result to the user

// let dynamicNumber = Math.floor(Math.random() * 10) // this will randomize numbers that are between 0 and 1
// console.log(`the dynamic numberr is ${dynamicNumber}`);
// let userInput = Number(prompt('enter any number'))
// console.log(userInput)
// let message;
// if (userInput === dynamicNumber) {
//     message = `the number inserted is equal to the dynamic number}`
// } else if (userInput > dynamicNumber) {
//     message = `the number inserted is greater than '${dynamicNumber}' the dymamic number`

// } else if (userInput < dynamicNumber) {
//     message = `the number inserted is less than '${dynamicNumber}' the dymamic number`
// } else {
//     message = 'you did not insert a number, try again'
// }
// console.log(message);

/* Friend checker game
 Ask the user to enter a name, using the switch statement to return a confirmation 
that the user is a friend if the name selected is known in the case statements. You 
can add a default response that you don't know the person if it's an unknown name. 
Output the result into the console */

alert("i have both male and female friends. Let's see if you are a friend!")
let friendCheck = prompt('Enter a name: ').toLowerCase()
switch (friendCheck) {
    case 'moshe':
    case 'manqoba':
    case 'dingani':
    case 'solomon':
    case 'given':
        console.log(`${friendCheck} is my male friend.`)
        break;
    case 'juliet':
    case 'tanele':
    case 'peggy':
        console.log(`${friendCheck} is my female friend.`);
        break;
    default:
        console.log(`i don't know ${friendCheck}, enter another name.`)
        break;
}
/* ********Rock Paper Scissors game****************
This is a game between a player and the computer, where both will make a random 
selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
Scissors will beat out Paper. You can use JavaScript to create your own version of 
this game, applying the logic with an if statement. Since this project is a little more 
difficult, here are some suggested steps:

1. Create an array that contains the variables Rock, Paper, and Scissors.
2. Set up a variable that generates a random number 0-2 for the player and then 
do the same for the computer's selection. The number represents the index 
values in the array of the 3 items.
3. Create a variable to hold a response message to the user. This can show the 
random results for the player and then also the result for the computer of the 
matching item from the array. 
4. Create a condition to handle the player and computer selections. If both are 
the same, this results in a tie. 
5. Use conditions to apply the game logic and return the correct results. 
There are several ways to do this with the condition statements, but you 
could check which player's index value is bigger and assign the victory 
accordingly, with the exception of Rock beating Scissors.
6. Add a new output message that shows the player selection versus the 
computer selection and the result of the game
*/

let arr1 = ['rock','paper','scissors']
let user = prompt['ROCK, PAPER, SCISSORS, SHOOOOOT!!!'].toLowerCase()
