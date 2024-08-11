class User {
    constructor(username, email, password){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse();
chai.logMe();

console.log(" ");
const masalaChai = new User("masalachai");
// masalaChai.addCourse(); //it doesnt have access to addCourse
masalaChai.logMe();

console.log(" ");
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
//both are true because Teacher class extends User class, therefore chai is considered as instance of both

console.log(" ");
console.log(masalaChai instanceof User);
console.log(masalaChai instanceof Teacher);