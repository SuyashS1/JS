//Arrays

const myArr=[2,4,6,8,10,12,14]

const yourArr=new Array(1,3,5,7,9,11,13)

console.log(typeof myArr)
console.log(typeof(yourArr))

//Array properties

console.log(myArr.length)
console.log(yourArr[5])

//Array methods

//includes
//indexOf
//join
//push
//pop
//unshift
//shift
//slice
//splice
//toString
//concat

console.log(myArr.includes(5))
console.log(yourArr.includes(5))

console.log(myArr.indexOf(8))
console.log(yourArr.indexOf(5))

const newArr=myArr.join()
console.log(newArr)
console.log(typeof newArr)

console.log(myArr.push(16))
console.log(myArr)
console.log(yourArr.push(15))
console.log(yourArr)

console.log(myArr.pop())
console.log(myArr)
console.log(yourArr.pop())
console.log(yourArr)

console.log(myArr.unshift(-2))
console.log(myArr)
console.log(yourArr.unshift(-1))
console.log(yourArr)

console.log(myArr.shift())
console.log(myArr)
console.log(yourArr.shift())
console.log(yourArr)

console.log(myArr.slice(1, 5))
console.log(myArr)
console.log(yourArr.slice(2, 4))
console.log(yourArr)

console.log(myArr.splice(4,7,18,))
console.log(myArr)
console.log(yourArr.splice(4,7,17))
console.log(yourArr)

console.log(myArr.toString())
console.log(myArr)
console.log(yourArr.toString())
console.log(yourArr)

console.log(myArr.concat(20,22))
console.log(myArr)
console.log(yourArr.concat(19,21))
console.log(yourArr)
