// All the Primitive Datatypes are stored in Stack.
// All the Non-Primitive Datatypes are stored in Heap.
// Stack memory consider copy of value that particular variables, and whenever we change that it will provides the copy of original variable, not able to chane the original value of that varaible.
// Heap memory consider reference of value that particular variables, and whenever we change that it will change the original variable. 
//Stack and Heap are the Memory Allocation Area where data is stored. 

// For Primitive DataTypes:-
let myName = "Deepak"
let myOriginalName = myName
myOriginalName = "Deepak Kumar"

console.log(myName);
console.log(myOriginalName);

// For Non-Primitive DataTypes:-
let userOne = {
email: "deepak@gmail.com",
upi: "deepak@ybl"
} 

let userTwo = userOne;
userTwo.email = "deepak@hotmail.com"
userTwo.upi = "deepak@paytm"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userTwo.upi); 