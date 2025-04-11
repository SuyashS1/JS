//Arrays

const avengers=["Ironman","Captain","Thor","Hulk","Hawkeye","BlackWidow"]

const newAvengers=["Spiderman","Dr.Strange","Cap.Marvel"]

//avengers.push(newAvengers)
//console.log(avengers);
//console.log(avengers[6][2])

//concat
const marvel=avengers.concat(newAvengers)
console.log(marvel) 

//spread
const infinity=[...avengers, ...newAvengers]
console.log(infinity)

//flat
const more_marvel=["groot","scarlet",["bucky"],["gamora",["blackpanther",["valkyrie",["rocket"]]]] ]
console.log(more_marvel.flat(4))

//Array.isArray
//Array.from
//Array.of

console.log(Array.isArray("more_marvel"))
console.log(Array.from("Blackpanther"))
let one="Iron man"
let two="Thor"
let three="Captain America"
let four="Hulk"
let five="Hawkeye"
let six="Black Widow"
let seven="Spiderman"
let eight="Dr.Strange"
let nine="Groot"
let ten="Bucky"
console.log(Array.of(one,three,four,two,six,seven,five,nine,eight,ten))

