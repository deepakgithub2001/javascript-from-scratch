// Arrow functions are the concise way to write javascript functions. It is comes into the figure with ES6 in 2015."this" Keyword is used to into the array funtions with difeerent behaviors. 

// Arrow functions use the => ("fat arrow") syntax. Here’s a basic example:

const add = (a, b) => a + b;
console.log(add(3, 4)); // Logs: 7 //implicit

const add1 = (a, b) => {
  let sum = a + b;
  return sum;
}; //explicit.

// Summary Table
// Context                           Value of this
	                              
// Global	                 window (in browsers) / global (Node.js)
// Regular Function	         window or undefined (in strict mode)
// Object Method	         Object that owns the method
// Class Method	             Specific instance of the class
// Arrow Function	         Inherited from surrounding scope
// Event Listener	         Element that received the event
// call(), apply(), bind()	 Explicitly set by these methods

// Arrow Functions vs Regular Functions

// Feature	                   Arrow Function	                       Regular Function
// this behavior	   Lexically inherited from outer scope	    Bound to the calling object
// arguments object	            Not available	                        Available
// Can be used as constructor	      No	                                Yes
// Syntax	                        Concise	                               Verbose