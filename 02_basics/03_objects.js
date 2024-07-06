// object literals

const mysym = Symbol("key1")

const jsuser = {
    name: "hitesh",
    "full name": "hitesh chaudhary",
    [mysym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email"])

//console.log(jsuser.full name) this will give error
console.log(jsuser["full name"])
console.log(jsuser[mysym])
console.log(typeof jsuser[mysym])


jsuser.email =  "lokeshjatin2@gmail.com"
//Object.freeze(jsuser)
//jsuser.email =  "jatin2@gmail.com"
console.log(jsuser)

jsuser.greeting = function(){
  console.log("hello js user");
}

jsuser.Greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.Greetingtwo());

