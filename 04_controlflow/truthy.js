// falsy values => false, 0, -0, BigInt On, "", null, undefined, NaN

//truthy value => "0", 'false', " ", [], {}, function(){}


const useremail = []

if(useremail.length === 0){
    console.log("array is empty")
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}

//nullish coalescing operator (??): null undefined

let val1

val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 = undefined ?? 15
console.log(val1)

val1 = null ?? 10 ?? 20
console.log(val1)

// terniary operator

// condition ? true : false

const ice = 100
ice <= 80 ? console.log("less than 80") : console.log("more than 80")
