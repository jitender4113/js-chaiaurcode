const name = "hitesh"
const repocount = 50

console.log(name + repocount + "value") // this is outdated
console.log(`my name is ${name} and my repocount is ${repocount}`)

const gamename = new String('hitesh-hc')

console.log(gamename[2])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(name)
console.log(gamename.charAt(2))
console.log(gamename.indexOf('t'))

const newstring = gamename.substring(0,4);
console.log(newstring)

const anotherstring = gamename.slice(-8,4);
console.log(anotherstring)

const newstringone = "   hitesh"
console.log(newstringone)
console.log(newstringone.trim())

console.log(gamename.split('-'))




