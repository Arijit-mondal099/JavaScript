// The document at -> https://tc39.es/ecma262/ (and also mdn, w3 school)

"use strict"; // treat all JS code as newer version.

// alert("Hello World") // we are using node js, not browser

console.log(3 + 3); console.log("Arijit") // code readability should be high

const fullName = "arijit mondal" // string 
const age = 20 // number
const isMale = true // boolean 

// Primitive Data Types:

// number => 2 ^ 53 (range)
// bigint (for store to long value)
// string => "", '', ``
// boolean => true / false
// null => standalone value (represent empty value)
// undefined => not assigned containers
// symbol => unique

// Objects:

console.log(typeof undefined) // undefined
console.log(typeof null) // object

console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
