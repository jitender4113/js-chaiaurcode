let a = 300

if(true){
    let a = 10
    console.log("inner: ", a)
}

console.log(a)


console.log(addone(5))
function addone(num){
    return num + 1
}

console.log(addtwo(5)) // this will give error because we can't access it before initialization.
const addtwo = function(num){
    return num + 2
}