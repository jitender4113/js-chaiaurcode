class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username: ${this.username}`)
    }
    static createid(){
        return `123`
    }
}

const hitesh = new user("hitesh")
// console.log(hitesh.createid())

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@gmail.com")
iphone.logme()
console.log(iphone.createid())