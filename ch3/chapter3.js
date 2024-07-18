// let numbers = new Array("purple", "green", "yellow");
// let daysOfweek = ["Mooday", "Tuesday"];
// console.log(numbers)
// console.log(daysOfweek)

// let array3 = new array(5)
// let array4 = [true, 5, null]
// console.log(arr3);
// console.log(arr4)

// let arr = ["i have", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2])

// let cars = ['vw', 'bmw','benz']
// console.log(cars[0])
// console.log(cars[3])

// cars[2] = 'toyota'
// cars[3] = 'fiat'
// console.log(cars[-1])

// // let colors = ["black", "orange", "pink"]
// // let booleans = [true, false, false, true];
// // emptyArray = [];
// // console.log("Length of colors:", colors.length);
// // console.log("Length of booleans:", booleans.length);
// // console.log("Length of empty array:", emptyArray.length);

// let numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log()
// console.log(numbers.length);


// let shoppigList = ['milk','bread', 'apples']
// let listLength = shoppigList.length
// shoppigList[1] = 'bananas'
// console.log(listLength)
// console.log(shoppigList)
// //***************PUSH AND*********** */
// // Adding and replacing elements
// // We can add elements with the push() method:
// let favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");

// console.log(favoriteFruits)

// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(lengthOfFavoriteFruits)

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(0, 0, "square", "trapezoid");
arrOfShapes.unshift('nothing')
console.log(arrOfShapes);

//CONCAT

// let arr5 = [2,4,6]
// let arr6 = [8,10,12]
// let arr7 = arr5.concat(arr6)
// let arr8 = arr7.concat(14,16,18)

// console.log(arr8)

// //*********DELETING***************

// arr8.shift()
// arr5.pop()


// //*********FIND******

// let arr9 = [3,5,6];
// let findValue = arr9.find((e) =>  e === 6 )
// let findValue2 = arr9.find((e) =>  e === 2 )
// console.log(findValue)
// console.log(findValue2)
//finding using IDEXOF

//SORTING

// let ages = [1,5,5,4,7,9,5]
// console.log(ages)
// ages.sort()
// console.log(ages)
// ages.reverse

//Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.

// let myShopList = []
// myShopList.push('milk','bread','apples')
// console.log(myShopList)

// myShopList.splice(1,1,'bananas','eggs')
// console.log(myShopList)
// myShopList.pop()
// console.log(myShopList)
// myShopList.sort()
// console.log(myShopList)
// let findIdexOfMilk = myShopList.indexOf('milk')
// console.log(findIdexOfMilk)

// myShopList.splice(1,0, 'carrots','lettuce')
// let newList = ['juice','pop']

// let newShopList = myShopList.concat(newList,newList)
// console.log(newShopList)

// let popIndex = newShopList.lastIndexOf('pop')
// console.log(popIndex)

//*******MULTI DIMENSIONAL ARRAYS****** *
// (i)2D ARRAYS
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays)

// let arrOfArrays1 =[] 
// //accessong elements
// console.log(arrOfArrays[1][2])
// let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log(arrOfArraysOfArrays)

//Practice exercise 3.3
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.

// let arrof3values = [1,2,3]
// let nestedArray = [arrof3values,arrof3values,arrof3values] **********CHECK!!!!***************
// console.log(nestedArray[1][1][1])

// *****OBJECTS*****
let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};

console.log(dog)
dog.color = 'blue'
dog['weight'] = 5.5
dog['age'] = '40'
console.log(dog)

// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not 
// limited to, make and model, and values for a typical car or your car. Feel free 
// to use booleans, strings, or numbers.
// 2. Create a variable that can hold the string value color. This variable 
// containing a string value color can now be used to reference the property 
// name within myCar. Then, use the variable within the square bracket notation 
// to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as 
// forSale. Use the bracket notation once again to assign a new value to the 
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console

// let myCar = {make: "van",
//     model: 2016,
//     brand:'vw',
//     color: 'blue'
//     luxury: false};

// let variable = "color"
// myCar.variable[color] //************continue*********** */
// console.log(myCar)


// Objects in objects
// Let's say we want to have an object for a company. This company will have an 
// address. And an address is another object. If we give our company an address, 
// we are using an object inside an object:
// let company = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };

// console.log(company)
// company.address.zipcode = "33117";
// company["address"]["number"] = "100";
// console.log(company)

// Arrays in objects
// Our company might have a range of activities instead of one. We can simply replace 
// the activity from our previous sample with an array:
company = { companyName: "Healthy Candy",
 activities: ["food manufacturing", 
"improving kids' health", "manufacturing toys"],
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };

let activity = company.activities[1];

// Objects in arrays
// It is very possible that instead of one address, our company has a list of addresses. 
// We can accomplish this by creating an array of address objects. In this case, we will 
// create an array of two:
// let addresses = [{
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  {
//  street: "1st West avenue",
//  number: "5",
//  zipcode: "75001",
//  city: "Addison",
//  state: "Texas"
//  }];
// // So, the arrays can be recognized by the square brackets and the objects by the curly 
// // brackets. The street name of the first object can be fetched using this statement:
// let streetName = addresses[0].street;
// console.log('the street name of the first index is', addresses)

// Objects in arrays in objects
// Just to show that this can go as many levels as we would need, we are going to give 
// our company object an array of address objects. So, let's add this array of address 
// objects to our company object. This way, our company has an array of addresses:
 company = { companyName: "Healthy Candy",
 activities: [ "food manufacturing", 
"improving kids' health", 
"manufacturing toys"],
 address: [{
 street: "2nd street",
 number: "123",
 zipcode: "33116",
city: "Miami",
 state: "Florida"
 },
 {
 street: "1st West avenue",
 number: "5",
 zipcode: "75001",
city: "Addison",
state: "Texas"
 }],
 yearOfEstablishment: 2021
 };
// To access elements of increasingly nested objects and arrays, we simply extend 
// the same logic you have seen in the previous sections. To access the street name of 
// Healthy Candy's first address, we can use the following code:
let streetName = company.address[0].street;
// As you see, we can stack object and array element requests indefinitely.

// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called 
// friends.
// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console

let friends = []
let people = {friends}
console.log(people)