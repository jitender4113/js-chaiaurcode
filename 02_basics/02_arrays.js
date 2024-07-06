const arr1 = [1,2,3]
const arr2 = [11,12,13]

arr1.push(arr2)
console.log(arr1)

const arr3 = [1,2,3]
const arr4 = [11,12,13]

const newarr2 = arr3.concat(arr4)
console.log(newarr2)

const arr5 = [1,2,3]
const arr6 = [11,12,13]

const newarr3 = [...arr5, ...arr6]
console.log(newarr3)


const another_array = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"})) //object


let score1 = 100
let score2 = 200
let score3 = 300
 console.log(Array.of(score1, score2, score3))
