for loop.
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`The Outer Value ${i}`);
    for (let j = 1; j <= 10; j++) {
       console.log(i + "*" + j + "=" + i * j);
       }
    }  

    let superhero = ["flash", "bataman", "superman"]
    for (let index = 0; index < superhero.length; index++) {
        const element = superhero[index];
        console.log(element);
        
    }

    for (let index = 1; index <= 10; index++ ){
        if (index == 5) {
            console.log("detected 5");
            // break;
        }
        console.log(`The value is ${index}`);
        
    }

    for (let index = 1; index <= 10; index++ ){
        if (index == 5) {
            console.log("detected 5");
            continue;
        }
        console.log(`The value is ${index}`);
        
    } 