// #if condition is defined as the, if the given condition is true then excecute that block of code, otherwise skip that line of code and associate in #else code block.  

//if
if (2 > 1) {
    console.log(true)
} else {
    console.log(false)
}; // =>true 

//if-else
const temprature = 41

if (temprature == 41) {
    console.log("Temprature is 41.")

} else {
    console.log("Temprature is greater than 41.");

}; // =>Temprature is 41.  

// >, <, >=, <=, ==, ===, !=, !==

// if-else nested

const balance = 1000;
if (balance == 500) {
    console.log("balance is equal to 500");

} else if (balance < 500) {
    console.log("balance is less than 500");
}
else {
    console.log("balance is greater than 500");
}

// && use for AND. all the condition should be true.
// || use for OR.  at least one condition should be true.


const userLoogedIn = true
const debitCard = true
const userEmail = true
const userGoogle = true
const userNumber = false

if (userEmail || userGoogle) {

    console.log("user logged in.");

} 