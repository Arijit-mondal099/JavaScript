// Declare String
const str1 = "string1"
const str2 = 'string2'
const str3 = new String(`string3`) 

const fullName = "arijit mondal"
const favColor = "white"

// old way
// console.log(fullName + " is a good man and has favourite color " + favColor)

// new way: Template literals
console.log(`${fullName} is a good man and has favourite color ${favColor}`)