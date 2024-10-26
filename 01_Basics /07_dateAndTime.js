// date beginning of - january 1, 1970, UTC

// const myDate = new Date() // typeod date = object
// console.log(myDate)

// console.log(myDate.toDateString()) // Sat Oct 26 2024
// console.log(myDate.toISOString()) // 2024-10-26T15:47:15.972Z
// console.log(myDate.toJSON()) // 2024-10-26T15:47:46.674Z
// console.log(myDate.toLocaleDateString()) // 10/26/2024
// console.log(myDate.toLocaleString()) // 10/26/2024, 3:49:49 PM
// console.log(myDate.toLocaleTimeString()) // 3:49:10 PM
// console.log(myDate.toString()) // Sat Oct 26 2024 15:50:17 GMT+0000 (Coordinated Universal Time) 
// console.log(myDate.toTimeString()) // 15:50:53 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()) // Sat, 26 Oct 2024 15:51:18 GMT
// console.log(myDate.getTimezoneOffset()) // 0

// const mayCreatedDate = new Date(2004, 1, 25) // month staart form 0
// console.log(mayCreatedDate.toDateString()) // Thu Feb 02 2006

// const mayCreatedDate = new Date(2004, 1, 25, 8, 2, 6)
const mayCreatedDate = new Date("2024-01-25")
// console.log(mayCreatedDate.toLocaleString())

const myTimeStamp = Date.now() // millisecond value - 1729958455559
// console.log(myTimeStamp)
// console.log(Math.floor(myTimeStamp / 1000)) // ms - s

const date = new Date();
// console.log(date.getDate()) 
// console.log(date.getDay());
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMilliseconds())
// console.log(date.getMinutes())
// console.log(date.getMonth())
// console.log(date.getSeconds())
// console.log(date.getTime())

date.toLocaleString("default", {
    calendar: AbortSignal
})