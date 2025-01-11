// Objects in JavaScript defined as the unordered collection of properties where each property consists of a key and a value.

const user = {
    key: "value",
    property_name: "property_value",
    data: "value"
};

//There are two types of declaring the objects in JavaScript.

// 1. Object Literls Syntax
// 2. Constructor Syntax

// 1. Object Literls Syntax

//    Object Literls Syntax is the most common way to create objects in JavaScript. It is defined by curly braces {} and properties are defined as key-value pairs.

const mySymbol = Symbol("key");
const user1 = {
    name: "Deepak",
    age: 23,
    qualification: "MCA",
    university: "GU",
    [mySymbol]: "mySymbol"
};

user1.age = 25;

console.log(user1.name); // Deepak
console.log(user1.age); // 25
console.log(user1.qualification); // MCA
console.log(user1.university); // GU
console.log(user1[mySymbol]);   // mySymbol

user1.greeting = function () {
    console.log("Hello JS user."); 

}
user1.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}.`);

}

console.log(user1.greeting()); // Hello JS user.
console.log(user1.greetingTwo()); // Hello JS user, Deepak.


// Object.freeze(user1); //freezing the objetcs, means you can't change the value after implement the freeze method. 