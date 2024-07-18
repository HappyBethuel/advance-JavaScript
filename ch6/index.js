//Let's write a function that asks for your name and then greets you:
function sayHello() {
 let you = prompt("What's your name? ");
 alert("Hello", you + "!");
}
sayHello()

//Practice exercise 6.1

/************Parameters and argumants */
function tester(para1, para2){
    return para1 + " " + para2;
   }
   let arg1 = "argument 1";
   let arg2 = "argument 2";
   
tester(arg1, arg2);
console.log(te)   

addTwoNumbers

/*********DEFUALT UNSUITABLE ********** */

function addTwoNumbers(x = 2, y = 3) {
    console.log(x + y);
   }
addTwoNumbers() // 2+3 
addTwoNumbers(4,5)  //4+5
addTwoNumbers(10) // 10+3

/******Special functions and operators ******/
/****ARROW FUNCTION */

function doStuff(x){
    console.log(x)
}
doStuff('hello people')

let doArrowStuff = x => console.log(x)
doArrowStuff('hello people') 

let addTwoNumbers = (x,y) => console.log(x+y)
addTwoNumbers(5,6)

let sayHi = () => console.log("hi");

const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(e => console.log(e));


/****************SPREAD OPERATOR */

let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very",
 "powerful"];

 function addTwoNumbers(x, y) {
    console.log(x + y); 
   } 
   let arr = [5, 9];
   addTwoNumbers(...arr)

   function addFourNumbers(x, y, z, a) { 
    console.log(x + y + z + a); 
   } 
   let arr = [5, 9];
   let arr2 = [6, 7];
   addFourNumbers(...arr, ...arr2); //5+9+6+7
   //This will output 27 to the console, calling the function like this:
   addFourNumbers(5, 9, 6, 7)


//    *********REST OPERATOR**********

//*************RETURNING FUNCTION VALUES*****

function addTwoNumbers(x, y) {
    return x + y;
   }

   let result = addTwoNumbers(4, 5);
console.log(result);

//With these adjustments made, the code snippet logs 9 to the terminal.
//What do you think this code does?
let resultsArr = [];
for(let i = 0; i < 10; i ++){
 let result = addTwoNumbers(i, 2*i);
 resultsArr.push(result);
}
console.log(resultsArr);

/