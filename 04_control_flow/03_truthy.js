const userEmail = []

if (userEmail) {
    console.log("Got user email");

} else {
    console.log("Don't have user email");
}

// falsy value
// falsy value are those value which are false, 0, -0, BigInt 0n, "", null, undefined, NaN
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// truthy values are those value which are true, 1, -1, "0", " ", "false", [], {}, function(){}
// "0", " ", "false", [], {}, function(){}


if (userEmail.length === 0) {
    console.log("Array is empty");
}

const object = {}
if (Object.keys(object).length === 0) {
    console.log("Object is empty");

}

// Null Coalescing Operator 
// Null Coalescing Operator (??): null undefined
// This is use for how to handle error and assign the value.

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = 10 ?? null
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1); // 10

// Ternary Opretaor
// Ternary operators are used to evaluate the condition and return the value based on the condition.
// condition ? true: false
const iceCreamPrice = 100;
iceCreamPrice == 100 ? console.log("YES") : console.log("NO"); // YES..