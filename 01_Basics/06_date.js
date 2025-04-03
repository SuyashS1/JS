//Date

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

//Time

let myTime=Date.now()
console.log(myTime)
console.log(Value.getTime()) 