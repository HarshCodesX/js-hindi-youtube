class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}harsh`; //encrypting password by adding a string
    }

    set password(value){
        this._password = value;
    }
}

const harsh = new User("harsh@gmail.com", "abc");
console.log(harsh.email);
console.log(harsh.password);
