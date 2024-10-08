// In JavaScript, a string is a sequence of characters used to represent text. Strings are enclosed in either single quotes ('), double quotes ("), or backticks (`) for template literals.

const name = "Deepak" // Here name is a "String" datatype and "Deepak" is a string.
const email = 'deepak@gmail.com' // Here email is a "String" datatype and "email" is a string. 
const hometown = `Madhubani` // Here hometown is a "String" datatype and "hometown" is a string. 

console.log(name,email,hometown);

//String Interpolation
//String interpolation in JavaScript allows embedding expressions inside a string. This is done using template literals, which are enclosed by backticks (`) instead of single or double quotes.

//let brand = "HP";
//let generation = "i3";
//console.log(`My PC brand is ${brand} and it is come up with ${generation} generation.`); =>My PC brand is HP and it is come up with i3 generation.

// JavaScript provides several built-in string methods that allow you to manipulate and work with strings. These methods make it easier to handle text, search for substrings, extract portions of a string, and modify string contents.
// Here are some of the most commonly used string methods in JavaScript:

// .length
// let str = "something";
// console.log(str.length); //=>9

// .toUpperCase()
// let str = "something";
// console.log(str.toUpperCase()); => SOMETHING

//.toLowerCase()
// let str = "something";
// console.log(str.toLowerCase()); => something

// .charAt(index)()
// let str = "something";
// console.log(str.charAt(1)); =>o

//.indexOf(substring)
// let str = "something";
// console.log(str.indexOf("s")); =>0

//.lastIndexOf(substring)
// let str = "something";
// console.log(str.lastIndexOf("t")); =>4
 
//.slice(start, end)
// let str = "something";
// console.log(str.slice(0, 5)); =>somet

//.substring(start, end)
// let str = "something";
// console.log(str.substring(2, 7)); =>methi

//.substr(start, length)
// let str = "something";
// console.log(str.substr(1, 5)); =>ometh

//.replace(searchValue, newValue)
// let str = "something";
// console.log(str.replace("some", "no")); =>nothing

//.split(separator)
// let str = "Try, Something, New";
// console.log(str.split(", ")); =>["Try", "Something", "New"]

//.trim()
// let str = "   something   ";
// console.log(str.trim()); =>something

//.includes(substring)
// let str = "something";
// console.log(str.includes("thing")); =>true

//.startsWith(substring)
// let str = "something";
// console.log(str.startsWith("som")); =>true
 
//.endsWith(substring)
// let str = "something";
// console.log(str.endsWith("ing")); =>true

//.concat()
let str1 = "Try";
let str2 = "Something";
let str3 = "New";
// console.log(str1.concat( " ", str2, " ", str3)); =>Try Something New

//.repeat(count)
// let str = "Haa!";
// console.log(str.repeat(3)); //=>"Haa!Haa!Haa!"

//.padStart(targetLength, padString)
// let str = "5";
// console.log(str.padStart(3, "0")); //  =>"005"

//.padEnd(targetLength, padString)
// let str = "5"; 
// console.log(str.padEnd(3, "0")); //  =>"500"