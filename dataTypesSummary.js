// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.
// let data = any(number, string, bolean...)

// Primitive Data Types: (call by value)
// number, string, bolean, null, undefined, symbol, BigInt

let num = 10
let pi = 3.14
let name = "arijit"
let isUser = true
let outsideTemp = null
let userEmail // undefined

const id1 = Symbol("112")
const id2 = Symbol("112")
console.log(id1 === id2) // false because symnol is unique 

const bigNumber = 1122334455668899879988n
console.log(bigNumber)

// Reference Type: (Non primitiv)
// Array, Objects, Functions

const arr = [10, 20, 30] // array object

const obj = { // object
    name : "arijt",
    age : 20,
}

const func1 = function() { // function object
    console.log("Hii iam a function")
}
const func2 = () => {
    console.log("Hii iam a function")
}