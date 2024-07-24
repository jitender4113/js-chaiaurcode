const user = {
    username: "jatin",
    loginocunt: 8,
    isloggedin: true,

    getuser: function(){
        console.log(`got user details`)
        console.log(this.username)
        console.log(this)
    }
    
}

console.log(user.username)
console.log(user.getuser())
console.log(this)



function user1(username, logincount, isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    return this
}

const userone = user1("harsh", 12, true)
const usertwo = user1("shubham", 8, false) //here value of usertwo is updated without call because of not use of new operator.
console.log(userone)


function user2(username, logincount, isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    this.greeting = function(){
        console.log(this.username)
    }
    return this
}

const userone2 = new user2("harsh", 12, true)
const usertwo2 = new user2("shubham", 8, false) 
console.log(userone2)
console.log(usertwo2)
console.log(usertwo2.constructor)
