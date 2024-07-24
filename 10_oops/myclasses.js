class user{
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptpass(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@gmail.com", "123")
console.log(chai.encryptpass())
console.log(chai.changeusername())

//behind the scene

function user1(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

user1.prototype.encryptpass = function(){
    return `${this.password}abc`
}

const tea = new user1("tea", "tea@gmail.com", "321")
console.log(tea.encryptpass())
