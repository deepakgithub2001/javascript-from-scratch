// Arrow functions are the concise way to write javascript functions. It is comes into the figure with ES6 in 2015."this" Keyword is used to into the arrow funtions with difeerent behaviors. 

// Arrow functions use the => ("fat arrow") syntax. Here’s a basic example:

const add = (a, b) => a + b;
console.log(add(3, 4)); // Logs: 7 //implicit

const add1 = (a, b) => {
  let sum = a + b;
  return sum;
}; //explicit.
 
// When to use Implicit and Explicit return in arrow functions.

// Implicit Return
// If the function body consists of a single expression, you can omit the curly braces and the return keyword. The expression will be implicitly returned.

// Explicit Return
// If the function body consists of multiple expressions, you must use curly braces and the return keyword to explicitly return a value.

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

// Feature	                        Regular Function                       Arrow Function	
// this behavior	        Bound to the calling object	       Lexically inherited from outer scope
// arguments object	                  Available	                            Not Available
// Can be used as constructor	           Yes                                     No
// Syntax	                             Verbose                                Concise 