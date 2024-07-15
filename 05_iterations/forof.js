// for of

const ar = [1, 2, 3, 4]
for(const a of ar){
    console.log(a)
}

//maps

const m = new Map()
m.set('IN', "India")
m.set('FR', "France")

console.log(m)

for(const key of m){
    console.log(key)
}
for(const [key, value] of m){
    console.log(key, ':-', value)
}a