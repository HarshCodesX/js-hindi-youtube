class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createId(){ //using static because we dont want any object of class User to use this method
        return `123`;
    }
}

const harsh = new User("harsh");
// console.log(harsh.createId()); //it will throw error

//now sometimes we dont want to give access of this method to those objects which is instantiated from this "User" class
//for that purpose we will use "static" keyword
/* 
 static createId(){
    return `123`;
 }
*/

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com");
iphone.logMe();
console.log(iphone.createId()); //it will also throw an error