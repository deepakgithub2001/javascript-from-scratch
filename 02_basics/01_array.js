// Summary

// 1. Array is a data structure that can store multiple values.
// 2. Array is written in brackets [].
// 3. Array data type is an object.
// 4. Array can contain different data types. i.e. string,number,boolean,array etc.
// 5. Array is zero based indexing. It starts with zero.
// 6. Once changed its original value will also change beacause it is non primitive (refrence) type.

// Array Methods

// 1. Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4. Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7. Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = arr.slice(2,5);
// console.log(newArr); => [3,4,5]

// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = arr.splice(2,5);
// console.log(newArr); => [3,4,5,6,7]

// Common Array Methods

// concat(): Joins two or more arrays.
// indexOf(): Returns the first index of an element in the array.
// includes(): Checks if an element exists in the array.
// sort(): Sorts the elements of the array.
// Arrays in JavaScript are highly versatile and are an essential tool for managing data efficiently.

// sort.
// let arr = [12,32,53,48,10];
// console.log(arr.sort()); => [10, 12, 32, 48, 53]  