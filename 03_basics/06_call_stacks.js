// JavaScript Excecution Context

// When we write the code in JavaScript it goes first into the Global Excecution Thread.
// JavaScript is a single threaded language.

// These are some excecition context:-
// Global Excecution Context
// Function Excecution Context
// Eval Excecution Context (Mangoose)

// JS. Code run in two phases:- 
// Memory Creation Phase -- for memeory allocation
// Excecution Phase -- for all excecution

// All the variable in memory phase is "undefined" except function. Functions is definition.
// Whenever we excecute new function in JavaScript it will create a box including ("New Variable Environment + Excecution Thread").   

//Call Stack

// Call Stack follows the "LIFO" pattern.
// The call stack manages function calls and ensures the correct order of execution.
// Global Excecution also there for earlier excecution context.  

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
let total = num1 + num2;
return total;
}

let result1 = addNum(val1,val2); 
let result2 = addNum(10, 2);    