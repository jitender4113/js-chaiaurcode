// function add(num1, num2){
//     console.log(num1 + num2)
// }
// const result = add(3,4)
// console.log("result: ",result)

function add(num1, num2){
    return (num1 + num2)
}
const result = add(3,4)
console.log("result: ",result)

function login(username){ // here we can give a default value also by syntax: username = "sam" 
    if(!undefined){ // this means username === undefined because undefined meaning is false here
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(login())


function cartprice(...num1){
    return num1
}
console.log(cartprice(200,300,400,500,600))

function cartprice1(val1,val2,...num1){
    return num1
}
console.log(cartprice1(200,300,400,500,600))

const user = {
    name: "hitesh",
    price: 19
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}

handleobject(user)
handleobject({ name: "sam", price: 399}) // we cam use this method also

const myarray = [200, 300, 400]

function returnvalue(anyarray){
    return anyarray[1]
}

console.log(returnvalue(myarray))
console.log(returnvalue([200,300,400]))