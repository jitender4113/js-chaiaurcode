const promiseOne = new Promise(function(resolve,reject){
    //do async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "jatin", enail: "lokeshjatin2@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error === false){
            resolve({username: "jatin", enail: "lokeshjatin2@gmail.com"})
        }
        else{
            reject("error! something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log("promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error === false){
            resolve({username: "jatin5", enail: "lokeshjatin5@gmail.com"})
        }
        else{
            reject("error! js5 went wrong")
        }
    },1000)
})

async function consumefive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumefive()


async function getalluser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("e: error")
    }
}

getalluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
