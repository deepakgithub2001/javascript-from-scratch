const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // ["Thor", "Ironman", "Spiderman", ["Superman","Flash","Batman"]]

// Spread is used in javascript for spreading the elements of an array in single array.
const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 8, 9, 10];
const array = [...arr, ...arr1];
console.log(array); // [1,2,3,4,5,6,7,8,9,10] 

// "Array.from" is used to convert string to array.
console.log(Array.from("Deepak")); // ["D", "e", "e", "p", "a", "k"]
console.log(Array.from({ name1: "Deepak" })); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] 