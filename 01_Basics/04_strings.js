// String --> Sequence/Collection of characters.

let myName="Suyash"
let lastName="Sikchi"

console.log(`My name is ${myName} and my last name is ${lastName}, so you can say my full name is ${myName+lastName}`); 

const firstName = new String('Suyash')
console.log(firstName)

console.log(myName.length)
console.log(myName[4])

console.log('My name is',myName, 'and my last name is ',lastName,'so you can say my full name is ',myName+lastName) 

// \n = new line
// \t = tab space

//Methods 
/*
1)toUpperCase     
2)toLowerCase
3)trim 
4)concat 
5)slice 
6)indexof
7)charAt 
8)replace
9)substring
10)include
*/

let str="    Suyash Sikchi "
let str2="53"

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
console.log(str.includes('s'))
console.log(str.slice(-10,10))
console.log(str.replaceAll('j','i'))
console.log(str.charAt(12))
console.log(str.concat(str2))
console.log(str.indexOf('i'))
console.log(str.substring(2,10))