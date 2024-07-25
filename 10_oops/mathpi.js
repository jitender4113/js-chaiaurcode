const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)


const chai = {
    name: 'chai',
    price: 250,
    isavailable: true,

    orderchai: function(){
        console.log(`chai nhi bni`)
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))
