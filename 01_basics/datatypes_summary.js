//primitve

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

//non primitive(refrence)

// array, objects, functions

// object

let myobj = {
    name: "hitesh",
    age: 22,
}


//stack(primitive) and heap(non primitive)

let myyoutubename = "jatinkumar"

let anothername = myyoutubename
anothername = "jatinmalwal"

console.log(myyoutubename)
console.log(anothername)



let userone = {
    email : "user@google.com",
    upi : "user@ybl"
}

let usertwo = userone
usertwo.email = "loeshjatin2@gmail.com"

console.log(userone.email)
console.log(usertwo.email)


