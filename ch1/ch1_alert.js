"use strict"




// let mystatus = "new";
// let myscared = true;
// if (mystatus === "new") {
//     console.log("Welcome to JavaScript!");
//     if (scared) {
//         console.log("Don't worry you will be fine!");
//     } else {
//         console.log("You're brave! You are going to do great!");
//     }
// } else {
//     console.log("Welcome back, I knew you'd like it!");
// }
//alert('hey there, from a different file')
let feeling = prompt("how are you feeling today?")
alert(feeling)
let education = false;
let nqf = prompt(" what is your NQF level? 4,5,6 or 7?")
if (education) {
    console.log('nice!');
    if (education) {
        alert('i trust you will acquire that education!')

    } else if (nqf == 5 | nqf == 6 | nqf == 7) {
        alert('wow, add another one')

    } else {
        alert(' choose between 4, 5, 6 and 7')
    }

} else {
    alert('now is the right time to start!')
}