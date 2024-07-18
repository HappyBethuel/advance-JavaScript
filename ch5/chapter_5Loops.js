// Here is a very simple example of a while loop printing the numbers 0 to 10 
// (excluding 10) to the console:
// let i = 0;
// while (i < 10) {
//  console.log(i);
//  i++;
// }
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//  if (someArray[0] === "Louiza") {
//  console.log("Found her!");
//  notFound = false;
//  } else {
//  someArray.shift();
//  console.log(someArray)
//  }
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;

// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//  fibonacciArray.push(nr1);
//  temp = nr1 + nr2;
//  nr1 = nr2;
//  nr2 = temp; 
// }
// console.log(fibonacciArray)

/*Practice exercise 5.1
In this exercise we will create a number guessing game that takes user input and 
replies based on how accurate the user's guess was.
1. Create a variable to be used as the max value for the number guessing game.
2. Generate a random number for the solution using Math.random() and 
Math.floor(). You will also need to add 1 so that the value is returned as 
1-[whatever the set max value is]. You can log this value to the console for 
development to see the value as you create the game, then when the game is 
complete you can comment out this console output.
3. Create a variable that will be used for tracking whether the answer is correct 
or not and set it to a default Boolean value of false. We can update it to be 
true if the user guess is a match. 
4. Use a while loop to iterate a prompt that asks the user to enter a number 
between 1 and 5, and convert the response into a number in order to match 
the data type of the random number.
5. Inside the while loop, check using a condition to see if the prompt value is 
equal to the solution number. Apply logic such that if the number is correct, 
you set the status to true and break out of the loop. Provide the player with 
some feedback as to whether the guess was high or low, and initiate another 
prompt until the user guesses correctly. In this way we use the loop to keep 
asking until the solution is correct, and at that point we can stop the iteration 
of the block of code. */

// let userInput = prompt('enter a number: ')
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber) 

// let number;
// do {
//  number = prompt("Please enter a number between 0 and 100: ");
//  alert(`you chose the number ${number}`)
// } while (!(number >= 0 && number < 100));

// Practice exercise 5.2
// In this exercise, we will create a basic counter that will increase a dynamic variable 
// by a consistent step value, up to an upper limit.
// 1. Set the starting counter to 0
// 2. Create a variable, step, to increase your counter by
// 3. Add a do while loop, printing the counter to the console and incrementing it 
// by the step amount each loop
// 4. Continue to loop until the counter is equal to 100 or more than 100

//This is a simple example that logs the numbers 0 to 10 (excluding 10) to the console
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//    }

// //    We can also use a for loop to create a sequence and add values to an array, like this:
//    let arr1 = [];
//    for (let i = 0; i < 100; i++) {
//     arr1.push(i);
//    }
// //    Or we could create an array containing only even values
//    let arr2 = [];
// for (let i = 0; i < 100; i = i + 2) {
//  arr2.push(i)}

 /*Practice exercise 5.3
 In this exercise we will use a for loop to create an array that holds objects. Starting 
 with creating a blank array, the block of code within the loop will create an object 
 that gets inserted into the array.
 1. Setup a blank array, myWork.
 2. Using a for loop, create a list of 10 objects, each of which is a numbered 
 lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false
 status for every other item to indicate whether the class will be running this 
 year. For example:
 name: 'Lesson 1', status: true
 3. You can specify the status by using a ternary operator that checks whether 
 the modulo of the given lesson value is equal to zero and by setting up a 
 Boolean value to alternate the values each iteration.
 4. Create a lesson using a temporary object variable, containing the name 
 (lesson with the numeric value) and predefined status (which we set up in 
 the previous step).
 5. Push the objects to the myWork array.
 6. Output the array to the console */

//***********NESTED LOOPS************/
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//  arrOfArrays.push([]); // [[],[],[]]
//  for (let j = 0; j < 7; j++) {
//  arrOfArrays[i].push(j);
//  }
// }
// console.log(arrOfArrays)
// console.table(arrOfArrays)

/*Practice exercise 5.4
In this exercise we will be generating a table of values. We will be using loops to 
generate rows and also columns, which will be nested within the rows. Nested arrays 
can be used to represent rows in a table. This is a common structure in spreadsheets, 
where each row is a nested array within a table and the contents of these rows are 
the cells in the table. The columns will align as we are creating an equal number of 
cells in each row.
1. To create a table generator, first create an empty array, myTable, to hold your 
table data.
2. Set variable values for the number of rows and columns. This will allow us 
to dynamically control how many rows and columns we want within the 
table. Separating the values from the main code helps make updates to the 
dimensions easier.
3. Set up a counter variable with an initial value of 0. The counter will be used 
to set the content and count the values of the cells within the table.
4. Create a for loop with conditions to set the number of iterations, and to 
construct each row of the table. Within it, set up a new temporary array 
(tempTable) to hold each row of data. The columns will be nested within 
the rows, generating each cell needed for the column. 
5. Nest a second loop within the first to count the columns. Columns are run 
within the row loop so that we have a uniform number of columns within 
the table.*/

// let myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;
// for (let y = 0; y < rows; y++) {
//     let tempTable = [];
//     for (let x = 0; x < cols; x++) {
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);

