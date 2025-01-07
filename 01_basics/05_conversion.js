//Checking the type of datatypes.

let g = 9.8;
console.log(typeof(g)); //number

let str = "Deepak";
console.log(typeof(str)); //string

let isTrue = true;
console.log(typeof(isTrue)); //boolean

let isFalse = false;
console.log(typeof(isFalse)); //boolean

let javascript;
console.log(typeof(javascript)); //undefined

let number = 999;
let string = String(number); // "999"
console.log(string);
console.log(typeof(string)); //string

let isBoolean = 1;
let isBooleanValue = Boolean(isBoolean)
console.log(isBooleanValue); //true

// "33" => 33
// "33abc" => Nan 
// true => 1; false => 0;

let a = 3;
const b = ++a;
console.log(`a:${a} b:${b}`); 

// a => 4, b => 4

let x = 5;
const y = x++;
console.log(`x:${x} y:${y}`);

// x => 6, y => 5