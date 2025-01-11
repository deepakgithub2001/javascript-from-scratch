function priceCalculate(...num1){
return num1
} 

// console.log(priceCalculate(5, 7, 9)); // rest operator using ...num1, spread and rest operator are same but the use case of these operators are different.

const user = {
    name: "Deepak",
    price: 999 
} 

function handleObject(anyobject){
console.log(`Username is ${anyobject.name} and Price is ${anyobject.price}`); // Username is Deepak and Price is 999

} 

handleObject(user);
handleObject({
    name: "Sam",
    price: 99999
}) 

const array = [100, 200, 300, 400, 500]
function firstValue(get_array){
    return get_array[0]
}
console.log(firstValue(array)); // 100