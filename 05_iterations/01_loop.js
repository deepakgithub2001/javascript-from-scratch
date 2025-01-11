// for loop.
// for loop is defined as the loop that runs for a fixed number of times.
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element); // 0 1 2 3 4 5 6 7 8 9 10
}

for (let i = 1; i <= 10; i++) {
    console.log(`The Outer Value is ${i}`); 
    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i * j); 
    }
}

let superhero = ["flash", "batman", "superman"]
for (let index = 0; index < superhero.length; index++) {
    const element = superhero[index];
    console.log(element); // flash batman superman

}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("detected 5");
        break;
    }
    console.log(`The value is ${index}`); // 1 2 3 4 detected 5 

}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`The value is ${index}`); // 1 2 3 4 detected 5 6 7 8 9 10

} 