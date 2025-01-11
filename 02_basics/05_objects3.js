// Objects Part-3
const user = {
    name: "Deepak",
    age: 23,
    qualification: "MCA"
}

console.log(user); // { name: 'Deepak', age: 23, qualification: 'MCA' }

// De-Structuring the objects.
const { qualification: education } = user //
console.log(education); // MCA   

// Basic of API

// In earlier time the values are come in XML form.
// But in Modern time the values are come in JSON form.
// The key and value both the Strings in JSON.

//Example of JSON.
//  {
//       "name": "Deepak",
//       "age": 23,
//       "qualification": "MCA"
// };  