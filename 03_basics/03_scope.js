var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);


let a = 100;
if (true) {
    let a = 10;
    let b = 20;
    const c = 30;
} 

console.log(a);
console.log(b);
console.log(c);

function one() {
    const username = "Deepak"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    console.log(website);
   two()
} 

one() 


if (true) {
const username ="Deepak"
if (username === "Deepak"){
    const website =" YouTube"
    console.log(username + website);
}
    console.log(website);
    
} 

console.log(username);

function addOne(num){
    return num + 1;
}

addOne(5)

const addTwo = function(num){
return num + 2;
} 

addTwo(5);