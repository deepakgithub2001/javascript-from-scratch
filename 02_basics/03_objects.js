// Objects in JavaSvript defined as the unordered collection of properties where each property consists of a key and a value.

const user = {
    key: "value",
    property_name: "property_value",
    data: "value"
};

//There are two types of declaring the objects in JavaScript.

// 1. Object Literls Syntax
const mySymbol = Symbol("key");
const user1 = {
    name: "Deepak",
    age: 23,
    qualification: "MCA",
    university: "GU",
    [mySymbol]: "mySymbol"
};

user1.age = 25;

console.log(user1.name);
console.log(user1.age);
console.log(user1.qualification);
console.log(user1.university);
console.log(user1[mySymbol]);

user1.greeting = function() {
    console.log("Hello JS user.");
    
}
user1.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}.`);
    
}

console.log(user1.greeting())
console.log(user1.greetingTwo())



// Object.freeze(user1); //freezing the objetcs, means you can't change the value after the freeze method. 