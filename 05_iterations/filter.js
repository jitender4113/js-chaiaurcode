const arr = [1, 2, 3, 4]

const value = arr.forEach( (item) => {
    return item
})

console.log(value) // foreach loop doesn't return any value

const mynums = [1, 2, 3, 4, 5]

const number = mynums.filter( (num) =>{
    return num>2
})
console.log(number)