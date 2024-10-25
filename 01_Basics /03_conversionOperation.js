// any to number:--------------------------------------------------------

// const score1 = "33"
// console.log(typeof score1)

// const valInNumber1 = Number(score1)  // convert into number
// console.log(typeof valInNumber1) // number
// console.log(valInNumber1) // 33

// const score2 = "33arijit"
// console.log(typeof score2)

// const valInNumber2 = Number(score2) // js also convert
// console.log(typeof valInNumber2) // number
// console.log(valInNumber2) // NaN (not a number)

// const score3 = null
// console.log(typeof score3)

// const valInNumber3 = Number(score3) // js also convert
// console.log(typeof valInNumber3) // number
// console.log(valInNumber3) // 0

// const score4 = undefined
// console.log(typeof score4)

// const valInNumber4 = Number(score4) // js also convert
// console.log(typeof valInNumber4) // number
// console.log(valInNumber4) // NaN

// const score5 = true
// console.log(typeof score5)

// const valInNumber5 = Number(score5) // js also convert
// console.log(typeof valInNumber5) // number
// console.log(valInNumber5) // 1 / false - 0

// "33" => 33
// "33abc" => NaN
// true -> 1, false - 0

// any to bolean:--------------------------------------------------------

// const isLoggedin = 1
// console.log(typeof isLoggedin) // number

// const boolIsLoggedin = Boolean(isLoggedin);  // onvert into bolean
// console.log(typeof boolIsLoggedin) // bolean
// console.log(boolIsLoggedin) // true

// const isLoggedin = ""
// console.log(typeof isLoggedin) // string

// const boolIsLoggedin = Boolean(isLoggedin);  // onvert into bolean
// console.log(typeof boolIsLoggedin) // bolean
// console.log(boolIsLoggedin) // false

// const isLoggedin = "arijit"
// console.log(typeof isLoggedin) // string

// const boolIsLoggedin = Boolean(isLoggedin);  // onvert into bolean
// console.log(typeof boolIsLoggedin) // bolean
// console.log(boolIsLoggedin) // true

// any to string:--------------------------------------------------------

// const randValue = 8831010
// console.log(typeof randValue) // number

// const str = String(randValue) // convert
// console.log(typeof str) // string
// console.log(str) // 8831010

// const randValue = null
// console.log(typeof randValue) // object

// const str = String(randValue) // convert
// console.log(typeof str) // string
// console.log(str) // null

const randValue = undefined
console.log(typeof randValue) // object

const str = String(randValue) // convert
console.log(typeof str) // string
console.log(str) // nun