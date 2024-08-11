class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//****************BEHIND THE SCENES (IF CLASSES WERE NOT THERE)************ */

function newUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

newUser.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

newUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new newUser("tea", "tea@gmail.com", "456");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());