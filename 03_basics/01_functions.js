// Function
// A function in JavaScript is a block of code designed to perform a specific task. It can be invoked (called) multiple times to reuse the code, and it can accept parameters and return values. Functions help in organizing and reusing code efficiently.

function myFunction() {
    console.log("Myself Deepak Kumar.")
}


myFunction
myFunction()

// #1
function addTwoNumber(number1, number2) // parameters(@params)
{
    console.log(number1 + number2);

}

addTwoNumber(1, 2) //arguments(@arg)

// #2
function addTwoNumber(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result = addTwoNumber(5, 7)
console.log("The Result is", result);

// #3
function addTwoNumber(number1, number2) {
    return number1 + number2;
}
result = addTwoNumber(5, 7)
console.log("The Result is", result);

function userLoggedIn(username) {
    if (username === undefined)
    // (!username) === undefined) 
    {
        console.log("please enter username");
        return
    }

    return `${username} just logged in.`

}


console.log(userLoggedIn("Deepak")); // if we wre not pass any value it's return undefined.