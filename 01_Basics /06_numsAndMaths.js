const score = 200 // automatically detected it a number
const blance = new Number (400) // specific number hai ye
// console.log(score)
// console.log(blance)

// console.log(blance.toString())
// console.log(blance.toFixed(2))

let number = 11.8977
// console.log(number.toPrecision(3)) // 11.9
// console.log(number.toPrecision(2)) // 12
number = 111
// console.log(number.toPrecision(4)) // 111.0

number = 10000000
// console.log(number.toLocaleString("en-IN")) // default usa

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// ------------------------ MATHS ------------------------

// console.log(Math.abs(-11)) // return absolute value
// console.log(Math.round(11.4)) // 11
// console.log(Math.round(11.6)) // 12
// console.log(Math.ceil(11.1)) // 12 always heigher value
// console.log(Math.floor(11.9)) // 11 always lower value

// console.log(Math.max(10, 20, 50, 10))
// console.log(Math.min(90, 20, 50, 70))
// console.log(Math.pow(2, 6))

console.log(Math.random()) // 0 - 1
console.log(Math.floor((Math.random() * 10) + 1)) // 1 - 10

const min = 10
const max = 20

// bast formula for random number: // 20 - 10 + 1 = 11 + 10 = 0.999 * 21 = 20
const randNumber = Math.floor( (Math.random() * (max - min + 1)) + min ); 
console.log(randNumber)