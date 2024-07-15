const coding = ["js", "ruby", "java", "py"]

coding.forEach( function(item){
    console.log(item)
})

//arrow function
console.log("arrow function")

coding.forEach( (item) => {
    console.log(item)
})

//by function
console.log("by function")

function printme(item){
    console.log(item)
}
coding.forEach(printme)

//printing all info
console.log("printing all info")

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

//object in array
console.log("object in array")

const mycoding = [
    {
        langyagename: "javascript",
        languagetype: "js"
    },
    {
        langyagename: "python",
        languagetype: "py"
    },
    {
        langyagename: "java",
        languagetype: "java"
    },
]

mycoding.forEach( (item) =>{
    console.log(item.languagetype)
})