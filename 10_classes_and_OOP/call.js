function SetUsername(username) {
    this.username = username;
    console.log("I am called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username); 
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);





//**********chat gpt approach*********** */
// function SetUsername(username) {
//     this.username = username; // Correctly set the username property
//     console.log("I am called");
// }

// function createUser(username, email, password) {
//     const user = new SetUsername(username); // Use 'new' to create a new SetUsername object
//     user.email = email;
//     user.password = password;
//     return user; // Return the user object
// }

// const chai = createUser("chai", "chai@fb.com", "123");
// console.log(chai); // Outputs the user object with username, email, and password properties
