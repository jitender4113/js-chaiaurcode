// literals object 
//const tinderuser = {}

//singelton object
const tinderuser = new Object()

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

console.log(tinderuser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularuser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3)


const users = [
    {
        id: 1
    },
    {
        name: 2,
        email: 3
    }
]

console.log(users[1].name)

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('logged'))


const course = {
    coursename: "js in hindi",
    price: "909",
    courseinstructor: "hitesh"
}

//course.courseinstructor
const{courseinstructor} = course
console.log(courseinstructor)

const{courseinstructor: a} = course
console.log(a)