// The High-Order Arrays loops

// The for...of loop iterates over iterable objects like arrays, strings, maps, sets, and more.
// It gives the values of the elements in the collection.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const num of array) {
    console.log(num);

}; // 1 2 3 4 5 6 7 8 9 10

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`each character is greet ${greet}`);

}; // each character is greet H e l l o W o r l d !

// ForIn loop.
// The for...in loop iterates over the enumerable properties (keys) of an object.
// Often used for objects but can also iterate over array indices (not recommended).

const myObject = {
    js: "javascript",
    rb: "ruby",
    py: "python",
    java: "java",
    cpp: "c++"
}

for (const key in myObject) {
    console.log(`${key} is shortcut of ${myObject[key]}`);
};

// js is shortcut of javascript
// rb is shortcut of ruby
// py is shortcut of python
// java is shortcut of java
// cpp is shortcut of c++

// For Of loop.
// For Of loop is defined as the loop that runs for the arrays.

const myArray = ["JavaScript", "Python", "Ruby", "Java", "C++"]

for (const element of myArray) {
    console.log(`The programmimg languages are:- ${element} `);
};

// The programmimg languages are:- JavaScript 
// The programmimg languages are:- Python 
// The programmimg languages are:- Ruby 
// The programmimg languages are:- Java 
// The programmimg languages are:- C++

// ForEach loop.
// The forEach method executes a provided function once for each array element.
// Does not return a new array, just iterates through the existing array.

const coding = ["C", "C++", "JavaScript", "Java", "Python", "Ruby."]

coding.forEach(element => {
    console.log(element);
}); // C C++ JavaScript Java Python Ruby.


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
    console.log(element.languageName); // C C++ Java
    console.log(element.languageFileName); // .c .cpp .java

});

// C C++ Java
// .c .cpp .java

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Map
// The map method creates a new array by applying a function to each element of the original array.

// filter
// The filter method creates a new array containing elements that pass a provided test function.

const newNum = num.filter((number) => number > 5)
console.log(newNum); // [ 6, 7, 8, 9, 10 ]

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

const userBooks = books.filter((all_book) => all_book.genre === "Comics")
console.log(userBooks);

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = myNumber.map((num) => num + 10);

console.log(myNumber); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

reduce

const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`); // acc: 0 and currval: 1
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
console.log(myBills); // 12297