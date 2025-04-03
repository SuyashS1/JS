let numb=200

let num=new Number(300)
console.log(num)
console.log(numb)

//toString()
//toPrecision()
//toExponential()
//toFixed()
//toLocaleString()

let price=111112345
console.log(price.toString())

let value=456445.54654
console.log(value.toFixed(3))

console.log(price.toLocaleString('en-IN'))

console.log(value.toPrecision(5))

console.log(value.toExponential())

//--------- Maths -----------//

//Math.abs()
//Math.round()
//Math.ceil()
//Math.floor()
//Math.sqrt()
//Math.min()
//Math.max()
//Math.random()  //lies between 0 and 1   
// 
// console.log(Math.floor(Math.random()*10)+1)

//console.log(Math.floor(Math.random()*(max-min+1))+min)

let min=10
let max=20

console.log(Math.abs(-2.657))
console.log(Math.round(2.49))
console.log(Math.ceil(2.11))
console.log(Math.floor(2.91))
console.log(Math.sqrt(3))
console.log(Math.min(2,4,3,5,1))
console.log(Math.max(2,4,5,1,3))
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*(max-min+1))+min)


