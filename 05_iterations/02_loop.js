// while and do while loop.
// while loop is defined as the loop that runs until the condition is true.
// do while loop is defined as the loop that runs until the condition is true.

let index = 1;

while (index <= 10) {
    console.log(`The Value is ${index}`);
    index = index + 1;
}; //The Value is 1..upto 10

let superman = ["flash", "batman", "superman"]
let array = 0;
while (array < superman.length) {
    console.log(`The value is ${superman[array]}`);
    array = array + 1;

}

//The value is flash
//The value is batman
//The value is superman

let score = 1;
do {
    console.log(`The score is ${score} `);
    score = score + 1;
} while (score <= 10)  //The score is 1..upto 10