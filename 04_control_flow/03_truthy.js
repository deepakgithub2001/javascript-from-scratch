const userEmail = []

if (userEmail) {
    console.log("Got user email");

} else {
    console.log("Don't have user email");
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
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
// This is use for how to handl error and assign the value.
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = 10 ?? null 
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Ternary Opretaor
// condition ? true: false

const iceCreamPrice = 100;
iceCreamPrice == 100 ? console.log("YES"): console.log("NO"); 