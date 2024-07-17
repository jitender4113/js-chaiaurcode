const mynum = [1, 2, 3 ]

const mytotal = mynum.reduce( function(accumulator, currentvalue){
    return accumulator + currentvalue
}, 0)

console.log(mytotal)

const mytotal2 = mynum.reduce((acc, curr) => acc+curr, 0)
console.log(mytotal2)


const shoppingcart = [
    {
        itemname: "js",
        price: 2999
    },
    {
        itemname: "py",
        price: 999
    },
    {
        itemname: "c++",
        price: 5999
    },
]

const totalamount = shoppingcart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalamount)