function multiplyby5(num){
    return num*5;
}

multiplyby5.power = 2

console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

function createuser(username, score){
    this.username = username
    this.score = score
}
createuser.prototype.increment = function(){
    this.score++                              //this mtlb jis //jisne bhi bulaya h uska kaam krdo
}
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`)                          
}

const chai = new createuser("chai", 25)
const tea = createuser("tea", 250)

chai.printme()
