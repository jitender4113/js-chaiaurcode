function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return `${this._email}@gmail.com`
        },
        set: function(value){
            this._email = value
        
        }
    })
}
const hitesh = new User("hitesh", "abbc")
console.log(hitesh.email)

