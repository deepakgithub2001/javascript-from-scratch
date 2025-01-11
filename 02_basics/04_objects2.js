// Objects Part-2
// Contructer Syntax

// Constructor Syntax is another way to create objects in JavaScript. It is defined by using the new keyword followed by the Object() constructor.

// const tinderUser = new Object(); with the constructor
const tinderUser = {}
tinderUser.name = "Sam";
tinderUser.id = "sam@tinder999";
tinderUser.age = 23;
console.log(tinderUser); // { name: 'Sam', id: 'sam@tinder999', age: 23 }

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        first_name: "Deepak",
        last_name: "Kumar"
    }
}

console.log(regularUser);
console.log(regularUser.email); //user@gmail.com
console.log(regularUser.fullname); // { first_name: 'Deepak', last_name: 'Kumar' }
console.log(regularUser.fullname.first_name); // Deepak
console.log(regularUser.fullname.last_name); // Kumar

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }
const obj3 = { 7: "g", 8: "h", 9: "i" }

// const obj = Object.assign({},obj1,obj2,obj3);
const obj = { ...obj1, ...obj2, ...obj3 }
console.log(obj); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i' }

const user1 = [
    {
        id: 1,
        email: "deepak@gmail.com"
    },
    {
        id: 2,
        email: "saurav@gmail.com"
    },
    {
        id: 3,
        email: "amrendra@gmail.com"
    }
]


console.log(tinderUser); // { name: 'Sam', id: 'sam@tinder999', age: 23 }
console.log(user1[0].email); // deepak@gmail.com
console.log(Object.keys(tinderUser)); // [ 'name', 'id', 'age' ]
console.log(Object.values(tinderUser)); // [ 'Sam', 'sam@tinder999', 23 ]
console.log(Object.entries(tinderUser)); // [ [ 'name', 'Sam' ], [ 'id', 'sam@tinder999' ], [ 'age', 23 ] ] 