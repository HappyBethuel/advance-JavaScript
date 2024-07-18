"use strict"

// *********Miles-to-kilometers converter project******

// let miles = 130
// let kms = 209.2142

// let oneMileToKms =  1.60934
// let userMile = prompt('enter miles')
// let convertMilesToKms = userMile * oneMileToKms
// console.log(`The distance of ${convertMilesToKms}kms is equal to ${userMile}miles`)

//************BMI PROJECT*****************/

//utxmxm
let userPounds = prompt('enter your weight in pounds');
let userInches = prompt('enter your height in inches');
//convert the values to kilos and cms
let weight = userPounds / 2.2046; // in kilos
let height = userInches * 2.54; // height in centimetres

console.log(`your weight in kilos is ${weight} and your height in cms is ${height}`);


let heighttoMeters = height/100 // 100 is the value used to convert cms to meters(m)
//calculate the user bmi
let bmi = weight/(height)**2;
console.log(bmi);



