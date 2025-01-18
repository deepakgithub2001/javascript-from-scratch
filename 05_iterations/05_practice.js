// Write a loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Write a program to print all even numbers between 1 and 20.
let j = 1;
while (j <= 20) {
    if (j % 2 == 0) {
        console.log(j);
    }
    j++;
}

// Use a for loop to calculate the sum of numbers from 1 to 100.

let sum = 0;
for (let j = 1; j <= 100; j++) {
    sum = sum + j;
}
console.log("The Sum of 1 to 100 is", sum);

// Write a program to print the elements of an array.
fruits = ["Apple", "Banana", "Orange"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Use a do...while loop to print numbers from 10 down to 1.

let i = 10
do {
    console.log(i);
    i--;

} while (i >= 1);


// Write a program to find the factorial of a number using a loop.
let number = 5;
let factorial = 1

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
    console.log(factorial);
}

console.log(factorial);

// Write a program to reverse a given string using a loop.
let str = "generate"
let reversedString = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
}

console.log("The Original String is:", str);
console.log("The Reversed String is:", reversedString);

// Write a program to iterate through an object and print its keys and values.
// Use a nested loop to print a 5x5 grid of stars (*).
// Write a loop to check for a specific value in an array. If the value exists, break the loop and print a message.

// HTML Questions
// What is the purpose of the <!DOCTYPE> declaration?
// What are semantic HTML elements? Give examples.
// What is the difference between id and class attributes?
// What are data attributes in HTML?
// How do you include multimedia elements like audio and video in HTML?
// Explain the difference between <section>, <div>, and <article> tags.
// What is the purpose of the <meta> tag in HTML?
// How can you make a webpage accessible using HTML?
// CSS Questions
// What is the difference between inline, inline-block, and block elements in CSS?
// How is the position property used in CSS? Explain the values: static, relative, absolute, fixed, and sticky.
// What is the difference between em, rem, %, and px in CSS?
// What are CSS pseudo-classes? Give examples.
// What are CSS Flexbox and CSS Grid? How do they differ?
// Explain the concept of media queries in responsive design.
// What is the difference between visibility: hidden and display: none?
// How do you apply styles to an element only when it is hovered or focused?
// JavaScript Questions
// What is the difference between var, let, and const in JavaScript?
// What are JavaScript data types?
// What is the difference between == and === in JavaScript?
// Explain how this works in JavaScript.
// What are arrow functions, and how are they different from regular functions?
// What is the purpose of closures in JavaScript?
// What are the differences between synchronous and asynchronous programming?
// What is the DOM (Document Object Model)? How can you manipulate it using JavaScript?
// What is event delegation, and how does it work?
// How does the JavaScript fetch API work? How is it different from XMLHttpRequest?
// React.js (Optional, if you’re practicing React)
// What is React, and how does it work?
// What is the Virtual DOM, and how is it different from the real DOM?
// What are React hooks? Name a few commonly used hooks.
// What is the difference between functional components and class components in React?
// What are props and state in React, and how are they different?
// Explain how the useEffect hook works.
// What are React fragments? Why are they used?
// How do you pass data between components in React?
// General Frontend Questions
// What is the difference between client-side and server-side rendering?
// What are the advantages of Single Page Applications (SPAs)?
// What is the role of a Content Delivery Network (CDN) in frontend development?
// How do browsers render web pages?
// What is a progressive web app (PWA)?
// How would you optimize a webpage’s performance?
// What are common tools and libraries used in frontend development?