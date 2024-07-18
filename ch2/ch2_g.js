// strings

let intro = "my name is \""

//boolean//

letboo1 = false
let bool2 = true

//type of variable

let str = 'helo'
let nr = 3
 

//*******************Symbol**********************/

// Symbol is a brand new data type introduced in ES6 (we mentioned ECMA Script 6, 
// or ES6, in Chapter 1, Getting Started with JavaScript). Symbol can be used when it is 
// important that variables are not equal, even though their value and type are the same 
// (in this case, they would both be of the symbol type). Compare the following string 
// declarations to the symbol declarations, all of equal value:
// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);
// And the output:
// These two strings are the same: true
// These two Symbols are the same: false


// //Practice exercise 2.1
// What are the types of these variables listed below? Verify this with typeof and 
// output the result to the console:
let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

// console.log('str1 is', typeof(str1))
// console.log('str1 is', typeof(str2))
// console.log('val1 is', typeof(val1))
// console.log('val1 is', typeof(val2))
// console.log('myNum1 is', typeof(myNum))

// Practice exercise 2.2
// Create a variable for your name, another one for your age, and another one for 
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are 
// variables:

let myName = 'happy'
let age = Math.floor(Math.random() * 50)
let canCodeJs = true
// console.log(`my name is ${myName}, i am ${age} years old and i can code in Js ${canCodeJs}`)
// Practice exercise 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
// theorem when given the values of the other two sides. The theorem specifies that the 
// relation between the sides of a right-angled triangle is a**2 + b**1 = c**2

let a = prompt('enter any number')
let b = prompt('enter again any number')

let cSqr = (a**2) + (b**2)
// console.log(cSqr)

function pyth(a,b){
    let c = a**2 + b**2
    return c
}

// console.log(pyth(a,b))
// Practice exercise 2.4
// Create variables for three numbers: a1, b1, and c1. Update these variables with the 
// following actions using the assignment operators:
//• Add b1 to a1
//• Divide a1 by c1
// • Replace the value of c1 with the modulus of c1 and b1
// • Print all three numbers to the console

let a1 = 1
let b1 = 2
let c1 = 3

a1 += b1
console.log(a1)
a1 /= c1
console.log(a1)
c1 %= b1
console.log(c1)
