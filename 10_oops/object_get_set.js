const user = {
    _email: 'jatin@gmail.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set password(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email)