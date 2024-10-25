// console.log(10 > 10) // false
// console.log(10 >= 10) // true

// console.log(10 < 10) // false
// console.log(10 <= 10) // true

// console.log(10 == 10) // true
// console.log(10 != 10) // false

// Problems (have to avoiding):

// console.log(10 == "10") // true
// console.log("02" > 1) // true

// console.log(null > 0) // false
// console.log(null < 0) // false
// console.log(null <= 0) // true (convert to 0)
// console.log(null >= 0) // true (convert to 0)
// console.log(null == 0) // false

// Solution:

// === check data type also and value
console.log("2" == 2) // true
console.log("2" === 2) // false