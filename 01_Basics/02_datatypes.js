"use strict" //use all JS code as newer version

//alert(3+3) // We are using nodejs and not the browser

//Primitive Data-types

//Number
//String
//Boolean
//BigInt
//Null ==> standalone value
//Undefined
//Symbol

const id=43
let myName="Suyash"
let isPass=true
let registration_no=9007199254740991n
let attendance=null;
let year
const division=Symbol()

console.table([{id,myName,isPass,registration_no,attendance,year,division}])
console.log(typeof id)
console.log(typeof myName)
console.log(typeof isPass)
console.log(typeof registration_no)
console.log(typeof attendance)
console.log(typeof year)
console.log(typeof division)



//Non primitive (reference) data-types

//Array
//Object
//Function

//conversion of string to number is bit confusing as "abc" connot be converted to number so it gives as NaN(Not a Number) in output

// Convert to number 
//string ==> NaN
//null ==> 0
//undefined ==> NaN
//Boolean ==> 1(true) , 0(false)

// Convert to string
//Every conversion is possible



