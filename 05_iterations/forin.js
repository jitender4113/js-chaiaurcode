//object

const obj = {
    js: "javascript",
    py: "python",
    cpp: "c++",
    rb: "ruby"
}

for(const key in obj){
    console.log(`${key} means ${obj[key]}`)
}

//array

const arr = ["ajva", "js", "py", "rb"]

for(const key in arr){
    console.log(`${arr[key]} on key ${key}`)
}