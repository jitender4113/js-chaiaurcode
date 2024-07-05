let myDate = new Date()

console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let mycreateddate = new Date(2023, 0, 23)
let mycreateddate2 = new Date(2023, 0, 23, 5, 3)
let mycreateddate3 = new Date("2023-01-22")
let mycreateddate4 = new Date("01-22-2023")


console.log(mycreateddate.toLocaleString())
console.log(mycreateddate2.toLocaleString())
console.log(mycreateddate3.toLocaleString())
console.log(mycreateddate4.toLocaleString())

let mytimestamp = Date.now()

console.log(mytimestamp)
console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/1000)) // in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay()) 


newDate.toLocaleString('default', {
    weekday: "long"
})


