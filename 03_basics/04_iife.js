// immediately invoked function expressions

(function chai(){
    console.log(`db connected`)
})();

( () => {
    console.log(`db cconnected two`)
})();

( (name) => {
    console.log(`db cconnected three ${name}`)
})('hitesh');