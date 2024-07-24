let myname = "hitesh     "

let arr = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){                   //string, function, array ye sb object me se paass hokr jaenge to hum in sbko object k through access kr skte h
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyhitesh = function(){                //ye sirf array valo se access hoga
    console.log(`hitesh say present to only array`)
}

heropower.getspiderpower()

heropower.hitesh()
arr.hitesh()
myname.hitesh()

arr.heyhitesh()
// heropower.heyhitesh()
// myname.heyhitesh()



//inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makevideo: true
}

const teachingsupport = {
    isavailable: false
}

const tasupport = {
    makeassignment: 'js assignment',
    fulltime: true,
    __proto__: teachingsupport      //ye teachingsupport ki property bhi access kr sktaa h
}

teacher.__proto__ = user           // ye teacher user ki sari property accesskr skta h

//modern syntax
Object.setPrototypeOf(teachingsupport, teacher)         //teachingsupport abb teacher ki sari properties access kr skta h



let anotherusername = "chaiaurcode       "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`)
}

anotherusername.truelength()
"hitesh".truelength()
"    jatin   ".truelength()