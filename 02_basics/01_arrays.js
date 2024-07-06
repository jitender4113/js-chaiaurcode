// javascript arrays are resizeable. it creates shallow copy that means original array will be changed if we change element from the duplicate array.

const arr = [0,1,2,3,4]

arr.push(6)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(9)
console.log(arr)

arr.shift()
console.log(arr)
 
const newarr = arr.join()
console.log(arr)
console.log(newarr)
console.log(typeof newarr)


console.log("original ", arr)

const myn1 = arr.slice(1,3)
console.log(myn1)
console.log("after slice ", arr)

const myn2 = arr.splice(1,3)
console.log(myn2)
console.log("after splice ", arr)












