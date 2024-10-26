// Declare String:
// const str1 = "string1"
// const str2 = 'string2'
// const str3 = new String(`string3`) 

// const fullName = "arijit mondal"
// const favColor = "white"

// old way
// console.log(fullName + " is a good man and has favourite color " + favColor)

// new way: Template literals
// console.log(`${fullName} is a good man and has favourite color ${favColor}`)

// Important Note:
// It's important to know that in JavaScript, strings are immutable. This means that once a string is created, its contents cannot be changed. Instead, you must create a new string representing the modified version when you want to modify a string.

// Prototype and functions(methods) of strings:

// console.log(str1.concat(" ", str2, " hii"));
// console.log(fullName.length) // return length of str
// console.log(fullName.toUpperCase()) // return uppercase str
// console.log(fullName.toLowerCase()) // return lowercase str
// console.log(fullName.charAt(2)) // value at index
// console.log(fullName[0]) // same as charAt
// console.log(fullName.indexOf("j")) // index of j

// const str = "arijit mondal"

// const newStr = str.substring(0, 6) // last value not include
// console.log(newStr)
// const newStr = str.slice(0, 5) // last value not include
// const newStr = str.slice(-10, -5) // last value not include (reverse)
// console.log(newStr)
// const str = "   arijit   "
// console.log(str.trim()) // remove space starting and ending
// console.log(str.trimEnd()) // remove end spaceing
// console.log(str.trimStart()) // remove start spaceing
// const url = "https//arijit.com"
// console.log(url.replace("arijit", "babai")) // replase one occurrence
// console.log(url.replaceAll("t", "X")) // replase all occurrence
// console.log(url.includes("arijit")) // given string may be found within this string, returning true or false as appropriate.

const str = "arijit babai ananta shampa"
// const words = str.split(" ") // convert into array based on white sapce
// console.log(words)
// console.log(str.startsWith("arijit")) // this string begins with the characters of a specified string
// console.log(str.endsWith("shamp")) // this string enging with the characters of a specified string
// console.log(str.at(4)) // This method allows for positive and negative integers. 
// console.log(str.at(-4)) // reverse
console.log(str.lastIndexOf("shampa")) // return last index of that word