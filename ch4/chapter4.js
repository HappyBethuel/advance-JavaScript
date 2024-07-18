// let rain = true;
// if (rain) {
//     console.log("** Taking my umbrella when I need to go outside **");
// } else {
//     console.log("** I can leave my umbrella at home **");
// }

// let age = Number(prompt('how old are you?'))
// if (age > 18) {
//     console.log('you qualify')
// } else {
//     console.log("sorry you underage!")
// }

// Practice exercise 4.1
// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console, 
// using the following syntax:
// //if(myVariable){
// //action

// 4. Add another if statement with an ! in front of the variable to check whether 
// the condition is not true, and create a message that will be printed to the 
// console in that instance. You should have two if statements, one with an 
// ! and the other without. You could also use an if and an else statement 
// instead—experiment!
// 5. Change the variable to the opposite to see how the result changes

// let myvariable = false
// console.log(myvariable)

// if(myvariable){
//     console.log('it is true')}
//     if(!myvariable){
//         console.log('this should print false')

// }else{
//     console.log('error!!')
// }

// let age = Math.floor(Math.random() * 120);
// let cost = 0;
// let message;
// if (age < 3) {
//     cost = 0;
//     message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost)

// *********4.5*************

// Practice exercise 4.2
// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for 
// the user
// 4. If the input age is equal to or greater than 21, set the message variable to 
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to 
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if 
// none are true
// 7. Output the response message variable to the console


// let age = Number(prompt('How old are you?'))
// let message;

// if(age >= 21){
//     message = 'confirm entry, you qualify to purchase alcohol'

// }else if(age >= 19){
//     message = 'confirm entry, however, no alcohol for you lol!'

// }else{
//     message = 'you underage, Go home kid!'
// }
// console.log(message);

// 5

// expression ? statement for true : statement associated with false;

// let access = age < 18 ? "denied" : "allowed";

// Practice exercise 4.3
// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check whether 
// their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console

// let checkId = true

// let accessToVenue = !checkId ? 'valid ID, you can enter the venue' : 'access denied, ID invalid!'
// console.log(accessToVenue)

// // ********INTRODUCING THE SWITCH STATEMETNS***********
// let activity = prompt('what ais your activity now?')

// if(activity === "Get up") {
//     console.log("It is 6:30AM");
//    } else if(activity === "Breakfast") {
//     console.log("It is 7:00AM");
//    } else if(activity === "Drive to work") {
//     console.log("It is 8:00AM");
//    } else if(activity === "Lunch") {
//     console.log("It is 12.00PM");
//    } else if(activity === "Drive home") {
//     console.log("It is 5:00PM")
//    } else if(activity === "Dinner") {
//     console.log("It is 6:30PM");
//    } 

//USING SWITCH STATEMENTS

// switch (activity) {
//     case "Get up":
//         console.log("It is 6:30AM");
//         break;
//     case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//     case "Drive to work":
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12:00PM");
//         break;
//     case "Drive home":
//         console.log("It is 5:00PM");
//         break;
//     case "Dinner":
//         console.log("It is 6:30PM");
//         break;
//     default:
//         console.log("I cannot determine the current time.");
//         break;
// }

// Practice exercise 4.4
// As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.
// random() will return a random number in the range of 0 to less than 1, including 0 
// but not 1. You can then scale it to the desired range by multiplying the result and 
// using Math.floor() to round it down to the nearest whole number; for example, to 
// generate a random number between 0 and 9:
// // random number between 0 and 1
// let randomNumber = Math.random(); 
// // multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10; 
// // removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber); 


// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value 
// is assigned by generating a random number 0-5, for 6 possible results. You 
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can 
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different 
// value from the random number generator. 
// 4. Create a variable to hold the end response, which should be a sentence 
// printed for the user. You can assign different string values for each case, 
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case 
// response, to the console after the user enters their question

// let randomValue = Math.floor(Math.random() * 6)
// let useNumber =Number(prompt('guess a number'))
// switch (useNumber === randomValue) {
//     case 0:
//         console.log('it is a 0');
//         break;
//     case 1:
//         console.log('it is a 1');
//         break;
//     case 2:
//         console.log('it is a 2');
//         break;
//     case 3:
//         console.log('it is a 3'); //******************COME BACK TO THIS**************** */
//         break;
//     case 4:
//     console.log('it is a 4');
//         break;
//     case 5:
//     console.log('it is a 5');
//         break;
//         case 6:
//     console.log('it is a 6');
//         break;
//         default:
//             console.log('please try again!')


// }
// Combining cases
// Sometimes, you would want to do the exact same thing for multiple cases. In an if 
// statement, you would have to specify all the different or (||) clauses. In a switch 
// statement, you can simply combine them by putting them on top of each other like 
// this:
// let grade = prompt('what is your grade? A,B,C,D,E or F?')
// switch (grade) {
//     case "F":
//     case "D":
//         console.log("You've failed!");
//         break;
//     case "C":
//     case "B":
//         console.log("You've passed!");
//         break;
//     case "A":
//         console.log("Nice!");
//         break;
//     default:
//         console.log("I don't know this grade.");
// }
// //This is more readable than the alternative if-else statement:
// if (grade === "F" || grade === "D") {
//     console.log("You've failed!");
// } else if (grade === "C" || grade === "B") {
//     console.log("You've passed!");
// } else if (grade === "A") {
//     console.log("Nice!");
// } else {
//     console.log("I don't know this grade.");
// }
// Practice exercise 4.5 
// 1. Create a variable called prize and use a prompt to ask the user to set the 
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My 
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back 
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable 
// strings and the output message string

let prize = Number(prompt('choose a number between 0 and 10'))
let messege = 'My Selection';

switch (prize) {
    case 1:
        console.log('Congrats! you won Playstaion 4');
        break;
    case 2:
        console.log('Congrats! you habe won an Xbox ONE S');
        break
    case 3:
        console.log('you have won a Lenovo Laptop, wow!');
        break
    case 4:
        console.log('you won a sAMSUNG TV ')
        break;
    case 5:
        console.log('A car!!!!!! CONGRATS!!!');
        break;
    case 6:
    case 7:
        console.log('A trip to Germany');
        break;
    case 8:
    case 9:
    case 10:
        console.log('A london trip to watch all Chelsea football games!!!! best prize!!!!!!!')
    default:
    console.log("make sure you select a number in the given range ")

}
console.log(messege, 'is', prize)
