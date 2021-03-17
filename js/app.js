var age = 24;
var is_subscribed = false;

if (age < 18 && is_subscribed === true) {
    console.log("The user is subscribed and is NOT OVER 18");
} else if (age < 18 && is_subscribed === false) {
    console.log("The user is NOT subscribed is NOT OVER 18");
} else if (age >= 18 && is_subscribed === true) {
    console.log("The user is subscribed is OVER 18");
} else if (age >= 18 && is_subscribed === false) {
    console.log("The user is NOT subscribed and is OVER 18");
} else {
    console.log("There is an error");
}