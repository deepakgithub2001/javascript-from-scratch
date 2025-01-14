// All the Primitive Datatypes are stored in Stack.
// All the Non-Primitive Datatypes are stored in Heap.

// Stack memory consider copy of value that particular variables, and whenever we change that it will provides the copy of original variable, not able to change the original value of that variable.

// Heap memory consider reference of value that particular variables, and whenever we change that it will change the original variable. 

// Stack and Heap are the Memory Allocation Area where data is stored. 

// For Primitive DataTypes:-

let myName = "Deepak"
let myOriginalName = myName
myOriginalName = "Deepak Kumar"

console.log(myName); //Deepak
console.log(myOriginalName); //Deepak Kumar

// In the above example, we have two variables myName and myOriginalName. We have assigned myName to myOriginalName. So, myOriginalName is a copy of myName. So, when we change the value of myOriginalName, it will not change the value of myName.

// For Non-Primitive DataTypes:-

let userOne = {
    email: "deepak@gmail.com",
    upi: "deepak@ybl"
}


let userTwo = userOne;
userTwo.email = "deepak@hotmail.com"
userTwo.upi = "deepak@paytm"

console.log(userOne.email); //deepak@hotmail.com
console.log(userTwo.email); //deepak@hotmail.com
console.log(userTwo.upi);  // deepak@paytm 

// In the above example, we have two objects userOne and userTwo. We have assigned userOne to userTwo. So, userTwo is a reference to userOne. So, when we change the value of userTwo, it will change the value of userOne.