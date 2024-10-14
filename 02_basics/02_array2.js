const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman","Flash","Batman"];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);

// Spread is used in javascript for spreading the elements of an array in single array.
const arr = [1,2,3,4,5];
const arr1 = [6,7,8,9,10];
const array = [...arr, ...arr1];
console.log(array); // [1,2,3,4,5,6,7,8,9,10] 

console.log(Array.from("Deepak"));
console.log(Array.from({name1: "Deepak"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));