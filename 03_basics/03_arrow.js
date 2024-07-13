const user = {
    username : "hitesh",
    price : 999,

    welcomemessage : function() { 
        console.log(`${this.username} ,  welcome to website`)
        console.log(this);
    }
}

user.welcomemessage()
user.username = "sam"
user.welcomemessage()

console.log(this);


function chai(){
    let username = "hitesh"
    console.log(this.username)
}
chai()

const chai2 = function(){
    let username = "hitesh"
    console.log(this.username)
}
chai2()

const chai3 = () => {
    let username = "hitesh"
    console.log(this.username)
}
chai3()


const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(3,4))

const addtwo2 = (num1, num2) => (num1 + num2)
console.log(addtwo2(4,5))

const addtwo3 = (num1, num2) => num1 + num2
console.log(addtwo3(5,5))

const addtwo4 = (num1, num2) => ({username: "hitessh"})
console.log(addtwo4(5,5))
