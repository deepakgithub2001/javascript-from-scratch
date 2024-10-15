// Objects Part-2
// const tinderUser = new Object(); with the constructor
const tinderUser = {}
tinderUser.name = "Sam";
tinderUser.id = "sam@tinder999";
tinderUser.age = 23;
console.log(tinderUser); 

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        first_name: "Deepak",
        last_name: "Kumar"  
    }
}

console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.first_name);
console.log(regularUser.fullname.last_name);

const obj1 = {1: "a", 2: "b", 3: "c" }
const obj2 = {4: "d", 5: "e", 6: "f" }
const obj3 = {7: "g", 8: "h", 9: "i" }

// const obj = Object.assign({},obj1,obj2,obj3);
const obj = {...obj1,...obj2,...obj3}
console.log(obj);

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

console.log(tinderUser);
console.log(user1[0].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));