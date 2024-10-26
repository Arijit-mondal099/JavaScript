// How to declare array in JS: JavaScript arrays are resizable and can contain a mix of different data types.
const myNum = [10, 20, 30, 40]
const myArray = ["arijit", 20, true, {name:"babai", age:25,}, [20, 30, 40]] // 0 - base indexing
const myHeros = new Array("Bat man", "Super man", "Iron man")

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// Shallow copy: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// Deep copy: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// console.log(myHeros[0], myHeros[1])
// console.log(myHeros)

// Arrays Methods:

const array = [10, 20, 30];

// console.log(array.length)

array.push(40) // add into end
array.pop() // delete into end
array.unshift(99) // add into font
array.shift() // delete into font

// console.log(array.includes(20)) // return a bolean
// console.log(array.indexOf(20)) // return index of - 20

const newArr = array.join() // return string of array
// console.log(typeof newArr)

// slice() and splice()
const data = [10, 20, 30, 40, 50]
const newData1 = data.slice(1, 4) // last not include ( returns a shallow copy )

console.log("A ", data)
console.log("Slice ", newData1)

const newData2 = data.splice(1, 4) // 

console.log("Splice ", newData2)