/*Loops and arrays
If you are not convinced of how extremely useful loops are by now, have a look at 
loops and arrays. Loops make life with arrays a lot more comfortable.
We can combine the length property and the condition part of the for loop or while
loop to loop over arrays. It would look like this in the case of a for loop:
let arr = [some array];
for (initialize variable; variable smaller than arr.length; statement) 
{
 // code to be executed
}
Let's start with a simple example that is going to log every value of the array:
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i ++){
 console.log(names[i]);
}
This will output:
Chantal
John
Maxime
Bobbi
Jair */

/*We use the length property to determine the maximum value of our index. The 
index starts counting at 0, but the length does not. The index is always one smaller 
than the length. Hence, we loop over the values of the array by increasing the length. 
In this case we aren't doing very interesting things yet; we are simply printing the 
values. But we could be changing the values of the array in a loop, for example, like 
this:
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i ++){
 names[i] = "hello " + names[i];
}
We have concatenated hello with the beginnings of our names. The array is changed 
in the loop and the array will have this content after the loop has executed:
[
 'hello Chantal',
 'hello John',
 'hello Maxime',
 'hello Bobbi',
 'hello Jair'
] */

/* The possibilities are endless here. When an array comes in somewhere in the 
application, data can be sent to the database per value. Data can be modified by 
value, or even filtered, like this:
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
for (let i = 0; i < names.length; i ++){ 
 if(names[i].startsWith("M")){
 delete names[i];
 continue;
 }
 names[i] = "hello " + names[i]; 
} 
console.log(names);
The startsWith() method just checks whether the string starts with a certain 
character. In this case it checks whether the name starts with the string M. 
*/

/* The output is:
[
 'hello Chantal',
 'hello John',
 <1 empty item>,
 'hello Bobbi',
 'hello Jair'
]
*/
/*You'll have to be careful here though. If we were to remove the item instead of 
deleting it and leaving an empty value, we would accidentally skip the next value, 
since that value gets the index of the recently deleted one and i is incremented and 
moves on to the next index.
What do you think this one does:
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
for (let i = 0; i < names.length; i++){ 
 names.push("...")
}
Your program gets stuck in an infinite loop here. Since a value gets added every 
iteration, the length of the loop grows with every iteration and i will never be bigger 
than or equal to length. */


/*Practice exercise 5.5
Explore how to create a table grid that contains nested arrays as rows within a table. 
The rows will each contain the number of cells needed for the number of columns set 
in the variables. This grid table will dynamically adjust depending on the values for 
the variables.
1. Create a grid array variable.
2. Set a value of 64 for the number of cells.
3. Set a counter to 0.

4. Create a global variable to be used for the row array.
5. Create a loop that will iterate up to the number of cells you want in the array, 
plus one to include the zero value. In our example, we would use 64+1.
6. Add an outer if statement, which uses modulo to check if the main counter 
is divisible by 8 or whatever number of columns you want.
7. Inside the preceding if statement, add another if statement to check if the 
row is undefined, indicating whether it is the first run or whether the row 
is complete. If the row has been defined, then add the row to the main grid 
array.
8. To finish off the outer if statement, if the counter is divisible by 8, clear the 
row array—it has already been added to the grid by the inner if statement.
9. At the end of the for loop, increment of the main counter by 1.
10. Set up a temporary variable to hold the value of the counter and push it to 
the row array.
11. Within the loop iteration, check if the value of the counter is equal to the total 
number of columns you want; if it is, then add the current row to the grid.
12. Please note that the extra cell will not be added to the grid since there aren't 
enough cells to make a new row within the condition that adds the rows to 
the grid. An alternative solution would be to remove the +1 from the loop 
condition and add grid.push(row) after the loop is completed, both of which 
will provide the same solution output.
13. Output the grid into the console. */

/**********FOR OF************/

/* let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let name of names){
 console.log(name);
}
There are some limitations here; we cannot modify the array, but we could write all 
the elements to a database or a file, or send it somewhere else. The advantage of this 
is that we cannot accidentally get stuck in an infinite loop or skip values.

Practice exercise 5.6
This exercise will construct an array as it loops through the incrementing values of 
x. Once the array is done, this exercise also will demonstrate several ways to output 
array contents. 
1. Create an empty array
2. Run a loop 10 times, adding a new incrementing value to the array
3. Log the array into the console
4. Use the for loop to iterate through the array (adjust the number of iterations 
to however many values are in your array) and output into the console
5. Use the for of loop to output the value into the console from the array
*/

let myArray = [];

for (let x = 0; x < 10; x++) {
    myArray.push(x);
}
console.log(myArray);
 
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
for (let val of myArray) {
    console.log(val);
}

/**********FOR IN LOOOPS************** */
//almost same as for of

Manipulating objects with loops can also be done with another variation of the for
loop, the for in loop. The for in loop is somewhat similar to the for of loop. Again 
here, we need to specify a temporary name, also referred to as a key, to store each 
property name in. We can see it in action here:
let car = {
 model: "Golf",
 make: "Volkswagen",
 year: 1999,
 color: "black",
};
for (let prop in car){
 console.log(car[prop]);
}
We need to use the prop of each loop iteration to get the value out of the car object. 
The output then becomes


