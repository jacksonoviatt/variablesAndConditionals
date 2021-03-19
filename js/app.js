// var age = 24;
// var is_subscribed = false;

// if (age < 18 && is_subscribed === true) {
//     console.log("The user is subscribed and is NOT OVER 18");
// } else if (age < 18 && is_subscribed === false) {
//     console.log("The user is NOT subscribed is NOT OVER 18");
// } else if (age >= 18 && is_subscribed === true) {
//     console.log("The user is subscribed is OVER 18");
// } else if (age >= 18 && is_subscribed === false) {
//     console.log("The user is NOT subscribed and is OVER 18");
// } else {
//     console.log("There is an error");
// }








// The two arrays. These are storing multiple values that indicate whether a user is subscribed or not as well as their age. 
var age = [67, 16, 12, 86, 30, 34, 4, 60];
var is_subscribed = [false, true, false, true, false, true, false, true];

//  When we loop through an array, we use <Array Name>.length to signify the length of the array.
//  This will then be used as the condtional statement number and we will loop through the chosen array
//  Because our two arrays have to be the same length I am only use the Age array.
var userLength = age.length;

// This code is going to create a loop that will iterate through my arrays. 
// Then in the conditional block I am able to call on the counter variable in 
// [] brackets to indicate to the computer that it should loop thourgh the selected array.  
// userLength is being used in the condtional statement to ensure we loop thorugh the correct amount of times.
for (var counter = 0; counter < userLength; counter++) {

    if (age[counter] < 18 && is_subscribed[counter] === true) {
        console.log("The user is subscribed and is NOT OVER 18");
    } else if (age[counter] < 18 && is_subscribed[counter] === false) {
        console.log("The user is NOT subscribed is NOT OVER 18");
    } else if (age[counter] >= 18 && is_subscribed[counter] === true) {
        console.log("The user is subscribed is OVER 18");
    } else if (age[counter] >= 18 && is_subscribed[counter] === false) {
        console.log("The user is NOT subscribed and is OVER 18");
    } else {
        console.log("There is an error");
    }
}