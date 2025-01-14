// This is the 50 Basic JavaScript Questions and Answers.

// 1. What is JavaScript ?

//     JavaScript is a scripting language used for creating dynamic web content.

//         console.log("Hello, JavaScript!");

// 2. How to declare a variable in JavaScript ?

//    variables are the containers for storing data values.
//     Use var, let, or const.

//         let age = 30;
// const name = "Alice";
// var isStudent = true;

// 3. What are data types in JavaScript ?

// DataTypes are the type of data that can be stored in a variable.

//There are two types of Datatypes in JS.

//Primitive and Non-Primitive

// The simplest data structures, used for basic data storage. Primitive data types are built into the language and have a fixed size.

//Number, String, Boolean, Undefined, Null, Symbol, float and BigInt. are some example of Primitive Datatypes.

// More complex data structures, used for complex data storage. Non-primitive data types are created by the programmer and have a variable size.

//Object, Array, Function, Date are some of example of Non-Primitive Datatypes.

// Primitive

// let num = 5;
// let BigInt = (123456789009876543212345);
// let isTrue = true;
// let isFalse = false;
// let name = "Deepak"

// Non-Primitive

// let person = {name: "Deepak", age: 25, language: "Hindi"};
// let number = [1,2,3,4,5]

// 4. What is an array in JavaScript?

//    An array is a collection of items stored at contiguous memory locations.

// Note - Contiguous memory locations are a memory management technique that allocates a single, uninterrupted block of memory to a process or program. This allows for fast and direct access to data because the CPU can easily calculate the address of any location within the block.

//     Creating an arrray
//     Use square brackets[].

//     let fruits = ["Apple", "Banana", "Orange"];

// 5. What is a function?

//    A function is a block of code that performs a specific task.
//    It can take parameters and return a value.
//    A function is defined using the function keyword.

//    function greet(name) {
//    return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));  // "Hello, Alice!"

// 6. What are operators ?

//     Operators are used to perform operations on variables and values.
//     Arithmetic(+, -, *, /), Assignment(=), Comparison(==, ===), Logical(&&, ||, !).

//     let sum = 10 + 5;
//     let isEqual = 5 == "5"; // true
//     let isStrictEqual = 5 === "5"; // false

// 7. What is the difference between var, let, and const?
//     var: Function-scoped, can be redeclared.
//     let: Block - scoped, cannot be redeclared.
//     const: Block - scoped, cannot be reassigned.

//     var x = 10;
//     let y = 20;
//     const z = 30;

// 8. What is the difference between == and ===?

// == checks value; === checks value and type.

//     console.log(5 == "5"); // true
//     console.log(5 === "5"); // false

// 9. How do you write a conditional statement ?

//     Use if, else, or else if.

//     let age = 18;
//     if (age >= 18) {
//     console.log("Adult");
// }   else {
//     console.log("Minor");
// }  // Adult;

// 10. What is a loop in JavaScript ?

//     A loop is used to execute a block of code repeatedly.
//     for, while, do...while.

//     for loop are used to execute a block of code a number of times.
//     for(let i = 0; i < 5 ; i++) {
//     console.log(i);  // 0,1,2,3,4
// }

//     while loop are used to execute a block of code as long as the condition is true.
//     let index = 1;
//     while (index <= 10) {
//     console.log(`The Value is ${index}`);
//     index = index + 1;
// }   // The Value is 1..upto 10


//     do...while loop are used to execute a block of code once, and then repeats the loop as long as the condition is true.
//     do {
//     console.log(`The score is ${score} `);
//     score = score + 1;
// }   while (score <= 10)  //The score is 1..upto 10

// 11. What is null in JavaScript ?

//     It represents an intentionally empty or non - existent value.

//     let emptyValue = null;

// 12. What is undefined in JavaScript ?

//     A variable declared but not assigned has the value undefined.

//     let notDefined;
//     console.log(notDefined); // undefined

// 13. What is an object ?

//     An object is a collection of key - value pairs.
//     Using curly braces { }.

// let person = { name: "John", age: 25 };
// console.log(person.name); // "John"

// 14. What is the DOM ?
//     DOM(Document Object Model) is an API to interact with HTML and CSS.

//     document.body.style.backgroundColor = "blue";

// 15. What is alert ?

//     It displays a message box with a message.
//     Use alert().

//     alert("Hello!"); // Displays a message box with "Hello!" at top of the page.

// 16. How do you handle events ?

//     Events are actions that occur in the browser, like clicking a button or submitting a form.
//     Use addEventListener.

//     document.getElementById("btn").addEventListener("click", () => {
//     console.log("Button clicked!");
// });

// 17. What is console.log ?

//     It outputs messages to the browser console.
//     console.log("Debugging message");  // Debugging message

// 18. What is typeof?

//     It returns the type of a variable.
//     console.log(typeof "Hello"); // "string"

// 19. What is a template literal ?

//     It's a way to create strings with embedded expressions.
//     Use backticks `` to embed expressions.

//     let name = "Alice";
//     console.log(`Hello, ${name}`); // "Hello, Alice"

// 20. What is a ternary operator ?
//     It's a shorthand for #if.

//     let age = 20;
//     let message = age >= 18 ? "Adult" : "Minor";
//     console.log(message); // "Adult"

// 21. How do you convert a string to a number ?

//     Use Number() or parseInt().
//     let num = Number("123"); // 123
//     let int = parseInt("123"); // 123

// 22. What is an arrow function?

//     A compact syntax for functions.
//     const add = (a, b) => a + b;

// 23. How do you find the length of a string ?

//     Use.length.

//     console.log("Hello".length); // 5

// 24. What is a promise ?

