// // Write a loop to print numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Write a program to print all even numbers between 1 and 20.
// let j = 1;
// while (j <= 20) {
//     if (j % 2 == 0) {
//         console.log(j);
//     }
//     j++;
// }

// // Use a for loop to calculate the sum of numbers from 1 to 100.

// let sum = 0;
// for (let j = 1; j <= 100; j++) {
//     sum = sum + j;
// }
// console.log("The Sum of 1 to 100 is", sum);

// // Write a program to print the elements of an array.
// fruits = ["Apple", "Banana", "Orange"]
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Use a do...while loop to print numbers from 10 down to 1.

// let i = 10
// do {
//     console.log(i);
//     i--;

// } while (i >= 1);


// // Write a program to find the factorial of a number using a loop.
// let number = 5;
// let factorial = 1

// for (let i = 1; i <= number; i++) {
//     factorial = factorial * i;
//     console.log(factorial);
// }

// console.log(factorial);

// // Write a program to reverse a given string using a loop.
// let str = "generate"
// let reversedString = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedString = reversedString + str[i];
// }

// console.log("The Original String is:", str);
// console.log("The Reversed String is:", reversedString);

// Write a program to iterate through an object and print its keys and values.

// let intro = {
//     name: "Deepak",
//     age: 23,
//     single: true
// }

// for (const key in intro) {
//     console.log(key);
// }
// for (const key in intro) {
//     console.log(`${key}: ${intro[key]}`);
// }

// Print a Square Pattern

// const n = 5;
// for (let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j < n; j++) {
//         row += "*"
//     }
//     console.log(row);

// }

// Print a Right Trianle Pattern

// let count = 1;
// const n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = ""
//     for (let j = 1; j <= i; j++) {
//         row += count++;
//     }
//     console.log(row);
// }

// Print a Right Triangle Pattern in reverse form.

// const n = 5;
// for (let i = 0; i < n; i++) {
//     let gap = ""
//     let star = ""
//     for (let j = 0; j < n - i; j++) {
//         gap += " "
//     }
//     for (let k = 0; k <= i; k++) {
//         star += "*"
//     }
//     console.log(gap + star);
// }

// Print a 5X5 grid star pattern

// const n = 5;
// for (let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j < n; j++) {
//         row += "*"
//     }
//     console.log(row);
// }

// Print a Right Triangle Pattern

// const n = 5;
// for (let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j <= i; j++) {
//         row += "*"
//     }
//     console.log(row);
// }

// Print a simple Triangle Pattern

// const n = 5;
// for (let i = 0; i < n; i++) {
//     let gap = ""
//     let star = ""
//     for (let j = 0; j < n - i; j++) {
//         gap += " "
//     }
//     for (let k = 0; k <= i; k++) {
//         star += "*"
//     }
//     for (let l = 0; l < i; l++) {
//         star += "*"
//     }
//     console.log(gap + star);
// } 