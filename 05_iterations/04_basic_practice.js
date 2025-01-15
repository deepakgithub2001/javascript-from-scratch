// for loop practice
let sum = 0
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    console.log(i)
}

console.log(`This is for loop sum ${sum}`);

// while loop practice
let i = 1
let sum1 = 0
while (i <= 10) {
    console.log(i)
    sum1 = sum1 + i;
    i = i + 1;
}
console.log(`This is while loop sum ${sum1}`);

// do while loop practice
let index = 1
let sum2 = 0
do {
    console.log(index);
    sum2 = sum2 + 1;
    index = index + 1;
} while (index <= 10);
console.log(`This is while loop sum ${sum1}`)

let n = 2
for (let a = 1; a <= 10; a++) {
    let table = n * a
    console.log(table);
}

let a = 1;
while (a <= 10) {
    let table = n * a;
    a = a + 1;
    console.log(table);
}

let b = 1;
do {
    let table = n * b;
    console.log(table);
    b = b + 1;
} while (b <= 10);