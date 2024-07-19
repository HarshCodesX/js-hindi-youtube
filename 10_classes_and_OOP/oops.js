// **********************about object literal*************

const user = {
    username: "harsh",
    loginCount: 8,
    signedIn: "true",

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// ***************constructor function****************

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; //its upto you if you write this or not, it will implicitly return the values
}

const userOne = new User("harsh", 8, true);
const userTwo = new User("ChaiAurCode", 12, false);
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);