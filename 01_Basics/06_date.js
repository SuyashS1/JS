//Date
/*
let Value=new Date("01-24-2003")

console.log(Value.toDateString())
console.log(new Date().toString())
console.log(new Date().toDateString())
console.log(new Date().toISOString())
console.log(new Date().toJSON())
console.log(new Date().toLocaleDateString())
console.log(new Date().toTimeString())
console.log(new Date().toLocaleString())
console.log(Value.getDay())

const oldDate=new Date("2003-09-14T00:47:15Z")
const date=new Date(2003, 8, 14, 0, 47, 15, 25)
const mili=new Date(10000000000)

console.log(oldDate)
console.log(date)
console.log(mili)
*/

const toGet=new Date()
const toSet=new Date()

console.log(toGet.getFullYear())
console.log(toGet.getMonth())
console.log(toGet.getDate())
console.log(toGet.getHours())
console.log(toGet.getMinutes())
console.log(toGet.getSeconds())
console.log(toGet.getMilliseconds())
console.log(toGet.getDay())

toSet.setFullYear(2003)
toSet.setMonth(8)
toSet.setDate(14)
toSet.setHours(0)
toSet.setMinutes(47)
toSet.setSeconds(15)
toSet.setMilliseconds(25)

console.log(toSet)





//Time