//     A way to handle asynchronous operations.
//     let promise = new Promise((resolve, reject) => {
//     resolve("Done!");
// });

// Asynchronous operations are a type of operation in computer science that allows a process to continue without waiting for another operation to finish. This means that the host thread can move on to the next statement before the operation is complete.

// 25. What is setTimeout ?

//     It executes a function after a specified time.
//     Use setTimeout.

//     setTimeout(() => console.log("Delayed"), 2000);

// 26. What is setInterval ?

//     It repeatedly executes a function at a specified interval.
//     Use setInterval.

//     setInterval(() => console.log("Repeating"), 1000);

// 27. What is an array method ?

//     It adds an item to an array.

//     let numbers = [1, 2];
//     numbers.push(3); // [1, 2, 3]

// 28. How do you remove elements from an array ?

//     It removes the last item.

//     let numbers = [1, 2, 3];
//     numbers.pop();

// 29. What is Math.random() ?

//     It generates a random number between 0 and 1.
//     Use Math.random.

//     console.log(Math.random()); //0.123456789

// 30. What is Math.floor() ?

//     It rounds a number down to the nearest integer.
//     Use Math.floor.

//     console.log(Math.floor(3.7)); // 3

// 31. How do you check if a number is an integer ?
//     Use Number.isInteger().

//    console.log(Number.isInteger(10)); // true
//    console.log(Number.isInteger(10.5)); // false

// 32. What is the split() method in strings ?

//     It splits a string into an array.
//     Use split().

//     let str = "apple,banana,orange";
//     let fruits = str.split(",");
//     console.log(fruits); // ["apple", "banana", "orange"]

// 33. What is the join() method in arrays ?

//     It joins the elements of an array into a string.
//     Use join().

//     let fruits = ["apple", "banana", "orange"];
//     let result = fruits.join(",");
//     console.log(result); // "apple,banana,orange"

// 34. What is JSON?

//     JSON(JavaScript Object Notation) is a lightweight data interchange format.
//     let person = {
//         name: "John",
//         age: 25
//     };

// 35. What is JSON.parse() ?

//     It converts a JSON string into a JavaScript object.

//     let jsonString = '{"name":"John","age":25}';
//     let person = JSON.parse(jsonString);
//     console.log(person.name); // "John"

// 36. How do you create a class in JavaScript ?

//     Use the class keyword.

//     class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, ${this.name}`);
//     }
// }

// let person1 = new Person("John", 25);
// person1.greet(); // "Hello, John"

// 37. What is this in JavaScript ?

//     this refers to the current object context.
//     let person = {
//     name: "John",
//     greet() {
//         console.log(`Hello, ${this.name}`);
//     }
// };

//  person.greet(); // "Hello, John"

// 38. What are template literals used for?

//     Template literals are used to create strings with embedded expressions.
//     Use backticks and ${ } for expressions.

//     let a = 5;
//     let b = 10;
//     console.log(`The sum of ${a} and ${b} is ${a + b}`); // "The sum of 5 and 10 is 15"

// 39. How do you prevent a form from submitting ?

//     Use event.preventDefault().

//     document.getElementById("myForm").addEventListener("submit", (event) => {
//       event.preventDefault();
//     console.log("Form submission prevented");
// });

// 40. What is a callback function?

//     A function passed into another function to be executed later.

//     function greet(name, callback) {
//     console.log(`Hello, ${name}`);
//     callback();
// }

// greet("Alice", () => {
//     console.log("Callback executed!");
// });

// 41. What is the window object ?

//     window represents the browser window and provides access to global functions.
//     console.log(window.innerWidth); // Window width

// 42. What is an event object in JavaScript ?

//     It contains details about the event that occurred.

//         document.getElementById("btn").addEventListener("click", (event) => {
//             console.log(event.target); // Target element
// });

// 43. What are localStorage and sessionStorage ?

//     Both store data in the browser, but localStorage persists across sessions, while sessionStorage is cleared when the browser is closed.

//         localStorage.setItem("name", "Alice");
//         let name = localStorage.getItem("name");
//         console.log(name); // "Alice"

// 44. What is Array.map() ?

//     It creates a new array by applying a function to each item of the original array.

//     let numbers = [1, 2, 3];
//     let doubled = numbers.map(num => num * 2);
//     console.log(doubled); // [2, 4, 6]

// 45. What is Array.filter() ?

//     It creates a new array with items that pass a test function.

//     let numbers = [1, 2, 3, 4];
//     let evenNumbers = numbers.filter(num => num % 2 === 0);
//     console.log(evenNumbers); // [2, 4]

// 46. What is Array.reduce() ?
//      It reduces an array to a single value by applying a function.

//      let numbers = [1, 2, 3, 4];
//      let sum = numbers.reduce((acc, num) => acc + num, 0);
//      console.log(sum); // 10

// 47. What is NaN in JavaScript ?

//     NaN stands for "Not-a-Number". It is returned when a mathematical operation cannot produce a valid number.

//     console.log("hello" * 2); // NaN

// 48. How do you check if a variable is an array ?

//     Use Array.isArray().

// let fruits = ["apple", "banana"];
// console.log(Array.isArray(fruits)); // true

// let name = "Alice";
// console.log(Array.isArray(name)); // false

// 49. What is event delegation ?
//     It is a technique where you add a single event listener to a parent element to manage events for child elements.

//         document.getElementById("parent").addEventListener("click", (event) => {
//             if (event.target.tagName === "BUTTON") {
//                 console.log("Button clicked!");
//             }
//         });

// 50. What is a try...catch statement ?

//     It allows you to handle errors gracefully.

//     try {
//     let result = 10 / 0;
// }   catch (error) {
//     console.log("Error: " + error.message);
// }  