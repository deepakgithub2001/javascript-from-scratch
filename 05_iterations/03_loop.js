// The High-Order Arrays loops

//  for of loop.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const num of array) {
    console.log(num);

}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`each character is greet ${greet}`);

}
// Map

const map = new Map
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

console.log(map);

// ForIn loop.
const myObject = {
    js: "javascript",
    rb: "ruby",
    py: "python",
    java: "java",
    cpp: "c++"
}

for (const key in myObject) {
    console.log(`${key} is shortcut of ${myObject[key]}`);
} 

// ForOf loop.

const myArray = ["JavaScript","Python","Ruby","Java","C++"]

for (const element of myArray) {
    console.log(`The programmimg languages are:- ${element} `);  
}

// ForEach loop.

const coding = ["C", "C++", "JavaScript", "Java", "Python", "Ruby."]

coding.forEach(element => {
    console.log(element);

});

// Another way of doing this.

coding.forEach((element) => {
    console.log(element);

});

function printMe(element) {
    console.log(element);

}
coding.forEach(printMe);

myProgrammingLanguage = [
    {
        languageName: "C",
        languageFileName: ".c"
    },
    {
        languageName: "C++",
        languageFileName: ".cpp"
    },
    {
        languageName: "Java",
        languageFileName: ".java"
    }
]
myProgrammingLanguage.forEach(element => {
    console.log(element.languageName);
    console.log(element.languageFileName);

});

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = num.filter((number) => number > 5)
console.log(newNum);

filter

const books = [
    {
        name: "Book1",
        writer: "X",
        genre: "Fiction",
        publish: "1990",
        edition: "2001",
    },
    {
        name: "Book2",
        writer: "Y",
        genre: "Comics",
        publish: "1991",
        edition: "2002",
    },
    {
        name: "Book3",
        writer: "Z",
        genre: "Relations",
        publish: "1992",
        edition: "2003",
    }
]

const userBooks = books.filter((all_book) => all_book.genre === "Comics" )
console.log(userBooks);

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = myNumber.map((num) => num + 10);

console.log(myNumber);

reduce

const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval

}, 0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0) // another way of diing this. 

console.log(myTotal);

const myShoppingCart = [
    {
        item: "JS.",
        price: 999

    },
    {
        item: "Python",
        price: 1299

    },
    {
        item: "Android",
        price: 9999

    },
]
const myBills = myShoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(myBills);
